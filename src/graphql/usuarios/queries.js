import { gql } from '@apollo/client';
<<<<<<< HEAD
const GET_USUARIOS = gql`
  query Query($filtro: FiltroUsuarios) {
    Usuarios(filtro: $filtro) {
=======

const GET_USUARIOS = gql`
  query Usuarios {
    Usuarios {
>>>>>>> b79c91f64cb1afbc34ac041c5af078cd18f0342e
      _id
      nombre
      apellido
      correo
      estado
      identificacion
      rol
    }
  }
`;
<<<<<<< HEAD
=======

>>>>>>> b79c91f64cb1afbc34ac041c5af078cd18f0342e
const GET_USUARIO = gql`
  query Usuario($_id: String!) {
    Usuario(_id: $_id) {
      _id
      nombre
      apellido
      correo
      estado
      identificacion
      rol
<<<<<<< HEAD
      foto
    }
  }
`;
=======
    }
  }
`;

>>>>>>> b79c91f64cb1afbc34ac041c5af078cd18f0342e
export { GET_USUARIOS, GET_USUARIO };