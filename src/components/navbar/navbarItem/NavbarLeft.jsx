import { NavLink } from "react-router-dom"

const NavbarLeft = () => {
    return (
        <div className='flex shadow-lg text-lg sm:text-xl md:text-2xl font-bold text-orange-400'>
            <NavLink className="p-2 md:p-4 rounded-xl hover:scale-95" to="/" >Simple E-Commerce</NavLink>
        </div>
    )
}

export default NavbarLeft