import Form from '../components/Form';

const NewClient = () => {
   return (
      <div>
         <h1 className="font-black text-4xl">Nuevo cliente</h1>
         <p className="mt-3">Llena los siguientes campo para registrar un cliente</p>

         <Form titleForm="Agregar Cliente" titleButton="Agregar Cliente" />
      </div>
   );
};

export default NewClient;
