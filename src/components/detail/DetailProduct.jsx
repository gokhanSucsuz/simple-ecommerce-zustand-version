import { useState } from 'react'
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import useCartStore from "../../zustand/cartStore"
import useWishlistStore from "../../zustand/wishlistStore"

const DetailProduct = ({ productDetail }) => {
    const [quantity, setQuantity] = useState(1)
    const addToCart = useCartStore(store => store.addToCart)
    const addToWishlist = useWishlistStore(store => store.addToWishlist)


    const handleClick = (process) => {
        if (process === "minus" && quantity > 1) {
            setQuantity(quantity - 1)
        } else if (process === "plus") {
            if (productDetail?.rating?.count && productDetail.rating.count > quantity) {
                setQuantity(quantity + 1);
            }
        }
    }

    const addBasket = () => {
        addToCart({
            id: productDetail?.id,
            title: productDetail?.title,
            image: productDetail?.image,
            price: productDetail?.price,
            quantity: quantity

        });
        toast.success(`${quantity} products added to your cart successfully!`)
    }

    const addWishlist = () => {
        addToWishlist({
            id: productDetail?.id,
            title: productDetail?.title,
            image: productDetail?.image,
            price: productDetail?.price,

        });
        toast.success(`Product added to whishlist successfully!`)
    }

    return (
        <div className='h-[calc(100dvh-232px)]'>
            <Toaster position="top-right"
                reverseOrder={true} />

            <div className='flex flex-wrap gap-5 py-5'>
                <div className='h-40 md:h-52 lg:h-60  w-96 flex justify-center'>
                    <img className='h-40 md:h-52 lg:h-60 object-cover rounded-xl ' src={productDetail?.image} alt={productDetail?.title} />
                </div>
                <div className='text-sm md:text-lg lg:text-xl max-w-4xl'>
                    <div className='text-sm md:text-lg lg:text-xl font-bold py-5'>{productDetail?.title}</div>
                    <div className='text-sm md:text-lg lg:text-xl pb-5'>{productDetail?.description}</div>
                    <div className=' py-3 text-orange-400 font-bold'>{productDetail?.price} <span className='text-xl'>$</span></div>
                    <div className='flex flex-wrap justify-between gap-1'>
                        <div className='flex gap-3 font-bold items-center'>
                            <div className='cursor-pointer' onClick={() => handleClick("minus")}><FaMinusCircle className='hover:scale-105 text-2xl' values='minus' />
                            </div>
                            <div className='text-2xl'>{quantity}</div>
                            <div className='cursor-pointer' onClick={() => handleClick("plus")}><FaPlusCircle className='hover:scale-105 text-2xl' />
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <div id="liveToastBtn" className={`bg-orange-300 w-fit p-2 border rounded-md cursor-pointer max-h-12 flex items-center justify-center readonly text-sm md:text-lg lg:text-xl hover:scale-95`} onClick={addBasket}>
                                Add to Cart
                            </div>
                            <div id="liveToastBtn" className={`bg-orange-300 w-fit p-2 border rounded-md cursor-pointer max-h-12 flex items-center justify-center readonly text-sm md:text-lg lg:text-xl hover:scale-95`} onClick={addWishlist}>
                                Add to Whishlist
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

DetailProduct.propTypes = {
    productDetail: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        rating: PropTypes.shape({
            rate: PropTypes.number,
            count: PropTypes.number,
        }),
    }),
};

export default DetailProduct