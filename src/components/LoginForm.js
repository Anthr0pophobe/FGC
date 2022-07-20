import { useForm } from 'react-hook-form'
import { isSameHashValue } from '../passwordHash.js'


export const LoginForm = ({ users }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {    

        users.map((user) => {
            if(user.email === data.email && isSameHashValue(user.password, data.password) ) {
                console.log('trouver !!')
                //cookieCutter.set('email', user.email, { expires: 600 })
            }
        });
        
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="email" {...register("email", { required: true, maxLength: 255, pattern: "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/" })} />
            {errors.email?.type === 'required' && <div className="errorForm">Vous devez entrer votre email</div>}
            {(errors.email?.maxLength && errors.email?.pattern) && <div className="errorForm">L'adresse email entré n'est pas valide</div>}

            <input type="password" placeholder="Mot de passe" {...register("password", { required: true, maxLength: 15, minLength: 8, pattern: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" })} />
            {errors.password?.type === 'required' && <div className="errorForm">Vous devez entrer un mot de passe</div> }
            {(errors.password?.minLength && errors.password?.maxLength) && errors.password?.pattern && <div className="errorForm">Mot de passe compris entre 8 et 15 caractères !</div>}

            <input className="bg-red-400" type="submit" />
        </form>
        </>
    );
}

export default LoginForm
