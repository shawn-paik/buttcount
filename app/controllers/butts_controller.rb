class ButtsController < ApplicationController
	
	def create
		@butt = Butt.new(buttable_id: current_user.id, buttable_type: current_user.class.name)
		
		if @butt.save
		send_butts_list 
		# binding.pry
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
			render json: current_user.as_json(include: {butts: {methods:[:price, :created_at, :updated_at]}}, methods: [:butts_this_month, :butts_this_year, :butts_today]) 
		end

		def butt_params
			params.require(:butt).permit(:price)
		end

end
