import { useState } from "react"
import Category from "../components/home/Category"
import SliderComponent from "../components/home/SliderComponent"
import Sorting from "../components/home/Sorting"
import Products from "../components/home/Products"

const Home = () => {
  const [sort, setSort] = useState("")
  const [category, setCategory] = useState("")


  return (
    <div className="h-full">
      <SliderComponent />
      <Sorting setSort={setSort} />
      <div className="sm:flex">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  )
}

export default Home