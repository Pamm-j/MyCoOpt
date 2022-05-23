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
require 'test_helper'

class CartItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
