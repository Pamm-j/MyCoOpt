export const fetchAllReviews = (product_id) => (
  $.ajax ({
    url: `/api/reviews`,
    method: "GET",
    data: {product_id}
  })
)
export const fetchReview = (reviewId) => (
  $.ajax ({
    url: `/api/reviews/${reviewId}`,
    method: "GET"
  })
)
export const createReview = (review) => (
  $.ajax ({
    url: `/api/reviews`,
    method: "POST",
    data: {review}
  })
)
export const updateReview = (review) => (
  $.ajax ({
    url: `/api/reviews/${review}`,
    method: "PATCH",
    data: {review}
  })
)
export const deleteReviews = (reviewId) => (
  $.ajax ({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE"
  })
)