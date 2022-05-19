class AddBrandColumnContraint < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :brand, :string, default:"NA"
  end
end
