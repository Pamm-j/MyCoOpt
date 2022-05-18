export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_CATEGORY_PRODUCTS = 'RECEIVE_CATEGORY_PRODUCTS'


import * as ListingsApiUtil from '../util/listings_api_util'

const recieveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
})
const recieveCategoryProducts = (products) => ({
  type: RECEIVE_CATEGORY_PRODUCTS,
  products
})


export const fetchCategories = () => dispatch => ListingsApiUtil.fetchCategories()
  .then((categories)=>(dispatch(recieveCategories(categories))))

export const fetchCategoryProducts = (categoryId) => dispatch => ListingsApiUtil.fetchCategoryProducts(categoryId)
  .then((products)=>(dispatch(recieveCategoryProducts(products))))

