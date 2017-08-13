class PagesController < ApplicationController
	def index
		# binding.pry
		# binding.pry
		# p 'you made it!'
		if user_signed_in?
			@current_user = current_user.as_json(include: {butts: {methods:[:price, :created_at, :updated_at]}})
			@user = current_user
		end
	end

	def home
		if user_signed_in?
			@current_user = current_user.as_json(include: {butts: {methods:[:price, :created_at, :updated_at]}})
			redirect_to '/pages'
		end
	end

	def destroy
		sessions.clear
		redirect_to '/'
	end
end
