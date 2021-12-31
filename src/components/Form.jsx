import React from 'react';
import {Formik, Form as Forms, Field, ErrorMessage} from 'formik';

const Form = () => {
   const handleSubmit = (values) => {
      console.log(values);
   };

   return (
      <div className="bg-gray-800 mt-10 px-5 py-10 rounded-md md:w-3/4 mx-auto shadow-xl">
         <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar Cliente</h1>

         <Formik
            initialValues={{
               nombre: '',
               empresa: '',
               email: '',
               telefono: '',
               notas: '',
            }}
            onSubmit={(values) => {
               handleSubmit(values);
            }}>
            {() => (
               <Forms className="mt-10">
                  <div className="mb-4">
                     <label className="text-gray-400" htmlFor="nombre">
                        Nombre:
                     </label>
                     <Field
                        //
                        id="nombre"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-900"
                        placeholder="Nombre del Cliente"
                        name="nombre"
                     />
                  </div>

                  <div className="mb-4">
                     <label className="text-gray-400" htmlFor="empresa">
                        Empresa:
                     </label>
                     <Field
                        //
                        id="empresa"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-900"
                        placeholder="Empresa del Cliente"
                        name="empresa"
                     />
                  </div>

                  <div className="mb-4">
                     <label className="text-gray-400" htmlFor="email">
                        E-mail:
                     </label>
                     <Field
                        //
                        id="email"
                        type="email"
                        className="mt-2 block w-full p-3 bg-gray-900"
                        placeholder="Email del Cliente"
                        name="email"
                     />
                  </div>

                  <div className="mb-4">
                     <label className="text-gray-400" htmlFor="telefono">
                        Teléfono:
                     </label>
                     <Field
                        //
                        id="telefono"
                        type="tel"
                        className="mt-2 block w-full p-3 bg-gray-900"
                        placeholder="Teléfono del Cliente"
                        name="telefono"
                     />
                  </div>

                  <div className="mb-4">
                     <label className="text-gray-400" htmlFor="notas">
                        Notas:
                     </label>
                     <Field
                        //
                        as="textarea"
                        id="notas"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-900 h-40"
                        placeholder="Notas del Cliente"
                        name="notas"
                     />
                  </div>

                  <button className="mt-5 w-full bg-gray-300 p-3 text-gray-900 uppercase font-bold text-lg rounded-md hover:bg-gray-400" type="submit">
                     Agregar Cliente
                  </button>
               </Forms>
            )}
         </Formik>
      </div>
   );
};

export default Form;
