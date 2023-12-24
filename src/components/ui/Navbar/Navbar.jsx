import './Navbar.scss'
import Logo from '../images/logo.svg'
import LogoText from '../images/logo-text.svg'
import Menu from '../images/menu.svg'
import ProfileImg from '../images/profile.svg'
import Line from '../images/Line 1.svg'
import CartImg from '../images/cart.svg'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

const Navbar = () => {
    const [isBurgerShow, setIsBurgerShow] = useState(false);
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
                    <input placeholder='Поиск' />
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
                <div className='navbar__menu' style={{ display: 'flex', alignItems: 'center' }}>
                    <MenuIcon className='navbar__burger-menu' color='white' onClick={()=>setIsBurgerShow(!isBurgerShow)} />
                </div>
                {isBurgerShow &&
                    <div className='burger-menu__list'>
                        <span onClick={()=>setIsBurgerShow(false)} className='burger-menu__close' style={{fontSize: "15px"}}>X</span>
                        <a href='#' style={{color:"#fff", textDecoration:'none'}}>Каталог</a>
                        <a href='#' style={{color:"#fff", textDecoration:'none'}}>Вход/Регистрация</a>
                        <a href='#' style={{color:"#fff", textDecoration:'none'}}>Профиль</a>
                        <a href='#' style={{color:"#fff", textDecoration:'none'}}>Корзина</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar