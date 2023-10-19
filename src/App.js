import './App.css';
import {AiOutlineShoppingCart} from "react-icons/ai"

function App() {
  return (
    <div className="afro rounded-sm">
      <div className='isabelle'>
      <picture>
      <source media="(main-width: 768px)" srcset="image-product-desktop.jpg" />
      <source media="(max-width: 395px)" srcset="image-product-mobile.jpg" />
      <img src="image-product-desktop.jpg" alt="Description of the image"/>
      </picture>
      <div className='content'>
      <h1 className='perfume'>PERFUME</h1>
      <h1 className='gabrielle'>Gabrielle Essence Eau De Parfum</h1>
      <p className='floral'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfurmer-Creator for the House of CHANEL</p>
      <div className='price'>
      <p className='new'>$149.99</p>
      <p className='original'>$169.99</p>
      </div>
      <div className='forbutton'>
      <button><AiOutlineShoppingCart />Add to Cart</button>
      </div>
      </div>
      </div>
      </div>
  );
}

export default App;
