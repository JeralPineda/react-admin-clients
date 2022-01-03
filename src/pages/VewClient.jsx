import {useParams} from 'react-router-dom';

const VewClient = () => {
   const {id} = useParams();

   return (
      <div>
         <h1>Ver Cliente</h1>
      </div>
   );
};

export default VewClient;
