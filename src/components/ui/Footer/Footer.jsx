import './Footer.scss'
import Logo from '../images/logo.svg'
import LogoText from '../images/logo-text.svg'
import AppStore from '../images/App-store.png'
import GooglePlay from '../images/Google-play.png'
import WhatsApp from '../images/whatsapp-svgrepo-com 1.png'
import Line from '../images/line-footer.png'
import Ig from '../images/logo-instagram.png'
import Fb from '../images/logo-facebook.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__content container'>
        <div className='footer__blocks'>
          <div className='footer__first'>
            <div className='footer__logo'>
              <img className='footer__logo-img' src={Logo} alt='iskender-logo' />
              <img className='footer__logo-text' src={LogoText} about='logo-text' />
            </div>
            <p style={{ width: "14.3rem", fontSize: "14px", paddingBottom: "4.5rem" }}>Первый отечественный бренд Iskender на рынке сантехники от компании ОсОО «Стройдом.кг»</p>

            <div style={{ display: "flex", gap: "18px" }}>
              <img style={{ width: "8.9rem" }} src={AppStore} alt="app-store" />
              <img src={GooglePlay} alt="google-play" />
            </div>
          </div>
          <div className='footer__second'>
            <h5 style={{ fontSize: "20px", fontWeight: '700', marginBottom: '2.5rem' }}>Адреса</h5>
            <div style={{ marginBottom: "1.25rem" }}>
              <p style={{ fontSize: "15px", fontWeight: '400', fontFamily: "Gilroy-Light" }}>ЭлитСтрой</p>
              <p style={{ fontFamily: "Gilroy-Medium" }}>ул. Ден-Сяопина 18/1</p>
            </div>
            <div style={{ marginBottom: "1.25rem" }}>
              <p>Баткен</p>
              <p style={{ fontFamily: "Gilroy-Medium" }}>ул. Льва-Толстого 19</p>
            </div>
            <div>
              <p>ТааТан</p>
              <p style={{ fontFamily: "Gilroy-Medium" }}>ул. Лермонтова 6</p>
            </div>
          </div>
          <div className='footer__third'>
            <h5 style={{ fontSize: "20px", fontWeight: '700', marginBottom: '2.5rem' }}>Компания</h5>
            <p style={{ marginBottom: '1rem' }}>Каталог</p>
            <p style={{ marginBottom: '1rem' }}>Избранное</p>
            <p style={{ marginBottom: '1rem' }}>Личный кабинет</p>
          </div>
          <div className='footer__fourth'>
            <h5 style={{ fontSize: "20px", fontWeight: '700', marginBottom: '2.5rem' }}>Контакты</h5>

            <div>
              <p style={{ fontFamily: "Gilroy-Light" }}>Email:</p>
              <p style={{ fontFamily: "Gilroy-Medium", marginBottom: '20px' }}>iskender.kg@gmail.com</p>
            </div>
            <div>
              <p style={{ fontFamily: "Gilroy-Light" }}>Телефон:</p>
              <p style={{ fontFamily: "Gilroy-Medium", marginBottom: '5px' }}>+996 (500) 000-104</p>
              <p style={{ fontFamily: "Gilroy-Medium", marginBottom: '5px' }}>+996 (500) 000-104</p>
              <p style={{ fontFamily: "Gilroy-Medium", marginBottom: '5px' }}>+996 (500) 000-104</p>
            </div>
            <button><img src={WhatsApp} alt='whatsapp' />WhatsApp</button>
          </div>
        </div>
        <img style={{marginBottom: '2rem'}} src={Line} alt='line' />
        <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "1.875rem"}}>
          <p>© 2023 Iskender.kg - Отечественный бренд сантехники</p>
          <div style={{display: "flex", gap: "1rem"}}>
            <img src={Ig} alt="ig" />
            <img src={Fb} alt="fb" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer