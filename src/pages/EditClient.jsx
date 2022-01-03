import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';

const EditClient = () => {
   const [cliente, setCliente] = useState({});
   const [cargando, setCargando] = useState(true);

   const { id } = useParams();

   useEffect(() => {
      const obtenerClienteAPI = async () => {
         try {
            const url = `http://localhost:4000/clientes/${id}`;

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

         <Form titleForm="Editar Cliente" titleButton="Guardar" cliente={cliente} />
      </div>
   );
};

export default EditClient;
