class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :quantity, null:false
      t.integer :product_id, null:false
      t.integer :shopper_id, null:false
      t.string :size, null:false
      t.string :color, null:false
      t.string :delivery_type, null:false

      t.timestamps
    end
  end
end
