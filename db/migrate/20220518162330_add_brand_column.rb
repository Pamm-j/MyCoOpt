class AddBrandColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :brand, :string
  end
end
