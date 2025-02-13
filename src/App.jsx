import './App.css'
import Nav from './components/Nav'
import Items from './components/Items'
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Nav cart={cart} setCart={setCart}/>
      <Items cart={cart} setCart={setCart} />
    </>
  )
}

export default App
