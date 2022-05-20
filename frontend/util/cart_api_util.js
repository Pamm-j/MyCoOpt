export const fetchAllCartItems = () => (
  $.ajax ({
    url: `/api/cart_items`,
    method: "GET"
  })
)
export const fetchCartItem = (cartItemId) => (
  $.ajax ({
    url: `/api/cart_items${cartItemId}`,
    method: "GET"
  })
)
export const updateCartItem = (cartItemId) => (
  $.ajax ({
    url: `/api/cart_items${cartItemId}`,
    method: "PATCH"
  })
)
export const deleteCartItem = (cartItemId) => (
  $.ajax ({
    url: `/api/cart_items${cartItemId}`,
    method: "DELETE"
  })
)