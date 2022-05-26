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
export const fetchSearchProducts = (searchTerm)=> (
  $.ajax ({
    url: `/api/products`,
    method: "GET",
    data: {searchTerm}
  })
)

export const fetchProduct = (productId)=> (
  $.ajax ({
    url: `/api/products/${productId}`,
    method: "GET"
  })
)