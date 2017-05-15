class PagesController < ApplicationController
	def index
		if user_signed_in?
			@current_user = current_user.as_json(include: {butts: {methods:[:price, :created_at, :updated_at]}})
		end
	end

	def home
		if user_signed_in?
			@current_user = current_user.as_json(include: {butts: {methods:[:price, :created_at, :updated_at]}})
			redirect_to '/pages/index'
		end
	end
end
