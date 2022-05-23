class UpdateUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :address_1, :string, default: ""
    add_column :users, :address_2, :string, default: ""
    add_column :users, :card_end, :integer, default: "1111"
    add_column :users, :card_exp, :string, default: "01/12"
  end
end
