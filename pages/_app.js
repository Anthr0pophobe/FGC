import '../styles/global.css'
import Navbar from '../src/components/Navbar'

function MyApp({ Component, pageProps }) {

  // La navbar est mise ici pour qu'elle apparaisse sur toutes les pages
  return (
    <div className='px-[10%]'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
