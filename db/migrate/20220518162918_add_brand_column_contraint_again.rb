class AddBrandColumnContraintAgain < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :brand, :string, null:false
  end
end
