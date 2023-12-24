import './Navbar.scss'
import Logo from '../images/logo.svg'
import LogoText from '../images/logo-text.svg'
import Menu from '../images/menu.svg'
import ProfileImg from '../images/profile.svg'
import Line from '../images/Line 1.svg'
import CartImg from '../images/cart.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__content container">
            <div className='navbar__logo'>
                <img className='navbar__logo-img' src={Logo} alt='iskender-logo' />
                <img className='navbar__logo-text' src={LogoText} about='logo-text' />
            </div>
            <div className='navbar__catalog'>
                <img src={Menu} alt='menu' />
                <p>Каталог</p>
            </div>
            <div className='navbar__input'>
                <input placeholder='Поиск 42903'/>
            </div>
            <div className='navbar__signIn sign'>
                <p className='sign__welcome'>Добро пожаловать</p>
                <p className='sign__text'>Вход/Регистрация</p>
            </div>
            <div className='navbar__cart'>
                <img src={ProfileImg} alt="profile" />
                <img src={Line} alt='line' />
                <img src={CartImg} alt='cart' />
            </div>
        </div>
    </div>
  )
}

export default Navbar