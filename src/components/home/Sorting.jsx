
const Sorting = ({ setSort }) => {
    return (
        <div className='bg-slate-400 my-5 p-5 rounded-xl flex items-center justify-end'>
            <select onChange={(e) => setSort(e.target.value)} name='' id='' className='bg-orange-300 p-2 mx-5 rounded-xl border-none outline-none text-slate-600 font-bold'>
                <option disabled value="">Choose</option>
                <option value="inc">Inc Price</option>
                <option value="dec">Dec Price</option>
            </select>
        </div>
    )
}

export default Sorting