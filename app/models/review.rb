# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :integer          not null
#  product_id  :integer          not null
#  title       :string           not null
#  body        :text
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :reviewer_id, :product_id, :title, presence:true
  validates :rating, numericality: { in: 0..5 }


  belongs_to :reviewer,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :User

  belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product
end
