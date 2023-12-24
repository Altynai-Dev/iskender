import './Categories.scss'
import BathImg from '../ui/images/bath.png'
import TapImg from '../ui/images/tap.png'
import HoodImg from '../ui/images/hood.png'
import FaucetImg from '../ui/images/faucet.png'
import OthersImg from '../ui/images/others.png'
import PanImg from '../ui/images/pan.png'
import WashImg from '../ui/images/wash.png'
import DryImg from '../ui/images/dryer.png'
import HeaterImg from '../ui/images/Водонагреватели.png'
import ShowerImg from '../ui/images/Душевые кабинки.png'
import ConvectorImg from '../ui/images/Конвекторы.png'
const Categories = () => {
  return (
    <div className='categories container'>
        <h3 className='categories__title'>Категории</h3>
        <div className="categories__items">
            <div className="categories__item">
                <h6>Ванны</h6>
                <p>3000 товаров</p>
                <img className='categories__item-img' src={BathImg} alt="bath" />
            </div>
            <div className="categories__item">
                <h6>Смесители</h6>
                <p>3000 товаров</p>
                <img className='categories__item-img' src={TapImg} alt="tap" />
            </div>
            <div className="categories__item">
                <h6>Вытяжки для кухни</h6>
                <p>3000 товаров</p>
                <img src={HoodImg} alt="hood" />
            </div>
            <div className="categories__item" style={{paddingLeft:'0'}}>
                <h6 style={{paddingLeft:'10.7px'}}>Кухонные мойки</h6>
                <p style={{marginBottom:'12.9px', paddingLeft:'10.7px'}}>3000 товаров</p>
                <img style={{marginLeft:'0', width: "10.6rem", height: "7.1rem"}} src={FaucetImg} alt="faucet" />
            </div>
            <div className="categories__item">
                <h6>Другие</h6>
                <p>3000 товаров</p>
                <img style={{paddingLeft:'0'}} src={OthersImg} alt="others" />
            </div>
            <div className="categories__item">
                <h6>Унитазы</h6>
                <p style={{marginBottom: '0'}}>3000 товаров</p>
                <img style={{marginLeft: '2rem', marginTop: '-1.2rem', width: '7.8rem', height: '8.8rem'}} src={PanImg} alt="pan" />
            </div>
            <div className="categories__item">
                <h6>Вытяжки для кухни</h6>
                <p>3000 товаров</p>
                <img src={HoodImg} alt="hood" />
            </div>
            <div className="categories__item" style={{paddingLeft:'0'}}>
                <h6 style={{paddingLeft:'10.7px'}}>Умывальники</h6>
                <p style={{marginBottom:'12.9px', paddingLeft:'10.7px'}}>3000 товаров</p>
                <img style={{marginLeft:'0', width: "10.6rem", height: "7.1rem"}} src={WashImg} alt="wash" />
            </div>
            <div className="categories__item">
                <h6>Полотенцесушители</h6>
                <p style={{marginBottom: '1.1rem'}}>3000 товаров</p>
                <img style={{height: '6.8rem', marginLeft: '1.6rem'}} src={DryImg} alt="dry" />
            </div>
            <div className="categories__item">
                <h6>Водонагреватели</h6>
                <p style={{marginBottom: '0.2rem'}}>3000 товаров</p>
                <img style={{height: '7.8rem', marginLeft: '3rem'}} src={HeaterImg} alt="heat" />
            </div>
            <div className="categories__item">
                <h6>Душевые</h6>
                <p style={{marginBottom: '1.1rem'}}>3000 товаров</p>
                <img style={{height: '9.75rem', width: '9.75rem', marginTop: '-2.6rem', marginRight: '5px'}} src={ShowerImg} alt="shower" />
            </div>
            <div className="categories__item" style={{paddingLeft:'0'}}>
                <h6 style={{paddingLeft:'10.7px'}}>Водонагреватели</h6>
                <p style={{marginBottom:'0.5rem', paddingLeft:'10.7px'}}>3000 товаров</p>
                <img style={{width: "9.4rem", height: "7.3rem", marginLeft:'1rem'}} src={ConvectorImg} alt="convector" />
            </div>
            <div className="categories__item" style={{paddingLeft:'0'}}>
                <h6 style={{paddingLeft:'10.7px'}}>Водонагреватели</h6>
                <p style={{marginBottom:'0.5rem', paddingLeft:'10.7px'}}>3000 товаров</p>
                <img style={{width: "9.4rem", height: "7.3rem", marginLeft:'1rem'}} src={ConvectorImg} alt="convector" />
            </div>
            <div className="categories__item">
                <h6>Полотенцесушители</h6>
                <p style={{marginBottom: '1.1rem'}}>3000 товаров</p>
                <img style={{height: '6.8rem', marginLeft: '1.6rem'}} src={DryImg} alt="dry" />
            </div>
        </div>
    </div>
  )
}

export default Categories