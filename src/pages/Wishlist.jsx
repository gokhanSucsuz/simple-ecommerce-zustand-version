import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import WishlistComponent from '../components/whish/WhishlistComponent'
import useWishlistStore from "../zustand/wishlistStore"


const Wishlist = () => {
    const wishlist = useWishlistStore(store => store.wishlist)
    const [buttonState, setButtonState] = useState(0)

    useEffect(() => {
        setButtonState(buttonState + 1)
    }, [wishlist])

    useEffect(() => {
        if (buttonState > 0) {
            toast.error("Product removed wishlist!")
        }
    }, [wishlist])

    return (
        <div className='py-10 h-[calc(100dvh-220px)]'>
            <Toaster position="top-right" reverseOrder={true} />
            <div className='float-left w-full font-bold text-red-500 text-3xl py-5'>
                Wishlist</div>
            {
                wishlist?.length > 0 ? <div>
                    {
                        wishlist.map((wish, index) =>
                            <WishlistComponent key={index} wish={wish} />
                        )
                    }
                </div> :
                    <div>There is not any whishes!</div>
            }

        </div>
    )
}

export default Wishlist
