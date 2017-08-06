class Butts < ActiveRecord::Migration[5.0]
  def change
  		create_table :butts do|t|
	  		t.float				:price
	  		t.integer 		:total
	    	t.boolean			:loosie
	    	t.boolean			:bummed
	    	t.references	:buttable, polymorphic: true
    		t.timestamps
  		end
  end
end
