class UserController < ApplicationController
	def new
		@user = User.new
	end

	def create
  		@user = User.create(user_params)
	end

	def user_params
  		params.require(:user).permit(:param_name)
	end

end
