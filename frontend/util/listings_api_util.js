export const fetchCategories = () => (
  $.ajax ({
    url: `/api/categories`,
    method: "GET"
  })
)

export const fetchCategoryProducts = (categoryId)=> (
  $.ajax ({
    url: `/api/categories/${categoryId}`,
    method: "GET"
  })
)

export const fetchProduct = (productId)=> (
  $.ajax ({
    url: `/api/products/${productId}`,
    method: "GET"
  })
)