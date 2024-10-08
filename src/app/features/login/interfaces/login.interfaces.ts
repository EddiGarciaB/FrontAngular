export interface RequestLogin {
    username: string,
    password: string
  }
  
  export interface ResponseLogin {
    nombres:           string;
    primerApellido:    string;
    segundoApellido:   null;
    nroIdentificacion: string;
    correoElectronico: string;
    nroCelular:        null;
    detalleDireccion:  string;
    listRoles:         string[];
  }
  