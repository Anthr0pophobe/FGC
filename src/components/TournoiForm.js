import { useForm } from 'react-hook-form'


async function createTour(data) { // A FAIRE FONCTIONNER
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
        console.log('tournoiformsubmit = ', data)
        data.nbParticipants = parseInt(data.nbParticipants)
        
    }  

    const today = new Date()
    var y = today.getFullYear()
    var m = today.getMonth()
    m = ('0' + m).slice(-2)

    var d = today.getDate()
    d = ('0' + d).slice(-2)

    today = y + '-' + m + '-' + d 

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
                        <input type="datetime-local" defaultValue={today} {...register("dateDebut", { required: true})} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        
                        {errors.dateDebut?.type === 'required' && <div className="errorForm">Vous devez sélectionner la date de début !</div> }
                    </div>

                    <div className='m-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Date de fin</label>
                        <input type="datetime-local" defaultValue={today} {...register("dateFin", { required: true})} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        
                        {errors.dateFin?.type === 'required' && <div className="errorForm">Vous devez sélectionner la date de fin !</div> }
                    </div>
                </div>

                <div className='w-full'>
                    <div className='m-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Pseudo de l'organisateur</label>
                        <input placeholder="Nom" defaultValue={user.pseudo}
                        {...register("nomOwner", { required: true, maxLength: 50, minLength: 2, pattern: "/^[a-zA-Z]+$/" })} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        
                        {errors.nomOwner?.type === 'required' && <div className="errorForm">Vous devez entrer un votre nom !</div> }
                        {errors.nomOwner?.pattern && <div className="errorForm">Votre nom est invalide !</div> }
                        {(errors.nomOwner?.minLength && errors.nomOwner?.maxLength ) && <div className="errorForm">Le nom doit être compris entre 2 et 50 caractères !</div>}
                    </div>

                    <div className='m-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Numéro de téléphone de l'organisateur</label>
                        <input type="tel" placeholder="Téléphone" 
                        {...register("telephone", { required: true, maxLength: 12, minLength: 10, pattern: "/^[0-9]+$/" })} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        
                        {errors.telephone?.type === 'required' && <div className="errorForm">Vous devez entrer votre numéro de téléphone !</div> }
                        {(errors.telephone?.minLength && errors.telephone?.maxLength && errors.telephone?.pattern) && <div className="errorForm">Votre numéro de téléphone est invalide !</div> }
                    </div>

                    <div className='m-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Addresse mail de l'organisateur</label>
                        <input type="email" placeholder="Adresse email"  defaultValue={user.email}
                        {...register("email", { required: true, maxLength: 30, pattern: "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/" })} 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        
                        {errors.email?.type === 'required' && <div className="errorForm">Vous devez saisir votre email !</div>}
                        {(errors.email?.maxLength && errors.email?.pattern) && <div className="errorForm">L'adresse email entrer n'est pas valide !</div>}
                    </div>

                    <div className='hidden'>
                        <input type="number" value="0" {...register("nbParticipants") }></input>
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