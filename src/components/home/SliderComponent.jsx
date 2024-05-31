import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import useProductStore from "./../../zustand/productStore.js"

const SliderComponent = () => {
    const navigate = useNavigate()
    const products = useProductStore(store => store.products)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    products?.map((product, index) =>
                        <div key={index} className="!flex h-60 sm:h-64 md:h-72 lg:h-80  items-center w-full bg-slate-300 rounded-lg p-6 m-auto">
                            <div className="hidden sm:flex flex-col mx-4">
                                <div className="text-xs sm:text-base md:text-lg lg:text-xl font-bold overflow-hidden">{product?.title}</div>
                                <div className="text-xs sm:text-base md:text-lg lg:text-xl my-4 font-bold text-red-700">${product?.price}</div>
                                <div onClick={() => navigate(`products/${product?.id}`)} className="border rounded-2xl cursor-pointer s w-fit p-5 h-8 flex items-center justify-center bg-orange-200 text-slate-500 hover:bg-orange-300 hover:text-slate-700 text-xs sm:text-base md:text-lg lg:text-xl">Review</div>
                            </div>
                            <div className="hidden sm:grid min-h-[60px] w-full place-items-center overflow-hidden rounded-lg p-6 lg:overflow-visible">
                                <figure className="relative flex items-center w-full sm:w-64 md:w-72 lg:w-80 h-96 py-24">
                                    <img className="object-center hover:scale-95 w-full h-full rounded-xl" src={product?.image} alt={product?.title} />
                                </figure>
                            </div>
                            <div className="grid sm:hidden min-h-[40px] w-full place-items-center  rounded-lg p-6 ">
                                <figure className="relative w-full h-56">
                                    <img className="object-cover object-center w-full h-full rounded-xl" src={product?.image} alt={product?.title} />
                                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/50 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                        <div>
                                            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-orange-600 overflow-hidden h-14 mb-5">
                                                {product?.title}
                                            </h5>

                                            <div onClick={() => navigate(`products/${product?.id}`)} className="border rounded-2xl cursor-pointer s w-fit p-3 h-8 flex items-center justify-center bg-orange-200 text-slate-500 hover:bg-orange-300 hover:text-slate-700 text-xs sm:text-base md:text-lg lg:text-xl">Review</div>
                                        </div>

                                    </figcaption>

                                </figure>
                            </div>


                        </div>
                    )
                }
            </Slider>
        </div>
    )
}

export default SliderComponent