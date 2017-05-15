class CreatePacks < ActiveRecord::Migration[5.0]
  def change
    create_table :packs do |t|
    	t.string		:brand
    	t.float			:price
    	t.boolean		:finished
    	t.integer		:total, default: 20
    	t.references	:user, null: false
    	t.timestamps
    end
  end
end
