# json.set! category do 
#   json.partial! 'api/categories/category', category: @category
#   json.photoUrl url_for(@category.photo) if @category.photo.attached?
# end

@category.products.each do |product|
  json.set! product.id do 
    json.partial! 'api/products/product', product: product
  end
end
