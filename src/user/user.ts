import { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
  fechaRegistro: string;
  motivoRegistro?: string;
  registroCompleto?: boolean;
  nombre: string;
  apellidos: string;
  curp: string;
  fecNac: string;
  edad: number;
  genero: boolean;
  correoElectronico: string;
  telefono?: string;
  municipio: string;
  calle?: string;
  numero?: number;
  colonia?: string;
  codigoPostal?: number;
  escolaridad: string;
  plantel?: string;
  idiomas: string[];
  habilidadesBlandas: string[];
  habilidadesTecnicas: string[];
  actividadActual?: string;
  buscaEmpleo: boolean;
  trabajando: boolean;
  disponibilidadViaje: boolean;
  disponibilidadRadicar: boolean;
  buscaOpcion1?: string;
  buscaOpcion2?: string;
  buscaOpcion3?: string;
  registroExpress?: boolean;
  numeroSeguroSocial?: string;
}
