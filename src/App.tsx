import { useState } from "react";
import DemoCounter from "./pages/counter/DemoCounter";
import { DemoList } from "./pages/list/DemoList";
import { DemoListHTP } from "./pages/list-http/DemoListHTTP";
import { DemoStyling } from "./pages/styling/DemoStyling";
import { UiKitDemo } from "./pages/uikit/UiKitDemo";
import clsx from "clsx";

export type PageName = 'counter' | 'list' | 'list-http' | 'styling' | 'uikit'

function App() {
  const [page, setPage] = useState<PageName>('counter')

  function getActiveClass(pageToCheck: PageName) {
    return clsx(
      'btn btn-outline-primary', { 'bg-warning': page === pageToCheck }
    )
  }

  return (
    <div>
      <div className="btn-group">
        <button className={getActiveClass('counter')} onClick={() => setPage('counter')}>Counter</button>
        <button className={getActiveClass('list')} onClick={() => setPage('list')}>List</button>
        <button className={getActiveClass('list-http')} onClick={() => setPage('list-http')}>List Http</button>
        <button className={getActiveClass('styling')} onClick={() => setPage('styling')}>Styling</button>
        <button className={getActiveClass('uikit')} onClick={() => setPage('uikit')}>UIKIT</button>
      </div>
    <hr/>
    <Page name={page} />
    </div>
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
      case 'uikit': return <UiKitDemo />;
    }
  }

  return <div className="mx-3">{renderPage()}</div>
  }
