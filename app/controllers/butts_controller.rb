class ButtsController < ApplicationController
	
	def create
		@butt = Butt.create(id: current_user.id) 

	end

	def destroy
		@butt = Butt.find(params(:id))
		@butt.destroy

	end

	private
		def butt_params
			params.require(:butt).permit(:price)
		end

end
