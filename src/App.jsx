import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Login from './layout/Login';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<Login />}>
                <Route index element={<LoginForm/>} />
            </Route>

            <Route path='/clientes' element={<Layout />}>
               <Route index element={<Home />} />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
