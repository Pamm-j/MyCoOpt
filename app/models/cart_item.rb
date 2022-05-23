# == Schema Information
#
# Table name: cart_items
#
#  id            :bigint           not null, primary key
#  quantity      :integer          default(0), not null
#  product_id    :integer          not null
#  shopper_id    :integer          not null
#  size          :string           not null
#  color         :string           not null
#  delivery_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class CartItem < ApplicationRecord
  validates :quantity, :product_id, :shopper_id, :size, :color, presence:true
  validates :delivery_type, acceptance: { accept: ['delivery', 'pickup'] }
  belongs_to :shopper,
    primary_key: :id,
    foreign_key: :shopper_id,
    class_name: :User

  belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product
end
