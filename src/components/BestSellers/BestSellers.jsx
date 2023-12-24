import './BestSellers.scss'
import BestSellerItem from './BestSellerItem/BestSellerItem'
import ArrowLeft from '../ui/images/arrow-down.png'
import ArrowRight from '../ui/images/arrow-up.png'
import PaginationImg from '../ui/images/пагинация.png'

const BestSellers = () => {
    return (
        <div className='bestsellers'>
            <img className='bestsellers__arrow-img' src={ArrowLeft} alt='arrow' />
            <div className='bestsellers__content container'>
            <div className='bestsellers__title-box'>
            <h3>Хиты продаж</h3>
            <p>перейти в каталог</p>
            </div>
            <div className='bestsellers__items'>
                <BestSellerItem />
                <BestSellerItem />
                <BestSellerItem />
                <BestSellerItem />
                <BestSellerItem />
                <BestSellerItem />
            </div>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <img style={{marginTop: '1.625rem'}} src={PaginationImg} alt='pagination' />
            </div>
            </div>
            <img className='bestsellers__arrow-img' src={ArrowRight} alt='arrow' />
        </div>
    )
}

export default BestSellers