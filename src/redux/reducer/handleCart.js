
const getInitialCart = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const handleCart = (state = getInitialCart(), action) => {
  const product = action.payload;
  let updatedCart;

  switch (action.type) {
    case "ADDITEM":
      
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        
        updatedCart = state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        
        updatedCart = [...state, { ...product, qty: 1 }];
      }
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    case "DELITEM":
      const productInCart = state.find((item) => item.id === product.id);
      if (productInCart) {
        if (productInCart.qty === 1) {
          
          updatedCart = state.filter((item) => item.id !== productInCart.id);
        } else {
          
          updatedCart = state.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty - 1 } : item
          );
        }
        // Update localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
      return state;

    default:
      return state;
  }
};

export default handleCart;
