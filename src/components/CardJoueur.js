import Image from 'next/image'
import Link from 'next/link';


const CardJoueur = ({user}) => {


    return (
        <>
        <div className="bg-white shadow-md rounded w-fit px-8 pt-6 pb-8 mb-4 flex flex-col text-center hover:bg-slate-300">
            <Link href={`/joueurs/${user.id}`} replace>
                <a>
                <Image src="/../public/logo-account.png" width="130px" height="110px" />
                <h1>{user.pseudo}</h1>
                <h2>Nombre de partie jouer : ??</h2>
                </a>
            </Link>

        </div>
        </>
    );
}

export default CardJoueur