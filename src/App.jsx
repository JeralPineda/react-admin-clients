import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import EditClient from './pages/EditClient';
import Home from './pages/Home';
import NewClient from './pages/NewClient';

function App() {
   return (
      <Router>
         <Routes>
            
            <Route path='/clientes' element={<Layout />}>
               <Route index element={<Home />} />
               <Route path='nuevo' element={<NewClient />} />
               <Route  path='editar' element={<EditClient />} />
               <Route  path='editar/:id' element={<EditClient />} />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
