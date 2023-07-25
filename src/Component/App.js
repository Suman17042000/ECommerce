import './index.css';
import { useEffect, useCallback, useState } from 'react';
import Header from './Header';
import Home from './Home';
import axios from 'axios';
function App() {

  const [product, setProduct] = useState([]);
  const [showProduct,setShowProduct]=useState(true);
  const fData = useCallback(async () => {
    const response = await axios.get('https://mocki.io/v1/101be704-1080-43cd-bb58-5d828b1c2b7e');
    console.log(response.data);
    setProduct(response.data);
  }, []);

  useEffect(() => {
    fData()
  }, [fData]);

  const onShowProductHandler=()=>
  {
    setShowProduct(!showProduct);
  }

  return (
    <div>
      <Header showProduct={onShowProductHandler}></Header>
      <div className='Product'>
        {showProduct&&<Home items={product}></Home>}
      </div>
    </div>
  );
}

export default App;
