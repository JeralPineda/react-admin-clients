import {useEffect, useState} from 'react';
import Client from '../components/Client';

const Home = () => {
   const [clientes, setClientes] = useState([]);

   useEffect(() => {
      const obtenerClientesAPI = async () => {
         try {
            const url = `${import.meta.env.VITE_API_URL}`;

            const respuesta = await fetch(url);

            const resultado = await respuesta.json();

            setClientes(resultado);
         } catch (error) {
            console.log(error);
         }
      };

      obtenerClientesAPI();
   }, []);

   const handleDelete = async (id) => {
      const confirmar = confirm('¿Deseas eliminar este cliente?');

      if (confirmar) {
         try {
            const url = `http://localhost:4000/clientes/${id}`;

            const respuesta = await fetch(url, {
               method: 'DELETE',
            });

            await respuesta.json();

            // actualizar el state
            const arrayClientes = clientes.filter((cliente) => cliente.id !== id);
            setClientes(arrayClientes);
         } catch (error) {
            console.log(error);
         }
      }
   };

   return (
      <>
         <h1 className="font-black text-4xl">Clientes</h1>
         <p className="mt-3">Administra tus clientes</p>

         <table className="w-full mt-5 table-auto shadow-xl bg-gray-600">
            <thead className="bg-gray-800">
               <tr>
                  <th className="p-2">Nombre</th>
                  <th className="p-2">Contacto</th>
                  <th className="p-2">Empresa</th>
                  <th className="p-2">Acciones</th>
               </tr>
            </thead>

            <tbody>
               {clientes.map((cliente) => (
                  <Client
                     //
                     key={cliente.id}
                     cliente={cliente}
                     handleDelete={handleDelete}
                  />
               ))}
            </tbody>
         </table>
      </>
   );
};

export default Home;
