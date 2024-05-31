import { create } from "zustand";
import { STATUS } from "../utils/status";
import { devtools } from "zustand/middleware";

const fetchProducts = async () => {
	const response = await fetch("https://fakestoreapi.com/products");
	const data = response.json();
	return data;
};

const fetchCategoryProducts = async (category) => {
	const response = await fetch(
		`https://fakestoreapi.com/products/category/${category}`
	);
	const data = await response.json();
	return data;
};

const fetchProductDetail = async (id) => {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`);
	const data = await response.json();
	return data;
};

const useProductStore = create(
	devtools((set) => ({
		products: [],
		productsStatus: STATUS.IDLE,
		productsDetail: null, // Ürün detayları için tek bir ürün objesi
		productsDetailStatus: STATUS.IDLE, // Ürün detayı durumu

		getProducts: async () => {
			set({ productsStatus: STATUS.LOADING });
			try {
				const data = await fetchProducts();
				set({ products: data, productsStatus: STATUS.SUCCESS });
			} catch (error) {
				set({ productsStatus: STATUS.FAIL });
			}
		},
		getCategoryProducts: async (category) => {
			set({ productsStatus: STATUS.LOADING });
			try {
				const data = await fetchCategoryProducts(category);
				set({ products: data, productsStatus: STATUS.SUCCESS });
			} catch (error) {
				set({ productsStatus: STATUS.FAIL });
			}
		},
		getProductDetail: async (id) => {
			set({ productsDetailStatus: STATUS.LOADING }); // Ürün detayı yükleniyor durumu
			try {
				const data = await fetchProductDetail(id);
				set({ productsDetail: data, productsDetailStatus: STATUS.SUCCESS }); // Ürün detayları güncelleniyor
			} catch (error) {
				set({ productsDetailStatus: STATUS.FAIL }); // Hata durumu
			}
		},
	}))
);

export default useProductStore;
