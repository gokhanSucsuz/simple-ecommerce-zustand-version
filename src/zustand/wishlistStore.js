import { create } from "zustand";

const fetchFromLocalStorage = () => {
	return localStorage.getItem("wishlist")
		? JSON.parse(localStorage.getItem("wishlist"))
		: [];
};

const storeInLocalStorage = (data) => {
	localStorage.setItem("wishlist", JSON.stringify(data));
};

const wishlistStore = create((set) => ({
	wishlist: fetchFromLocalStorage(),
	addToWishlist: (wish) =>
		set((state) => {
			const isItemWish = state.wishlist.find((item) => item.id === wish.id);
			let list = [...state.wishlist];
			if (!isItemWish) {
				list.push({ id: wish.id, title: wish.title, image: wish.image });
				storeInLocalStorage(list);
			}
			return {
				wishlist: list,
			};
		}),
	removeFromWishlist: (wish) =>
		set((state) => {
			const tempWishlist = state.wishlist.filter((item) => item.id !== wish);
			storeInLocalStorage(tempWishlist);
			return {
				wishlist: tempWishlist,
			};
		}),
	clearWishlist: () =>
		set(() => {
			storeInLocalStorage([]);
			return {
				wishlist: [],
			};
		}),
}));

export default wishlistStore;
