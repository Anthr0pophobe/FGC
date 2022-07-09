import Link from 'next/link';
import MainButton from '../src/components/MainButton';

const Home = () => {
	return (
		<div className='w-full flex flex-col'>
			<div className='w-full h-32' />
			<div className='w-full h-32 flex justify-center items-center'>
				<h1 className='text-4xl font-bold'>CONTRAST</h1>
			</div>
			<div className='w-full h-32 flex justify-center items-center'>
				<p className='text-xl font-medium text-white text-center'>
					Contrast est un outil qui permet aux joueurs de
					jeux de versus de pouvoir se rassembler <br />{' '}
					autour d'un espace dédié au partage et au
					développement de la communauté
				</p>
			</div>
			<div className='h-32 flex flex-row  items-center justify-around'>
				<Link href={'/inscripiton'}>
					<a>
						<MainButton nom='INSCRIPTION' />
					</a>
				</Link>
				<Link href={'/connexion'}>
					<a>
						<MainButton nom='CONNEXION' />
					</a>
				</Link>{' '}
			</div>
		</div>
	);
};

export default Home;
