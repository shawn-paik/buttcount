class Pack < ApplicationRecord
	belongs_to :user
	has_many :packbutts
end
