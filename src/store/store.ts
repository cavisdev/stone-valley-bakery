import create from "zustand";

interface StoneValleyState {
  dropdownOpen: boolean;
  setDropdownOpen: () => void;
  activeMenuTab: string;
  setMenuTab: (name: string) => void;
  itemOpen: boolean;
  setItemOpen: (val: boolean) => void;
  cart: Array<CartItem>;
  addToCart: (name: string, price: number, quantity: number) => void;
  clearCart: () => void;
  removeFromCart: (name: string) => void;
  cartVisible: boolean;
  setCartVisible: (val: boolean) => void;
}

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

const useStore = create<StoneValleyState>()((set, get) => ({
  dropdownOpen: false,
  setDropdownOpen: () => {
    set(() => ({ dropdownOpen: !get().dropdownOpen }));
  },
  activeMenuTab: "bread",
  setMenuTab: (name) => {
    set(() => ({ activeMenuTab: name }));
  },
  itemOpen: false,
  setItemOpen: (val) => {
    set(() => ({ itemOpen: val }));
  },
  cart: [],
  addToCart: (name, price, quantity) => {
    if (get().cart.find((item) => item.name === name)) {
      const index = get().cart.findIndex((item) => item.name === name);
      get().cart[index].quantity += quantity;
    } else if (quantity != 0) {
      set(() => ({
        cart: [...get().cart, { name: name, price: price, quantity: quantity }],
      }));
    }
  },
  removeFromCart: (name) => {
    const index = get().cart.findIndex((item) => item.name === name);
    get().cart.splice(index, 1);

    set(() => ({ cart: [...get().cart] }));
  },
  clearCart: () => {
    set(() => ({ cart: [] }));
  },
  cartVisible: false,
  setCartVisible: (val) => {
    set(() => ({ cartVisible: val }));
  },
}));

export { useStore };
