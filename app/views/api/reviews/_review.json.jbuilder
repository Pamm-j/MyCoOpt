json.extract! review, :id, :product_id, :title, :body, :rating, :reviewer_id
json.location review.reviewer.address_2
json.reviewer_name review.reviewer.full_name