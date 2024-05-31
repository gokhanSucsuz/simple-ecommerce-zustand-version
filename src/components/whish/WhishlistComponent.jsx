import useWishlistStore from "../../zustand/wishlistStore"

const WishlistComponent = ({ wish }) => {
    const removeFromWishlist = useWishlistStore(store => store.removeFromWishlist)

    const handleClick = () => {
        removeFromWishlist(wish.id)
    }

    return (
        <div className='p-4 border-separate shadow-sm flex justify-between bg-slate-200 gap-4 flex-wrap'>
            <div>
                <img className='w-[120px] h-[120px] object-cover rounded-xl p-3' src={wish?.image} alt="" />
            </div>
            {wish?.title}
            <div
                className='m-2 p-2 bg-red-500 w-[100px] h-[40px] text-center text-white rounded-lg cursor-pointer'
                onClick={handleClick}>
                Delete
            </div>
        </div>
    )
}

export default WishlistComponent
