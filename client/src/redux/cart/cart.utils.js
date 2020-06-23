export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (exisitingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItem = (cartItems, id) => {
  return cartItems.filter((cartItem) => cartItem.id !== id);
};

export const removeItem = (cartItems, id) => {
  return cartItems
    .map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        return newQuantity !== 0
          ? { ...item, quantity: newQuantity }
          : undefined;
      } else {
        return item;
      }
    })
    .filter((item) => item);
};
