import PropTypes from "prop-types"
import useCartStore from "../../zustand/cartStore"


export const CartComponent = ({ cart }) => {

    const removeFromCart = useCartStore(store => store.removeFromCart)
    const handleClick = () => {
        removeFromCart(cart?.id);
    }

    return (
        <div className='p-4 border-separate shadow-sm flex justify-between bg-slate-200 gap-4 flex-wrap '>

            <div>
                <img className='w-[120px] h-[120px] object-cover rounded-xl p-3' src={cart?.image} alt="" />
            </div>
            <div className='flex flex-wrap font-bold text-orange-600'>
                <div>{cart?.title}</div>
                <div>{cart?.description}</div>
            </div>
            <div className="px-3 text-red-600 font-bold text-xl">{cart?.price} $ ({cart?.quantity})</div>
            <div
                className='m-2 p-2 bg-red-500 w-[100px] h-[40px] text-center text-white rounded-lg cursor-pointer'
                onClick={handleClick}>
                Delete
            </div>
        </div>
    )
}

CartComponent.propTypes = {
    cart: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
    }).isRequired,
};