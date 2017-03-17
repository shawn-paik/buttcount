class ButtsController < ApplicationController
	
	def create
		@butt = Butt.new(user_id: current_user.id)
		
		if @butt.save
		send_butts_list 
		else
		flash[:alert] = "Error creating butt"
		end

	end

	def destroy
		@butt = Butt.find(params[:id])
		@butt.destroy
		send_butts_list

	end



	private
		def send_butts_list
			render json: current_user.as_json(include: {butts: {methods:[:price, :created_at, :updated_at]}}) 
		end

		def butt_params
			params.require(:butt).permit(:price)
		end

end
