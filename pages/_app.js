import '../styles/globals.css';
import Navbar from '../src/components/Navbar';
function MyApp({ Component, pageProps }) {
	return (
		<div
			className='grid bg-gray-700'
			style={{
				gridTemplateColumns: '10% 1fr 10%',
				gridTemplateRows: '64px 1fr',
				gridColumnGap: ' 0px',
				gridRowGap: ' 0px',
			}}
		>
			<div
				style={{ gridArea: ' 1 / 1 / 2 / 4 ' }}
				className='bg-slate-300'
			>
				<Navbar />
			</div>
			<div style={{ gridArea: '2 / 2 / 3 / 3' }}>
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
