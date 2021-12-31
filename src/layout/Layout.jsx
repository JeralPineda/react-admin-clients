import {Link, Outlet, useLocation} from 'react-router-dom';

const Layout = () => {
   const location = useLocation();

   const urlActual = location.pathname;

   return (
      <div className="md:flex md:min-h-screen bg-gray-800 text-white">
         <div className="md:w-1/4 bg-gray-900  px-5 py-10">
            <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
            <nav className="mt-10">
               <Link
                  //
                  className={`${urlActual === '/clientes' ? 'text-slate-200' : 'text-white'}  text-2xl block mt-2 hover:text-gray-400`}
                  to="/clientes">
                  Clientes
               </Link>
               <Link
                  //
                  className={`${urlActual === '/clientes/nuevo' ? 'text-gray-400' : 'text-white'}  text-2xl block mt-2 hover:text-gray-400`}
                  to="/clientes/nuevo">
                  Nuevo Cliente
               </Link>
            </nav>
         </div>

         <div className="md:w-3/4 p-10">
            <Outlet />
         </div>
      </div>
   );
};

export default Layout;
