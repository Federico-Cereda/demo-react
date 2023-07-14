import { useState } from "react";
import DemoCounter from "./pages/counter/DemoCounter";
import { DemoList } from "./pages/list/DemoList";
import { DemoListHTP } from "./pages/list-http/DemoListHTTP";
import { DemoStyling } from "./pages/styling/DemoStyling";

export type PageName = 'counter' | 'list' | 'list-http' | 'styling'

function App() {
  const [page, setPage] = useState<PageName>('counter')  

  return (
    <>
    <button onClick={() => setPage('counter')}>Counter</button>
    <button onClick={() => setPage('list')}>List</button>
    <button onClick={() => setPage('list-http')}>List Http</button>
    <button onClick={() => setPage('styling')}>Styling</button>
    <hr/>
    <Page name={page} />
    </>
  )
}

export default App;

// PAGE RENDERING

type PageProps = {
  name: PageName;
}

export function Page({ name }: PageProps) {
  function renderPage() {
    switch (name) {
      case 'counter': return <DemoCounter />;
      case 'list': return <DemoList />;
      case 'list-http': return <DemoListHTP />;
      case 'styling': return <DemoStyling />;
    }
  }

  return <div>{renderPage()}</div>
  }
