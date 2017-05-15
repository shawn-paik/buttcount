class Pack < ApplicationRecord
	belongs_to :smoker, class_name: User
	has_many :pack_butts, class_name: Butt
end
