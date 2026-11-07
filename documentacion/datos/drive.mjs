// Enlaces de Google Drive de los documentos de gestión (carpeta «Documentación» subida por el equipo).
// Fuente: Lista_enlaces_documentos.xlsx (20/10/2026), verificados el 21/10/2026: los 26 abren sin iniciar sesión.
// Al cambiar un Word se sube como nueva versión del mismo archivo en Drive («Administrar versiones»), así el enlace no cambia.

export const DRIVE_CARPETA = "https://drive.google.com/drive/folders/1XRES5CZ7T-1BxqLaRGALFxZDjROnNjF7";

const ARCHIVOS = {
  "BASE-01": "18jk_u6bpUdz6KDBml4QRbArNp2XAPoxg",
  "GOB-01": "1-LXALLy0nxrjBx8jUOSZuRXyGG1FgGL7",
  "GOB-02": "1-RV3qy4tNcR463oq5pzNUkhc97x_2gtX",
  "GOB-03": "13gZY5mrzkBrcbx5i_OsVqMEZaP60hFWG",
  "GOB-12": "1-fKkCdb72Xk3e0t6xDx93MtEv6CdJnQU",
  "GOB-04": "1-JZ8qVz3mV2Th8U1F1Wu9iH-kMVjb81X",
  "GOB-05": "1aX92fDwIJr1aoTdSGRptSgRmtjL6BnaT",
  "GOB-06": "1FY-VMvSE0sm9kHGWZpGRWwdOC37kyv4k",
  "GOB-07": "1qrXurvAGQcby22hl4nRlMm4u8yxlYHRS",
  "GOB-08": "1-ypTO7ajwz8qvHAOojb-51sM9XvjRrWC",
  "GOB-09": "1yY1gNRBcI8Ydz9QnOreItt2CgU9-BdsG",
  "GOB-10": "16NuJVDQzJAE-Uk9rGZfLq8uTR_qgt0ue",
  "GOB-11": "1vfRV84qb3XeNQX4uQCi1YzsUWlMbCBcl",
  "INT-01": "1YaZAbDKjUrvsv5Z70W6DSHpPaNy1jAky",
  "INT-02": "1OtMy3BWJtM8krDqc9J0HZNm4tqd-oPj9",
  "INT-04": "1G7BiLno-vOih88EHfWyWRzb-Wbvx6W1w",
  "INT-05": "1nWB2M13GjDzbzT7KCtCbWB0B8I0bQ1F8",
  "INT-03": "1z0R1F6IIdWfBQqQl-jj5WkgVUop6X6Fo",
  "INT-06": "1rDKKC1FdkN3tliwMU3pRPU0jP1AhH_G7",
  "INT-07": "1yiOygw7RhtpYNvbmNy-AVPT6qO6VG7U-",
  "ALC-01": "1h09v8TvLCfzdkgl0Ev4BmcUNuugNOcAn",
  "ALC-02": "1sYJbV7kekeXonhte9MUjnuu1h6ykjZ5t",
  "ALC-03": "1RXk1r5n5JhTDOGN35ybWJgnHi50bpvRc",
  "ALC-04": "1LSWrbXPY2o7ChgUFdcmdPe__dA1xf6Ai",
  "ALC-05": "1PNypm_v1OYE8V_anF6oO47e8_lONrxKQ",
  "CRO-01": "1qtjLB_ofYWwJJDKiBJqYF5eWmoyd_PQM",
  "REC-01": "1r71Hlpg_NXEQUV4vVLHpBPlkZ6U-c_Ze", // subido el 07/11/2026
};

export const enlaceDrive = (codigo) => (ARCHIVOS[codigo] ? `https://drive.google.com/file/d/${ARCHIVOS[codigo]}/view` : null);
