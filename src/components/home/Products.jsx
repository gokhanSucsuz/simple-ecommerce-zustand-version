import { useEffect, useState } from 'react'
import Loading from "../Loading"
import Product from './Product'
import ReactPaginate from 'react-paginate'
import useProductStore from "../../zustand/productStore"


const Products = ({ category, sort }) => {

  const products = useProductStore(store => store.products)
  const productStatus = useProductStore(store => store.productsStatus)
  const getCategoryProducts = useProductStore(store => store.getCategoryProducts)
  const getProducts = useProductStore(store => store.getProducts)


  useEffect(() => {
    if (category) {
      getCategoryProducts(category)
    } else {
      getProducts()
    }

  }, [category])


  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className='flex-col flex-wrap'>
      {
        productStatus == "LOADING" ? <Loading /> :
          <>
            <div className='flex flex-wrap w-full'>
              {
                currentItems?.sort((a, b) => sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : "").map((product, index) => {
                  return <Product key={index} product={product} />
                }
                )
              }
            </div>
            <ReactPaginate
              className='paginate font-bold py-8 flex gap-2 justify-center align-middle'
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </>
      }
    </div>
  )
}

export default Products