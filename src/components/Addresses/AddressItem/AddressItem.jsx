import './AddressItem.scss'
import Logo from '../../ui/images/logo2.png'
import Arrow from '../../ui/images/arrow-small.png'
import Location from '../../ui/images/Location.png'
import ClockImg from '../../ui/images/Clock-Square.svg'
import PhoneImg from '../../ui/images/Phone.svg'
import Line from '../../ui/images/address-line.png'

const AddressItem = ({address}) => {
    return (
        <div className='addressItem'>
            <div className="addressItem__content">
                <div className='addressItem__top'>
                    <img className='addressItem__top-logo' src={Logo} alt='iskender logo' />
                    <div className='addressItem__top-text'>
                        <p style={{fontSize: '18px', fontWeight: '500', fontFamily: 'Gilroy-Bold' }}>Iskender home</p>
                        <a style={{fontSize: '12px', color: '#0062D5'}} href='#'>открыть в карте</a>
                    </div>
                    <img style={{width: "1rem", height: "1rem"}} src={Arrow} alt='arrow' />
                </div>
                <img src={Line} alt='line' />
                <div className='addressItem__middle'>
                    <img style={{width: '17px', height: '17px'}} src={Location} alt='location' />
                    <p style={{width: "11rem"}}>{address}</p>
                </div>
                <div className='addressItem__bottom'>
                    <div style={{display: 'flex', gap: "5px"}}>
                        <img src={ClockImg} alt="clock" />
                        <p>08:00 - 22:00</p>
                    </div>
                    <div style={{display: 'flex', gap: "5px"}}>
                        <img src={PhoneImg} alt='phone' />
                        <p>+996 500 345 345</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressItem
