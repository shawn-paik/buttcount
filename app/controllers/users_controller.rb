class UsersController < ApplicationController

	

	def create
		# check if user is in database first
		@user = User.new(user_params)
		@current_user = User.find_by(fbid: @user.fbid)
		if @current_user
			binding.pry
			session[:user_id] = @current_user.id
			redirect_to '/pages'
		else
		# binding.pry
			if @user.save
				session[:user_id] = @user.id
				redirect_to '/pages'
			else
				@errors = @user.errors.full_messages
				render json: @errors.as_json
			end
		end
		
	end

	private
	def send_butts_list
		render json: current_user.as_json(include: {butts: {methods:[:price, :created_at, :updated_at]}}) 
	end

	def user_params
		params.permit(:fb, :email, :fbid)
	end

end
