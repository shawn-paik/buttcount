class Pack < ApplicationRecord
	belongs_to :useru
	has_many :packbutts
end
