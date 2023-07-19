import { NavLink, Outlet } from "react-router-dom";

export function UiKitDemo() {
    return <div>

        <h1>UIKIT DEMO</h1>

        <NavLink to="/uikit/panels">Panels</NavLink> | 
        <NavLink to="/uikit/maps">Maps</NavLink> | 
        <NavLink to="/uikit/tabbar">Tabbar</NavLink>

        <Outlet />

    </div>
}