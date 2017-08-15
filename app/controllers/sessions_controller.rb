class SessionsController < ApplicationController
	 def new
    if request.xhr?
      render "partials/_login", layout: false
    end
  end

  def create
    @parent = Parent.find_by(username: params[:user][:username])
    @child = Child.find_by(username: params[:user][:username])
    if @parent && @parent.authenticate(params[:user][:password])
      session[:parent_id] = @parent.id
      redirect_to pages_path
    elsif @child && @child.authenticate(params[:user][:password])
      session[:child_id] = @child.id
      
      redirect_to pages_path
    else
      @errors = ['Invalid email/password']
      render "/sessions/new"
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end

end
