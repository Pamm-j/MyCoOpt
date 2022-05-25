class UpdateProductsForColorFamilies < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :best_uses, :color_families
  end
end
