import { useState } from 'react';
import './App.css';
import Navbar from './contents/Navigation/Navigation';
import Heading from './contents/headind content/Heading';
import Card from './contents/Card/Card';
import Fotter from './contents/Footer/Footer';
const LinkDetails = [
  { key: '1', view: true, product: 'Fancy Product', price: '$40.00 - $80.00', button: 'View options', },
  { key: '2', view: false, product: 'Special Item', badge: true, star: true, stricPrice: '$20.00  ', price: '$18.00', buttonAdd: 'Add to cart', buttonRemove: 'Remove from cart' },
  { key: '3', view: false, product: 'Sale Item', badge: true, stricPrice: '$50.00  ', price: '$25.00', buttonAdd: 'Add to cart', buttonRemove: 'Remove from cart' },
  { key: '4', view: false, product: 'Popular Item', star: true, price: '$40.00', buttonAdd: 'Add to cart', buttonRemove: 'Remove from cart' },
  { key: '5', view: false, product: 'Sale Item', badge: true, stricPrice: '$50.00  ', price: '$25.00', buttonAdd: 'Add to cart', buttonRemove: 'Remove from cart' },
  { key: '6', view: true, product: 'Fancy Product', price: '$120.00 - $280.00', button: 'View options' },
  { key: '7', view: false, product: 'Special Item', badge: true, star: true, stricPrice: '$20.00  ', price: '$18.00', buttonAdd: 'Add to cart', buttonRemove: 'Remove from cart' },
  { key: '8', view: false, product: 'Popular Item', star: true, price: '$40.00', buttonAdd: 'Add to cart', buttonRemove: 'Remove from cart' },
];
function App() {
  const [cartList, setcartList] = useState(0);

  const addTocartlist = () => {
    setcartList(cartList + 1);
  };

  const removeFromcartlist = () => {
    setcartList(cartList - 1);
  };

  return (
    <div>
      <Navbar cartCount={cartList} />
      <Heading />
      <div className="container px-4 px-lg-5 mt-5 ">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 ">
          {LinkDetails.map(({ view, key, product, price, badge, stricPrice, star, button, buttonAdd, buttonRemove }, index) => {
            return <Card
              key={key}
              view={view}
              product={product}
              price={price}
              star={star}
              badge={badge}
              stricPrice={stricPrice}
              button={button}
              buttonAdd={buttonAdd}
              buttonRemove={buttonRemove}
              addTocartlist={addTocartlist}
              removeFromcartlist={removeFromcartlist}
            />
          }
          )}
        </div>
      </div>
      <Fotter />
    </div>
  );
}

export default App;
