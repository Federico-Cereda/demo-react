import NoItems from "./components/NoItems";
import { Products } from "./components/Products";
import { useCounter } from "./hooks/useCounter";

function DemoCounter() {
  const { value, increment, decrement } = useCounter();

  return (
    <>
    <button onClick={() => decrement(1)}>-</button>
    <button onClick={() => increment(2)}>+</button>

    <div>
      {
      value ?
      <Products value={value} /> :
      <NoItems />
      }
    </div>
    </>
  )
}

export default DemoCounter;
