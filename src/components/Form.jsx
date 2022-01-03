import React from 'react';
import {Formik, Form as Forms, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import Alert from './Alert';

const Form = () => {
   // Validaciones del formulario
   const newSchema = yup.object().shape({
      nombre: yup.string().min(3, 'El nombre es muy corto').max(20, 'El nombre es muy largo').required('El nombre es obligatorio'),
      empresa: yup.string().required('El nombre de la empresa es obligatorio'),
      email: yup.string().email('Email no valido').required('El email es obligatorio'),
      telefono: yup.number().positive('Número no válido').integer().typeError('El número no es válido'),
      notas: '',
   });

   const handleSubmit = async (values) => {
      try {
         const url = 'http://localhost:4000/clientes';

         const respuesta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
               'Content-Type': 'application/json',
            },
         });

         const resultado = await respuesta.json();

         console.log(resultado);
      } catch (error) {}
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
            onSubmit={async (values, {resetForm}) => {
               await handleSubmit(values);

               resetForm();
            }}
            validationSchema={newSchema}>
            {({errors, touched}) => {
               return (
                  <Forms className="mt-10">
                     <div className="mb-4">
                        <label className="text-gray-400" htmlFor="nombre">
                           Nombre:
                        </label>

                        <Field
                           //
                           id="nombre"
                           type="text"
                           className="mt-2 block w-full p-3 bg-gray-900 rounded-md"
                           placeholder="Nombre del Cliente"
                           name="nombre"
                        />

                        {/* Validaciones del formulario */}
                        {errors.nombre && touched.nombre ? <Alert mensaje={errors.nombre} /> : null}
                     </div>

                     <div className="mb-4">
                        <label className="text-gray-400" htmlFor="empresa">
                           Empresa:
                        </label>

                        <Field
                           //
                           id="empresa"
                           type="text"
                           className="mt-2 block w-full p-3 bg-gray-900 rounded-md"
                           placeholder="Empresa del Cliente"
                           name="empresa"
                        />
                        {errors.empresa && touched.empresa ? <Alert mensaje={errors.empresa} /> : null}
                     </div>

                     <div className="mb-4">
                        <label className="text-gray-400" htmlFor="email">
                           E-mail:
                        </label>

                        <Field
                           //
                           id="email"
                           type="email"
                           className="mt-2 block w-full p-3 bg-gray-900 rounded-md"
                           placeholder="Email del Cliente"
                           name="email"
                        />

                        {errors.email && touched.email ? <Alert mensaje={errors.email} /> : null}
                     </div>

                     <div className="mb-4">
                        <label className="text-gray-400" htmlFor="telefono">
                           Teléfono:
                        </label>

                        <Field
                           //
                           id="telefono"
                           type="tel"
                           className="mt-2 block w-full p-3 bg-gray-900 rounded-md"
                           placeholder="Teléfono del Cliente"
                           name="telefono"
                        />
                        {errors.telefono && touched.telefono ? <Alert mensaje={errors.telefono} /> : null}
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
                           className="mt-2 block w-full p-3 bg-gray-900 h-40 rounded-md resize-none"
                           placeholder="Notas del Cliente"
                           name="notas"
                        />
                     </div>

                     <button
                        //
                        className="mt-5 w-full bg-gray-300 p-3 text-gray-900 uppercase font-bold text-lg rounded-md hover:bg-gray-400"
                        type="submit">
                        Agregar Cliente
                     </button>
                  </Forms>
               );
            }}
         </Formik>
      </div>
   );
};

export default Form;
