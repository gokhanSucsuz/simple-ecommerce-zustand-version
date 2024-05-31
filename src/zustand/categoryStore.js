import { create } from "zustand";
import { devtools } from "zustand/middleware";

const fetchCategories = async () => {
	const response = await fetch("https://fakestoreapi.com/products/categories");
	const data = await response.json();
	return data;
};

const useCategoryStore = create(
	devtools((set) => ({
		categories: [],
		getCategories: async () => {
			const data = await fetchCategories();
			set({
				categories: data,
			});
		},
	}))
);

export default useCategoryStore;
