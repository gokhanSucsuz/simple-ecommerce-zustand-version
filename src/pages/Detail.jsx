import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailProduct from '../components/detail/DetailProduct'
import Loading from "../components/Loading"
import useProductStore from "../zustand/productStore"

const Detail = () => {
    const { id } = useParams()
    const [productDetailStatus, setProductDetailStatus] = useState("IDLE")
    const { getProductDetail, productsDetail } = useProductStore(store => ({
        getProductDetail: store.getProductDetail,
        productsDetail: store.productsDetail
    }))

    useEffect(() => {
        const fetchData = async () => {
            setProductDetailStatus("LOADING")
            try {
                await getProductDetail(id)
                setProductDetailStatus("SUCCESS")

            } catch (error) {
                setProductDetailStatus("ERROR")
                console.error("Error fetching product detail:", error)
            }
        }
        fetchData()
    }, [id, getProductDetail])

    return (
        <div>
            {
                productDetailStatus === "LOADING" ? <Loading /> :
                    productDetailStatus === "SUCCESS" ? <DetailProduct productDetail={productsDetail} /> :
                        productDetailStatus === "ERROR" ? <div>Error loading product detail</div> :
                            null
            }
        </div>
    )
}

export default Detail
