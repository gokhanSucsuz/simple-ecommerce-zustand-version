import { useEffect } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { SlBasket } from "react-icons/sl"
import { useNavigate } from "react-router-dom"
import useCartStore from "../../../zustand/cartStore"
import useWishlistStore from "../../../zustand/wishlistStore"

const NavbarRight = () => {
  const navigate = useNavigate()
  const { carts, getCart, getCartTotal } = useCartStore(store => ({
    carts: store.carts,
    getCart: store.getCart,
    getCartTotal: store.getCartTotal
  }))

  const wishlist = useWishlistStore(store => store.wishlist)

  return (
    <div className="flex items-center gap-8">
      <div className="hidden lg:flex items-center border p-3 rounded-full bg-orange-300">
        <input className="bg-orange-300 border-none border-transparent focus:border-transparent focus:ring-0 font-bold placeholder-slate-500 " type="text" placeholder="Search Area..." />
        <BiSearch className="text-slate-500" size={20} />
      </div>
      <div className="flex gap-4 md:gap-8 pe-5">
        <div className="relative cursor-pointer" onClick={() => navigate("wishlist")}>
          <div className="absolute -top-3 -right-3 bg-red-400 text-white w-4 h-4 flex items-center justify-center">{wishlist ? wishlist?.length : 0}</div>
          <AiOutlineHeart className="text-white hover:bg-red-700 rounded-full hover:p-1" size={20} />
        </div>
        <div className="relative cursor-pointer" onClick={() => navigate("cart")}>
          <div className="absolute -top-3 -right-3 bg-red-400 text-white rounded-full w-4 h-4 flex items-center justify-center">{carts ? carts?.length : 0}</div>
          <SlBasket className="text-white" size={20} />
        </div>
      </div>
      {/* mobile menu */}
    </div>
  )
}

export default NavbarRight
