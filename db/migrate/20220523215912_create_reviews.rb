class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :reviewer_id, null:false
      t.integer :product_id, null:false
      t.string :title, null:false
      t.text :body
      t.integer :rating, null:false

      t.timestamps
    end
    add_index :reviews, :reviewer_id 
    add_index :reviews, :product_id
    add_index :reviews, [:product_id, :reviewer_id], unique:true
  end
end
