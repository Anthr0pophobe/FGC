import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import Logout from '../src/components/Logout';
import { getCookies } from 'cookies-next';
 

const index = () => {

  console.log('index -> cookies = ',getCookies())

  return (
    <>
    <body>
      <h1>Home</h1>
      

      <Logout />
    </body>
    </>
  );
}

export default index