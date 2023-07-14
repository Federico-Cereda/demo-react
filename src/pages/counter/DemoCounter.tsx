import { useState } from "react";
import NoItems from "./components/NoItems";
import { Products } from "./components/Products";

function DemoCounter() {
  const [totalProducts, setTotalProducts] = useState(0);

  function inc(step: number) {
    setTotalProducts(s => s + step)
  }

  function dec(step: number) {
    setTotalProducts(s => s - step)
  }

  return (
    <>
    <button onClick={() => dec(1)}>-</button>
    <button onClick={() => inc(2)}>+</button>

    <div>
      {
      totalProducts ?
      <Products value={totalProducts} /> :
      <NoItems />
      }
    </div>
    </>
  )
}

export default DemoCounter;
