export interface Business {
  fechaRegistro: Date;
  verificada: boolean;
  motivoRegistro: string;
  logoEmpresa?: string; // Campo opcional
  nombreComercial: string;
  razonSocial: string;
  rfc: string;
  correoElectronico: string;
  telefono: string;
  descripcionEmpresa: string;
  municipio: string;
  calle: string;
  numero: string;
  colonia: string;
  paisOrigen: string;
  perfilesEmpresa: string[];
  sector: string;
  actividad: string;
  tamanoEmpresa: string;
  tipoEmpresa: string;
  tipoSucursal: string;
}
