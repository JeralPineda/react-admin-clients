import React from 'react';

const Client = ({cliente}) => {
   return (
      <div>
         <h1>{cliente.nombre}</h1>
      </div>
   );
};

export default Client;
