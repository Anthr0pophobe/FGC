import { Button } from '@mui/material';
import Image from 'next/image';

const ConnexionCard = () => {
	return (
		<div className='h-96 flex flex-col justify-center items-center'>
			<Button
				className='w-32 item-center'
				size='large'
				variant='contained'
				style={{
					backgroundColor: '#fcba03',
					color: 'black',
				}}
			>
				<pre>
					<p>Connexion</p>
					<Image
						src='https://discord.com/assets/2d20a45d79110dc5bf947137e9d99b66.svg'
						width={24}
						height={24}
						alt='logoDiscord'
					/>
				</pre>
			</Button>
		</div>
	);
};

export default ConnexionCard;
