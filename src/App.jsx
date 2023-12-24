import './App.scss';
import Addresses from './components/Addresses/Addresses';
import Adresses from './components/Addresses/Addresses';
import Auction from './components/Auction/Auction';
import BestSellers from './components/BestSellers/BestSellers';
import Categories from './components/Categories/Categories';
import Discounts from './components/Discounts/Discounts';
import News from './components/News/News';
import Footer from './components/ui/Footer/Footer';
import Navbar from './components/ui/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Discounts />
      <Categories />
      <BestSellers />
      <News />
      <Auction />
      <Addresses />
      <Footer />
    </div>
  );
}

export default App;
