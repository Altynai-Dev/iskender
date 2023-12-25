import './News.scss'
import ArrowLeft from '../ui/images/arrow-down.png'
import ArrowRight from '../ui/images/arrow-up.png'
import NewsItem from './NewsItem/NewsItem'
import BannerImg from '../ui/images/banner.png'
import PaginationImg from '../ui/images/пагинация.png'

const News = () => {
  return (
    <div className='news'>
        <img className='news__arrow-img' src={ArrowLeft} alt='arrow' />
        <div className='news__content container'>
            <div className='news__title-box'>
                <h3>Новости</h3>
                <p>все</p>
            </div>
            <div className='news__items'>
                <NewsItem />
                <NewsItem />
                <img className='news__banner' src={BannerImg} alt='banner' />
            </div>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <img style={{marginTop: '1.625rem'}} src={PaginationImg} alt='pagination' />
            </div>
        </div>
        <img className='news__arrow-img' src={ArrowRight} alt='arrow' />
    </div>
  )
}

export default News