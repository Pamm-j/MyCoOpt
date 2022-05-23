json.extract! cart_item, :id, :quantity, :size, :color, :delivery_type
json.cart_item_id cart_item.id
json.partial! 'api/products/product', product: cart_item.product