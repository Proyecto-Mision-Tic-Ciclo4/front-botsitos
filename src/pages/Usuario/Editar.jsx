import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIO } from '../../graphql/usuarios/queries';
import Input from '../../components/input';
import ButtonLoading from '../../components/ButtonLoading';
import useFormData from '../../hooks/userFormData';
import { toast } from 'react-toastify';
import { EDITAR_USUARIO } from '../../graphql/usuarios/mutations';
import DropDown from '../../components/Dropdown';
import { Enum_EstadoUsuario } from '../../utils/enum';
import '../../styles/Ediciones/editarUsuario.scss'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const EditarUsuario = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_USUARIO, {
    variables: { _id },
  });

  console.log(queryData);

  const [editarUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDITAR_USUARIO);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('fd', formData);
    delete formData.rol;
    editarUsuario({
      variables: { _id, ...formData },
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success('Usuario modificado correctamente');
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error modificando el usuario');
    }

    if (queryError) {
      toast.error('Error consultando el usuario');
    }
  }, [queryError, mutationError]);

if (queryLoading) return <div>Cargando....</div>;

  return (
    <div >
     <Link to='/usuario/index' className='icon'>
        <span><BsFillArrowLeftCircleFill/></span>
      </Link>
      <h1 >Editar Usuario</h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}            
      >
        <Input
          label='Nombre de la persona:'
          type='text'
          name='nombre'
          defaultValue={queryData.Usuario.nombre}
          required={true}          
        />
        <Input
          label='Apellido de la persona:'
          type='text'
          name='apellido'
          defaultValue={queryData.Usuario.apellido}
          required={true}
        />
        <Input
          label='Correo de la persona:'
          type='email'
          name='correo'
          defaultValue={queryData.Usuario.correo}
          required={true}
        />
        <Input
          label='Identificación de la persona:'
          type='text'
          name='identificacion'
          defaultValue={queryData.Usuario.identificacion}
          required={true}          
        />
        <DropDown
          label='Estado de la persona:'
          name='estado'
          defaultValue={queryData.Usuario.estado}
          required={true}
          options={Enum_EstadoUsuario}
          
        />
        <span className='drop'>Rol del usuario: {queryData.Usuario.rol}</span>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Confirmar'          
        />
  </form>
    </div>
  );
};

export default EditarUsuario;