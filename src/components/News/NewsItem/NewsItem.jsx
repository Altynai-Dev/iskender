import './NewsItem.scss'
import NewsImg from '../../ui/images/news.png'
import RoundLeft from '../../ui/images/round-left.png'
import RoundRight from '../../ui/images/vector-right.png'

const NewsItem = () => {
  return (
    <div className='newsItem'>
      <div className='newsItem__content'>
        <div className='newsItem__left'>
            <div className='newsItem__info'>
            <h3>-50%</h3>
            <h4>На кухонную мебель </h4>
            <button>Подробнее</button>
            </div>
        </div>
        <div className='newsItem__right'>
        <img src={RoundRight} className='newsItem__left-img' alt='vector' />
            <img className='newsItem__right-img' src={NewsImg} alt='news' />
        </div>
        </div>
    </div>
  )
}

export default NewsItem