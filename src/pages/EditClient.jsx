import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Alert from '../components/Alert';
import Form from '../components/Form';

const EditClient = () => {
   const [cliente, setCliente] = useState({});
   const [cargando, setCargando] = useState(true);

   const {id} = useParams();

   useEffect(() => {
      const obtenerClienteAPI = async () => {
         try {
            const url = `${import.meta.env.VITE_API_URL}/${id}`;

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            setCliente(resultado);
         } catch (error) {
            console.log(error);
         }

         setCargando(!cargando);
      };
      obtenerClienteAPI();
   }, []);

   return (
      <div>
         <h1 className="font-black text-4xl">Editar cliente</h1>
         <p className="mt-3">Utiliza este formulario para editar datos de un cliente</p>

         {cliente?.nombre ? (
            <Form
               //
               titleForm="Editar Cliente"
               titleButton="Guardar"
               cliente={cliente}
               cargando={cargando}
            />
         ) : (
            <Alert mensaje="Cliente ID no valido" />
         )}
      </div>
   );
};

export default EditClient;
