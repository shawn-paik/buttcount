class Pack < ApplicationRecord
	belongs_to :packable, polymorphic: true, optional: true
	has_many :butts, as: :buttable
end
