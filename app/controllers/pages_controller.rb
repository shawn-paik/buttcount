class PagesController < ApplicationController
	def index
		if user_signed_in?
			@current_user = current_user.as_json(include: {butts: {methods:[:price, :created_at, :updated_at]}})
		else

		end
	end
end
