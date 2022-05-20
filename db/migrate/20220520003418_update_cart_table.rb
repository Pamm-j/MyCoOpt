class UpdateCartTable < ActiveRecord::Migration[5.2]
  def change
    change_column :cart_items, :quantity, :integer, default:0
    change_column :cart_items, :color, :string
  end
end
