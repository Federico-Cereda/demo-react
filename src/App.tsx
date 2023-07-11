export default function App() {
  const totalProducts = 10;
  
  return (
    <>
    {
      totalProducts ?
      <div>there are {totalProducts} products</div> :
      <div>no items</div>
    }
    </>
  )
}
