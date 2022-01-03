import React from 'react';
import {useNavigate} from 'react-router-dom';

const Client = ({cliente, handleDelete}) => {
   const navigate = useNavigate();

   const {nombre, empresa, email, telefono, notas, id} = cliente;

   return (
      <tr className="text-center  hover:bg-gray-700">
         <td className="p-3">{nombre}</td>
         <td className="p-3">
            <p>
               <span className="text-gray-900 uppercase font-bold">Email:</span> {email}
            </p>
            <p>
               <span className="text-gray-900 uppercase font-bold">Tel:</span> {telefono}
            </p>
         </td>
         <td className="p-3">{empresa}</td>
         <td className="p-3">
            <button
               //
               type="button"
               className="bg-gray-800 hover:bg-gray-900 w-full rounded-md  p-2 uppercase font-bold text-xs mb-1"
               onClick={() => navigate(`/clientes/${id}`)}>
               ver
            </button>
            <button
               //
               type="button"
               className="bg-blue-500 hover:bg-blue-600 w-full rounded-md  p-2 uppercase font-bold text-xs mb-1"
               onClick={() => navigate(`/clientes/editar/${id}`)}>
               Editar
            </button>
            <button
               //
               type="button"
               className="bg-red-700 hover:bg-red-800 w-full rounded-md  p-2 uppercase font-bold text-xs"
               onClick={() => handleDelete(id)}>
               Eliminar
            </button>
         </td>
      </tr>
   );
};

export default Client;
