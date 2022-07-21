import { deleteCookie, getCookies } from 'cookies-next';
import { useRouter } from 'next/router';

export const Logout = () => {
    const router = useRouter()

    function deconnexion() {
        deleteCookie('email');
        deleteCookie('pseudo');
    
        console.log('cookies= '+ getCookies())
        router.reload(router.pathname)
    }
    
    return (
        <button className="bg-red-400" onClick={deconnexion}>Se déconnecter</button>
    );
}

export default Logout