import { getCookie } from 'cookies-next';
import { useForm } from 'react-hook-form'
import Router from 'next/router'


async function createArticle(data) { // A FAIRE FONCTIONNER
    try {
        await fetch('http://localhost:3008/api/articles/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Access-Control-Allow-Origin": "*", 
                         'Content-Type': 'application/json' }
        })     
    } catch(erreur) {
        console.log(erreur)
        return false
    }

    Router.push('/actualites')
}

const ArticleForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const today = new Date()
    var y = today.getFullYear()
    var m = today.getMonth()
    m = ('0' + m).slice(-2)

    var d = today.getDate()
    d = ('0' + d).slice(-2)

    const dateCrea = y + '-' + m + '-' + d 

    const onSubmit = (data) => {    
        console.log('sadzd')  
        data.date = new Date(data.date)
        function pad(number) {
            var r = String(number);
            if (r.length === 1) {
              r = '0' + r;
            }
            return r;
          }
        
        data.date = data.date.getUTCFullYear() +
        '-' + pad(data.date.getUTCMonth() + 1) +
        '-' + pad(data.date.getUTCDate()) +
        'T' + pad(data.date.getUTCHours()) +
        ':' + pad(data.date.getUTCMinutes()) +
        ':' + pad(data.date.getUTCSeconds()) +
        '.' + String((data.date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) +
        'Z';

        data.userId = parseInt(getCookie('userId'))
        console.log('data = ', data)
        createArticle(data)
    }

    return (
        <>
        <h1 className='font-medium leading-tight text-4xl mt-5 mb-2 text-blue'>Création d'un article</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded w-full h-full px-8 pt-6 pb-8 mb-4" >
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Titre de l'article</label>
                <input placeholder="Titre" 
                {...register("titre", { required: true, maxLength: 150, minLength: 2, pattern: "/^[a-zA-Z0-9]+$/" })} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                
                {errors.titre?.type === 'required' && <div className="errorForm">Vous devez entrer un titre !</div> }
                {errors.titre?.pattern && <div className="errorForm">Le titre est invalide !</div> }
                {(errors.titre?.minLength && errors.titre?.maxLength ) && <div className="errorForm">Le titre doit être compris entre 2 et 150 caractères !</div>}
            </div>

            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Contenu de l'article</label>
                <input placeholder="Contenu"
                {...register("contenu", { required: true, maxLength: 100, minLength: 2 })} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                
                {errors.contenu?.type === 'required' && <div className="errorForm">Vous devez entrer votre contenu !</div> }
                {(errors.contenu?.minLength && errors.contenu?.maxLength ) && <div className="errorForm">Le contenu doit être compris entre 2 et 10000 caractères !</div>}
            </div>

            <div className=''>
                <input type="date" value={dateCrea} defaultValue={dateCrea}
                {...register("date")} />
            </div>

            <div className="flex items-center justify-between">
                <input type="submit" value="Créer un article" className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
            </div>
        </form>
        </>
    );
}

export default ArticleForm