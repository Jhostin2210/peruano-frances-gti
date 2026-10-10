# Abre con Microsoft Word cada documento generado, actualiza su tabla de contenido,
# lo exporta a PDF y copia Word y PDF a public/documentos para que el blog los ofrezca.
# Uso: powershell -File documentacion/exportar-pdf.ps1
param([string]$Manifiesto = (Join-Path $PSScriptRoot ".salida\manifiesto.json"))

$m = Get-Content -LiteralPath $Manifiesto -Raw -Encoding UTF8 | ConvertFrom-Json
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0
$ok = 0
try {
  foreach ($d in $m.documentos) {
    $doc = $word.Documents.Open($d.docx, $false, $false, $false)
    for ($i = 1; $i -le $doc.TablesOfContents.Count; $i++) { $doc.TablesOfContents.Item($i).Update() }
    $paginas = $doc.ComputeStatistics(2)
    # La caratula es la primera seccion y debe ocupar una sola pagina.
    $finCaratula = $doc.Sections.Item(1).Range.Information(3)
    if ($finCaratula -gt 1) { "AVISO {0}: la caratula ocupa {1} paginas" -f $d.id, $finCaratula }
    $doc.Save()
    $doc.ExportAsFixedFormat($d.pdf, 17)
    $doc.Close($false)
    New-Item -ItemType Directory -Force (Split-Path $d.publicoDocx) | Out-Null
    Copy-Item -LiteralPath $d.docx -Destination $d.publicoDocx -Force
    Copy-Item -LiteralPath $d.pdf -Destination $d.publicoPdf -Force
    "{0}: {1} paginas" -f $d.id, $paginas
    $ok++
  }
}
finally {
  $word.Quit()
  [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
}
"PDF exportados: $ok de $($m.documentos.Count)"
