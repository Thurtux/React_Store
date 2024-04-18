import {Link} from 'react-router-dom'
import '../css/Estilo.css'
function Nav(){

  return(
    <>
   <header className="Menu">
    <nav className='nav-menu'>
      <Link to="/" className='Link'>Home</Link>
      <Link to="/Sobre" className='Link'>Sobre</Link>
      <Link to="/Contato" className='Link'>Contato</Link>
      <Link to="/login" className='Link'>Login</Link>
    </nav>
</header>
    </>
  )
}
export default Nav