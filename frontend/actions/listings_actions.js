export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_CATEGORY_PRODUCTS = 'RECEIVE_CATEGORY_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'


import * as ListingsApiUtil from '../util/listings_api_util'

const recieveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
})
const recieveCategoryProducts = (products) => ({
  type: RECEIVE_CATEGORY_PRODUCTS,
  products
})
const recieveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
})


export const fetchCategories = () => dispatch => ListingsApiUtil.fetchCategories()
  .then((categories)=>(dispatch(recieveCategories(categories))))

export const fetchCategoryProducts = (categoryId) => dispatch => ListingsApiUtil.fetchCategoryProducts(categoryId)
  .then((products)=>(dispatch(recieveCategoryProducts(products))))

export const fetchProduct = (productId) => dispatch => ListingsApiUtil.fetchProduct(productId)
  .then((product)=>(dispatch(recieveProduct(product))))

