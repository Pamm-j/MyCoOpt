json.extract! product, :id, :name, :description, :price, :colors, :sizes, :brand
json.photoUrls product.photos.map { |file| url_for(file) }