import React from 'react';

const Alert = ({mensaje}) => {
   return (
      <div
         //
         className="text-center my-4 bg-red-900 rounded-md font-bold p-3 uppercase">
         {mensaje}
      </div>
   );
};

export default Alert;
