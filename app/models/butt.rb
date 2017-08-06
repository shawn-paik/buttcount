class Butt < ApplicationRecord
	belongs_to :buttable, polymorphic: true, optional: true
end
