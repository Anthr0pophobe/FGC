import data from '../data'
import Image from 'next/image'

const Statistiques = ({user}) => {

    var statsPersos = []
    var persos = []

    data.persoJouer.map((persoJ) => {
        if(persoJ.userId === user.id) {
            statsPersos.push(persoJ)
        }
    })

    statsPersos.map((stat) => {
        data.personnages.map((perso) => {
            if(stat.persoId === perso.id) {
                persos.push(perso)
            }
        })    
    })


    return (
        <>
        <div className="bg-white shadow-md rounded w-fit px-8 pt-6 pb-8 mb-4 flex flex-col text-center hover:bg-slate-300">
            <a href='#'>
                <Image src="/../public/logo-account.png" width="130px" height="110px" />
                <h1>{user.pseudo}</h1>
                <h2>Personnages jouer</h2>
            </a>

        </div>
        </>
    )
}

export default Statistiques