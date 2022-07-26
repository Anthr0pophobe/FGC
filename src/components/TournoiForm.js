import { useForm } from 'react-hook-form'
import Router from "next/router";


async function createTour(data) {
    try {
        await fetch('http://localhost:3008/api/tournois/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Access-Control-Allow-Origin": "*", 
                         'Content-Type': 'application/json' }
        })     
    } catch(erreur) {
        console.log(erreur)
        return false
    }

    Router.push('/tournois')
}

const TournoiForm = ({user}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => { 
        console.log('dateform= ', data.dateDebut)
        data.nbParticipants = parseInt(data.nbParticipants)
        data.nom = (data.jeu).toUpperCase() + " - " + data.nom
        data.email = user.email
        data['ownerId'] = (user.id <= 4 && user.id >=1) ? user.id : 1
        data['nbParticipants'] = 0
        delete data.jeu
        delete data.nomOwner
        delete data.telephone
        delete data.email

        data.dateDebut = new Date(data.dateDebut)
        function pad(number) {
            var r = String(number);
            if (r.length === 1) {
              r = '0' + r;
            }
            return r;
          }
        
        data.dateDebut = data.dateDebut.getUTCFullYear() +
        '-' + pad(data.dateDebut.getUTCMonth() + 1) +
        '-' + pad(data.dateDebut.getUTCDate()) +
        'T' + pad(data.dateDebut.getUTCHours()) +
        ':' + pad(data.dateDebut.getUTCMinutes()) +
        ':' + pad(data.dateDebut.getUTCSeconds()) +
        '.' + String((data.dateDebut.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) +
        'Z';

        data.dateFin = new Date(data.dateFin)
        function pad(number) {
            var r = String(number);
            if (r.length === 1) {
              r = '0' + r;
            }
            return r;
          }
        
        data.dateFin = data.dateFin.getUTCFullYear() +
        '-' + pad(data.dateFin.getUTCMonth() + 1) +
        '-' + pad(data.dateFin.getUTCDate()) +
        'T' + pad(data.dateFin.getUTCHours()) +
        ':' + pad(data.dateFin.getUTCMinutes()) +
        ':' + pad(data.dateFin.getUTCSeconds()) +
        '.' + String((data.dateFin.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) +
        'Z';

        createTour(data)
        console.log('tournoiformsubmit = ', data)
    }  

    function pad(number) {
        var r = String(number);
        if (r.length === 1) {
          r = '0' + r;
        }
        return r;
      }
    // 2022-07-16T23:22
    const today = new Date()
    today = today.getUTCFullYear() +
    '-' + pad(today.getUTCMonth() + 1) +
    '-' + pad(today.getUTCDate()) +
    'T' + pad(today.getUTCHours() + 2) +
    ':' + pad(today.getUTCMinutes())

    const after = new Date()
    after = after.getUTCFullYear() +
    '-' + pad(after.getUTCMonth() + 1) +
    '-' + pad(after.getUTCDate()) +
    'T' + pad(after.getUTCHours() + 3) +
    ':' + pad(after.getUTCMinutes())
    console.log(after)

    return (
        <>
        <h1 className='font-medium leading-tight text-4xl mt-4 mb-2 text-blue'>Organisez votre tournoi !</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded w-full h-full px-8 pt-6 pb-8 mb-4 flex flex-col items-center" >
            <div className='flex flex-row w-full'>
                <div className='w-full'>
                    <div className='m-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Jeu</label>
                        <select {...register("jeu", { required: true })} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="ssbu">Super Smash Bros Ultimate</option>
                            <option value="ggs">Guilty Gear Strive</option>
                            <option value="dbfz">Dragon Ball Figther Z</option>
                        </select>
                        
                        {errors.jeu?.type === 'required' && <div className="errorForm">Vous devez sélectionner un jeu !</div>}
                    </div>

                    <div className='m-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Nom du tournoi</label>
                        <input placeholder="Nom du tournoi" 
                        {...register("nom", { required: true, maxLength: 50, minLength: 2, pattern: "/^[a-zA-Z]+$/" })} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        
                        {errors.nom?.type === 'required' && <div className="errorForm">Vous devez entrer le nom de votre tournoi !</div> }
                        {errors.nom?.pattern && <div className="errorForm">Le nom du tournoi est invalide !</div> }
                        {(errors.nom?.minLength && errors.nom?.maxLength ) && <div className="errorForm">Le nom du tournoi doit être compris entre 2 et 50 caractères !</div>}
                    </div>

                    <div className='m-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Date de début</label>
                        <input type="datetime-local" defaultValue={today} min={today} {...register("dateDebut", { required: true})} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        
                        {errors.dateDebut?.type === 'required' && <div className="errorForm">Vous devez sélectionner la date de début !</div> }
                    </div>

                    <div className='m-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Date de fin</label>
                        <input type="datetime-local" defaultValue={after} min={after} {...register("dateFin", { required: true})} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        
                        {errors.dateFin?.type === 'required' && <div className="errorForm">Vous devez sélectionner la date de fin !</div> }
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <input type="submit" value="Créer votre tournoi" className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
            </div>
        </form>
        </>
    );
}

export default TournoiForm