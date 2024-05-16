import { RowDataPacket } from "mysql2";

interface Business {
  fechaRegistro: string;
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
  numero: number;
  colonia: string;
  codigoPostal?: number;
  paisOrigen: string;
  perfilesEmpresa: string[];
  sector: string;
  actividad: string;
  tamanoEmpresa: string;
  tipoEmpresa: string;
  tipoSucursal: string;
};

type BusinessRDP = Business & RowDataPacket;

export { Business, BusinessRDP };