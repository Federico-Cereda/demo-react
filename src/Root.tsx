import { Outlet } from "react-router-dom";
import { NavBar } from "./core/NavBar";

export function Root() {
    return <div>
        Root
        <NavBar />
        <Outlet />
    </div>
}
