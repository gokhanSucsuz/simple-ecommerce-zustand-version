import { create } from "zustand";
import { STATUS } from "../utils/status";

const fetchFromLocalStorage = () => {
	return localStorage.getItem("cart")
		? JSON.parse(localStorage.getItem("cart"))
		: [];
};

const storeInLocalStorage = (data) => {
	localStorage.setItem("cart", JSON.stringify(data));
};

const useCartStore = create((set) => {
	const initialCarts = fetchFromLocalStorage();

	return {
		carts: initialCarts,
		cartStatus: null,
		totalAmount: 0,
		itemCount: 0,

		getCart: () => {
			set({ cartStatus: STATUS.LOADING });
			try {
				const data = fetchFromLocalStorage();
				set({ carts: data, cartStatus: STATUS.SUCCESS });
			} catch (error) {
				set({ cartStatus: STATUS.FAIL });
			}
		},

		addToCart: (item) => {
			set((state) => {
				const isItemInCart = state.carts.find((cart) => cart.id === item.id);
				let updatedCarts;
				if (isItemInCart) {
					updatedCarts = state.carts.map((cart) => {
						if (cart.id === item.id) {
							const tempQty = cart.quantity + item.quantity;
							const tempTotalPrice = tempQty * cart.price;
							return { ...cart, quantity: tempQty, totalPrice: tempTotalPrice };
						}
						return cart;
					});
				} else {
					updatedCarts = [
						...state.carts,
						{ ...item, totalPrice: item.quantity * item.price },
					];
				}
				storeInLocalStorage(updatedCarts);
				return { carts: updatedCarts };
			});
		},

		removeFromCart: (id) => {
			set((state) => {
				const updatedCarts = state.carts.filter((item) => item.id !== id);
				storeInLocalStorage(updatedCarts);
				return { carts: updatedCarts };
			});
		},

		clearCart: () => {
			set(() => {
				storeInLocalStorage([]);
				return { carts: [] };
			});
		},

		getCartTotal: () => {
			set((state) => {
				const totalAmount = state.carts.reduce((cartTotal, cartItem) => {
					return cartTotal + cartItem.price * cartItem.quantity;
				}, 0);
				const itemCount = state.carts.length;
				return { totalAmount, itemCount };
			});
		},
	};
});

export default useCartStore;
