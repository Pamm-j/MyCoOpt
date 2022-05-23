# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  full_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  address_1       :string           default("")
#  address_2       :string           default("")
#  card_end        :integer          default(1111)
#  card_exp        :string           default("01/12")
#
class User < ApplicationRecord
  validates :email, :session_token, uniqueness: true
  validates :email, :password_digest, :full_name, presence: true
  validates :password, length: {minimum: 6, allow_nil:true}
  after_initialize :ensure_session_token!
  attr_reader :password
  
  has_many :cart_items,
    primary_key: :id,
    foreign_key: :shopper_id,
    class_name: :CartItem
    
  has_many :cart_products,
    through: :cart_items,
    source: :product
  
  has_many :reviews,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :Review,
    dependent: :destroy

  def self.findbycredentials(email, password)
    user = User.find_by(email: email)
    if user
      user.is_password?(password) ? user : nil
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
