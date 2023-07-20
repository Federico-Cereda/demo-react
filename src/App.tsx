// import DemoCounter from "./pages/counter/DemoCounter";
import { DemoList } from "./pages/list/DemoList";
import { DemoListHTTP } from "./pages/list-http/DemoListHTTP";
import { DemoStyling } from "./pages/styling/DemoStyling";
import { UiKitDemo } from "./pages/uikit/UiKitDemo";
import { DemoUncontrolledForm } from "./pages/forms/DemoUncontrolledForm";
import { Landing } from "./pages/landing/Landing";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./core/NavBar";
import { UsersDetails } from "./pages/users-details/UsersDetails";
import { Suspense, lazy } from "react";
import { UIKitPanelsDemo } from "./pages/uikit/pages/UIKitPanelsDemo";
import { UIKitMapsDemo } from "./pages/uikit/pages/UIKitMapsDemo";
import { UIKitTabbarDemo } from "./pages/uikit/pages/UIKitTabbarDemo";
import { DemoControlledForm } from "./pages/forms/DemoControlledForm";

const DemoCounter = lazy(() => import('./pages/counter/DemoCounter'))

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="counter" element={ 
      <Suspense fallback={ <div>loading...</div> }>
        <DemoCounter />
      </Suspense>
      } />
      <Route path="list" element={<DemoList />} />
      <Route path="users" element={<DemoListHTTP />} />
      <Route path="users/:userId" element={<UsersDetails />} />
      <Route path="styling" element={<DemoStyling />} />

      <Route path="uikit" element={<UiKitDemo />}>
        <Route path="panels" element={<UIKitPanelsDemo />} />
        <Route path="maps" element={<UIKitMapsDemo />} />
        <Route path="tabbar" element={<UIKitTabbarDemo />} />
        <Route index element={ <Navigate to="panels"/>} />
      </Route>

      <Route path="landing" element={<Landing />} />
      <Route path="forms-uncontrolled" element={<DemoUncontrolledForm />} />
      <Route path="forms-controlled" element={<DemoControlledForm />} />
      <Route path="/" element={ <div>Welcome page</div> } />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
