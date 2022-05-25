class UpdateProductsTableForFilter < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :weight, :float
    add_column :products, :best_uses, :text, array:true, default: []
  end
end
