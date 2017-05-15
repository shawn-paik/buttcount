class CreateButts < ActiveRecord::Migration[5.0]
  def change
    create_table :butts do |t|
    	t.boolean	:bummed
    	t.boolean	:loosie
    	t.float		:price
    	t.references :user
    	t.timestamps
    end
  end
end
