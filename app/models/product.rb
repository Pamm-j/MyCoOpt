# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  category_id :integer          not null
#  description :text             not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  colors      :text             default([]), is an Array
#  sizes       :text             default(["\"One Size\""]), is an Array
#
class Product < ApplicationRecord
  validates :name, :category_id, :description, :price, :brand, presence:true
  validates :name, uniqueness:true
  belongs_to :category
  has_many_attached :photos
end
