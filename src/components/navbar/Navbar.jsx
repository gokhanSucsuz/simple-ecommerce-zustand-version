import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex bg-slate-500 shadow-2xl py-4 px-3 rounded-lg items-center justify-between my-5'>
      <NavbarLeft />
      <NavbarRight />
    </div>
  )
}

export default Navbar