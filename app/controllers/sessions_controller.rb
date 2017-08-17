class SessionsController < ApplicationController
	 def new
    if request.xhr?
      render "partials/_login", layout: false
    end
  end

  def create
  		binding.pry
  	@user = User.find_by(email: params[:email])

   
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to '/pages'
    else
      @errors = ['Invalid email/password']
      render "/"
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end

end
