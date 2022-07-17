import { Line } from 'react-chartjs-2';
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

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = () => {

  const { data, error } = useSWR('http://localhost:3008/api/users/1', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)

  return (
    <>
      <h1></h1>
      <p></p>
    </>
  );
}

export async function getUserConnected() {
  
  const userId = 1

  const response = await fetch(`http://localhost:3008/api/users/1`).then(() => {
    
  })
  return await response.json();
}

export default Home