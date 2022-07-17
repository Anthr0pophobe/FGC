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

const Home = () => {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  
  return (
    <>
          <div className='bg-red h-[500px] flex flex-col rounded-xl mt-4 '>
      <div className="flex-[2] bg-slate-500 h-full rounded-t-xl">
        Bannière
      </div>
      <div className="flex-[3] bg-slate-200 h-full rounded-b-xl flex flex-row">
        <div className=" ml-64 flex-[1] flex flex-col">
        <h1 className="text-3xl ">Anthropophobe</h1>
        <div className="flex flex-1">
          <div className=" w-64"> Description du joueur
          </div>
          <div className=" flex-1">Carouselle des historique tournoi</div>
        </div>
        </div>
      </div>
    </div>
    <div className=" w-48 h-48 bg-red-700 absolute top-[20%] left-48 rounded-full ">
      <div>
        pp 
      </div>
    </div>
      <div className=" h-[500px] flex flex-1 rounded-xl mt-4 ">
      </div>
      <Line data={data} curve="monotoneX" />
    </>
  );
}

export default Home