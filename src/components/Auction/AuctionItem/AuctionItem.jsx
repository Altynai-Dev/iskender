import './AuctionItem.scss'
import BestImg from '../../ui/images/best1.png'
import RoundImg from '../../ui/images/round.svg'
import Minus from '../../ui/images/minus.png'
import Plus from '../../ui/images/plus.png'
import FavImg from '../../ui/images/fav.png'
import FavHover from '../../ui/images/favHover.png'
import { useState } from 'react'

const AuctionItem = () => {
    const [quantity, setQuantity] = useState(0); 
    const [isFavHovered, setIsFavHovered] = useState(false);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1); 
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className='bestsellers__item image'>
            <img className='image__main' src={BestImg} alt='shower' />
            <img className='image__fav' src={isFavHovered ? FavHover : FavImg} alt='fav' 
            onMouseEnter={() => setIsFavHovered(true)}
            onMouseLeave={() => setIsFavHovered(false)} />
            <h5>Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..
            </h5>
            <div style={{display: "flex", gap: "10px", alignItems: "center", justifyContent: "flex-start"}}>
            <p className='auction__price'>1294 с</p>
            <p style={{color: "#808080", fontWeight: "700", fontSize: "14px", textDecoration: "line-through"}}>1294 с</p>
            </div>
            <p style={{ color: "#73CB5E", fontSize: "12px", fontWeight: "500", alignSelf: "flex-start", marginBottom: "6px" }}>В наличии</p>
            <div style={{ alignSelf: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                    <img src={RoundImg} alt='round' style={{ marginTop: "1px" }} />
                    <p style={{ color: "#3286C2", fontSize: "12px", fontWeight: "400", }}>Комплект</p>
                </div>
            </div>
            <div className='bestsellers__btns'>
                <button onClick={decreaseQuantity}><img src={Minus} alt='minus' /></button>
                <p>{quantity}</p>
                <button onClick={increaseQuantity}><img src={Plus} alt='plus' /></button>
            </div>
        </div>
    )
}

export default AuctionItem