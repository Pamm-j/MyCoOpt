class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null:false
      t.integer :category_id, null:false
      t.text :description, null:false
      t.float :price, null:false
      t.integer :inventory, null:false
      t.string :size
      t.string :color

      t.timestamps
    end
    add_index :products, :name, unique:true
  end
end
