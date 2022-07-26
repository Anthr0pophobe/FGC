import data from '../data'
import Image from 'next/image'
import { PieChart } from 'react-minimal-pie-chart';
import { AgChartsReact } from "ag-charts-react";

const Statistiques = ({user}) => {

    const statsPerso = user.persojouer
    const statsTournoi = user.participea

    let nbTournoi = statsTournoi ? statsTournoi.length : 0
    let nbDefaites = 0
    let nbVictoires = 0
    let nbNuls = 0

    if(statsPerso) {
        statsPerso.map((stat) => {
            nbDefaites += stat.nbDefaite
            nbVictoires += stat.nbVictoire
            nbNuls += stat.nbMatchNul
        })

        let nbPartie = nbDefaites + nbVictoires + nbNuls

        const options = {
            data: [
              {
                label: nbDefaites + ' Défaites',
                value: nbDefaites
              },
              {
                label: nbNuls + " Égalités",
                value: nbNuls
              }, 
              {
                label: nbVictoires + " Victoires",
                value: nbVictoires
              }
            ],
            series: [
              {
                type: "pie",
                angleKey: "value",
                labelKey: "label",
              }
            ]
          };
    }


    return statsPerso ? (
        <>
        <div>
            <h1 className='text-center'>{nbTournoi} tournois joués</h1>
            <h2 className='text-center'>{nbPartie} parties jouées</h2>
            <br />
            <div>
                <AgChartsReact options={options} />
            </div>
        </div>
        </>
    ) : <div>Loading...</div>
}

export default Statistiques