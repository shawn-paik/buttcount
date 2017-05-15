class CreatePackButts < ActiveRecord::Migration[5.0]
  def change
    create_table :pack_butts do |t|
    	t.boolean		:last_cig
    	t.references	:pack, null: false
    	t.timestamps
    end
  end
end
