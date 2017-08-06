class Carton < ApplicationRecord
	belongs_to :user
	has_many :packs, as: :packable
end
