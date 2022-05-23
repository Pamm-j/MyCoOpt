export const fetchAllCartItems = (shopper_id) => (
  $.ajax ({
    url: `/api/cart_items`,
    method: "GET",
    data: {shopper_id}
  })
)
export const fetchCartItem = (cartItemId) => (
  $.ajax ({
    url: `/api/cart_items/${cartItemId}`,
    method: "GET"
  })
)
export const createCartItem = (cartItem) => (
  $.ajax ({
    url: `/api/cart_items`,
    method: "POST",
    data: {cartItem}
  })
)
export const updateCartItem = (cartItem) => (
  $.ajax ({
    url: `/api/cart_items/${cartItem}`,
    method: "PATCH",
    data: {cartItem}
  })
)
export const deleteCartItems = (shopperId) => (
  $.ajax ({
    url: `/api/cart_items/${shopperId}`,
    method: "DELETE"
  })
)