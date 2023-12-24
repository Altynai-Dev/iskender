import './Auction.scss'
import ArrowLeft from '../ui/images/arrow-down.png'
import ArrowRight from '../ui/images/arrow-up.png'
import PaginationImg from '../ui/images/пагинация.png'
import AuctionItem from './AuctionItem/AuctionItem'

const Auction = () => {
  return (
    <div className='auction'>
        <img className='auction__arrow-img' src={ArrowLeft} alt='arrow' />
        <div className="auction__content container">
            <div className="auction__title-box">
                <h3>Аукционные товары</h3>
                <p>перейти в каталог</p>
            </div>
            <div className="auction__items">
                <AuctionItem />
                <AuctionItem />
                <AuctionItem />
                <AuctionItem />
                <AuctionItem />
                <AuctionItem />

            </div>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <img style={{marginTop: '1.625rem'}} src={PaginationImg} alt='pagination' />
            </div>
        </div>
        <img className='auction__arrow-img' src={ArrowRight} alt='arrow' />
    </div>
  )
}

export default Auction