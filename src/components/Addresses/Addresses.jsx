import './Addresses.scss'
import PaginationImg from '../ui/images/пагинация.png'
import AddressItem from './AddressItem/AddressItem'

const Addresses = () => {
  return (
    <div className='addresses'>
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
    </div>
  )
}

export default Addresses