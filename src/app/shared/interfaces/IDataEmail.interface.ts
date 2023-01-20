export interface IDataEmail {
  nombre: string;
  celular: string;
  correo: string;
  indicativo: string;
  autoriza?: boolean;
}

export interface Response {
  message: string;
  statusCode: number;
}
