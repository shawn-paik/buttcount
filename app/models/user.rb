class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many  :butts, as: :buttable
  has_many  :packs, as: :packable
  has_many  :cartons

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, length: { maximum: 255 },
            format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
            
  has_secure_password

  def butts_this_month
    # returns array of butt objects made in current month
    self.butts.where("created_at >= ?", Time.zone.now.beginning_of_month)
  end

  def butts_this_year
      self.butts.where("created_at >= ?", Time.zone.now.beginning_of_year)
  end

  def butts_today
       self.butts.where("created_at >= ?", Time.zone.now.beginning_of_day)
  end

  def butts_this_week
    self.butts.where("created_at >= ?", Time.zone.now.beginning_of_week)
  end

end