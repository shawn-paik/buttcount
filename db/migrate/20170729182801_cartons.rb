class Cartons < ActiveRecord::Migration[5.0]
  def change
  	create_table :cartons do|t|
  		t.float					:price
  		t.integer 			:total
    	t.references		:user
    	t.timestamps
  	end
  end
end
