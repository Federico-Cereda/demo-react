import { NavLink } from "react-router-dom";

const isActive = (obj: { isActive: boolean }) => {
    return obj.isActive ? 'btn btn-dark' : 'btn btn-primary'
}

export function NavBar() {
    return (
        <>
        <div className="btn-group">
            <NavLink to="counter" className={isActive}>Counter</NavLink>
            <NavLink to="list" className={isActive}>List</NavLink>
            <NavLink to="users" className={isActive}>Http</NavLink>
            <NavLink to="styling" className={isActive}>Styling</NavLink>
            <NavLink to="uikit" className={isActive}>UIKIT</NavLink>
            <NavLink to="landing" className={isActive}>Landing</NavLink>
            <NavLink to="forms-uncontrolled" className={isActive}>Forms 1</NavLink>
            <NavLink to="forms-controlled" className={isActive}>Forms 2</NavLink>
      </div>
      <hr/>
      </>
    )
}
