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
import { getCookie } from 'cookies-next';
import Logout from '../src/components/Logout';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { getCookies } from 'cookies-next';
 

const index = () => {

  console.log(getCookies())

  return (
    <>
      <h1>Home</h1>
      <Logout />
    </>
  );
}

export default index