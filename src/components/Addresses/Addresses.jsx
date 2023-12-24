import './Addresses.scss'
import ArrowLeft from '../ui/images/arrow-down.png'
import ArrowRight from '../ui/images/arrow-up.png'
import PaginationImg from '../ui/images/пагинация.png'
import AddressItem from './AddressItem/AddressItem'

const Addresses = () => {
  return (
    <div className='addresses'>
      <img className='addresses__arrow-img' src={ArrowLeft} alt='arrow' />
      <div className="addresses__content container">
        <div className='addresses__title-box'>
          <h3>Адреса магазинов</h3>
          <p>все</p>
        </div>
        <div className="addresses__items">
        <AddressItem address={`Кыргызстан, г. Бишкек ул. Турусбекова A167`} />
        <AddressItem address={`Кыргызстан, г. Бишкек ул. Лермонтова 6`} />
        <AddressItem address={`Кыргызстан, г. Бишкек ул. Льва-Толстого 19`} />
      </div>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <img style={{ marginTop: '1.625rem' }} src={PaginationImg} alt='pagination' />
      </div>
      </div>
      <img className='addresses__arrow-img' src={ArrowRight} alt='arrow' />
    </div>
  )
}

export default Addresses