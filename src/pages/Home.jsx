import {useEffect, useState} from 'react';
import Client from '../components/Client';

const Home = () => {
   const [clientes, setClientes] = useState([]);

   useEffect(() => {
      const obtenerClientesAPI = async () => {
         try {
            const url = 'http://localhost:4000/clientes';

            const respuesta = await fetch(url);

            const resultado = await respuesta.json();

            setClientes(resultado);
         } catch (error) {
            console.log(error);
         }
      };

      obtenerClientesAPI();
   }, []);

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
                  <Client key={cliente.id} cliente={cliente} />
               ))}
            </tbody>
         </table>
      </>
   );
};

export default Home;
