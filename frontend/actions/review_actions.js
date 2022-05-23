export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

import * as ReviewsAPIUtil from '../util/reviews_api_util'

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
})
const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})
const removeReviews = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const fetchAllReviews = (reviewId) => dispatch => ReviewsAPIUtil.fetchAllReviews(reviewId)
.then((reviews)=>(dispatch(receiveReviews(reviews))))

export const fetchReview = (reviewId) => dispatch => ReviewsAPIUtil.fetchReview(reviewId)
  .then((review)=>(dispatch(receiveReview(review))))

export const createReview = (review) => dispatch => ReviewsAPIUtil.createReview(review)
  .then((review)=>(dispatch(receiveReview(review))))

export const updateReview = (review) => dispatch => ReviewsAPIUtil.updateReview(review)
  .then((review)=>(dispatch(receiveReview(review))))

export const deleteReviews = (reviewId) => dispatch => ReviewsAPIUtil.deleteReviews(reviewId)
  .then(()=>(dispatch(removeReviews(reviewId))))