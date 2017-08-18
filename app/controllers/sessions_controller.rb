class SessionsController < ApplicationController


	 # def new
  #   if request.xhr?
  #     render "partials/_login", layout: false
  #   end
  # end

  def create
  	@user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to '/pages'
    else
      flash[:notice] = 'Invalid email/password'
      redirect_to '/'
    end
  end

  def destroy
    session.clear
    redirect_to '/'
  end

end
