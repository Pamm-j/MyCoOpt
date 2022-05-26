json.extract! product, :id, :name, :description, :price, :colors, :sizes, :brand, :category_id, :color_families
# json.category_id :category.id
json.photoUrls product.photos.map { |file| url_for(file) }