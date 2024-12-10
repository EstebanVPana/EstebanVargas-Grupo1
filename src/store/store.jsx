import {create} from 'zustand'

const useProductStore = create((set) => ({
  product: null,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  setProduct: (product) => set({ product }),
  addToCart: (item) => set((state) => {
    const updatedCart = [...state.cart, item]
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { cart: updatedCart }
  }),
  removeFromCart: (productId) => set((state) => {
    const updatedCart = state.cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { cart: updatedCart }
  }),
  incrementQuantity: (productId) => set((state) => {
    const updatedCart = state.cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    return { cart: updatedCart }
  }),
  decrementQuantity: (productId) => set((state) => {
    const updatedCart = state.cart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    return { cart: updatedCart }
  }),
}))

export default useProductStore
