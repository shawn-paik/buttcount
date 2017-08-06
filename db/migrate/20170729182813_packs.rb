class Packs < ActiveRecord::Migration[5.0]
  def change
  		create_table :packs do|t|
  		t.float				:price
  		t.integer 		:total
    	t.string			:brand
      t.references   :packable, polymorphic:true
    	t.timestamps
  	end
  end
end
