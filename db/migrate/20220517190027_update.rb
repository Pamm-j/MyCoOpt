class Update < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :inventory
    remove_column :products, :color
    remove_column :products, :size
    add_column :products, :colors, :text, array:true, default: []
    add_column :products, :sizes, :text, array:true, default: ["One Size"]
  end
end
