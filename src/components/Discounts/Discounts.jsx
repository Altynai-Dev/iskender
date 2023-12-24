import './Discounts.scss'
import DiscountFirst from '../ui/images/disc-1.png'
import DiscountSecond from '../ui/images/disc-2.png'
import DiscountThird from '../ui/images/disc-3.png'
import DiscountFourth from '../ui/images/disc-4.png'
import DiscountFifth from '../ui/images/disc-5.png'
import DiscountSixth from '../ui/images/disc-6.png'


const Discounts = () => {
  return (
    <div className='discounts container'>
        <div className='discounts__item'>
            <img src={DiscountFirst} alt='discount' />
            <p>Скидки</p>
        </div>
        <div className='discounts__item'>
            <img src={DiscountSecond} alt='discount' />
            <p>Акции</p>
        </div>
        <div className='discounts__item'>
            <img src={DiscountThird} alt='discount' />
            <p>Распродажа</p>
        </div>
        <div className='discounts__item'>
            <img src={DiscountFourth} alt='discount' />
            <p>Подарки</p>
        </div>
        <div className='discounts__item'>
            <img src={DiscountFifth} alt='discount' />
            <p>Подарки</p>
        </div>
        <div className='discounts__item'>
            <img src={DiscountSixth} alt='discount' />
        </div>
        <div className='discounts__item'>
            <img src={DiscountSixth} alt='discount' />
        </div>
        <div className='discounts__item'>
            <img src={DiscountSixth} alt='discount' />
        </div>
        <div className='discounts__item'>
            <img src={DiscountSixth} alt='discount' />
        </div>
        <div className='discounts__item'>
            <img src={DiscountSixth} alt='discount' />
        </div>
        <div className='discounts__item'>
            <img src={DiscountSixth} alt='discount' />
        </div>
        <div className='discounts__item'>
            <img src={DiscountSixth} alt='discount' />
        </div>
        <div className='discounts__item'>
            <img src={DiscountSixth} alt='discount' />
        </div>
        <div className='discounts__item'>
            <img src={DiscountSixth} alt='discount' />
        </div>
    </div>
  )
}

export default Discounts