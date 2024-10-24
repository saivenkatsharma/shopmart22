

export const ADD_ITEM = "ADDITEM";
export const DELETE_ITEM = "DELITEM";


export const addCart = (product) => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
};


export const delCart = (productId) => {
  return {
    type: DELETE_ITEM,
    payload: productId, 
  };
};

// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}
>>>>>>> origin/master
