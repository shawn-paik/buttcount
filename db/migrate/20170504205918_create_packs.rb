class CreatePacks < ActiveRecord::Migration[5.0]
  def change
    create_table :packs do |t|
    	t.float			:price
    	t.references	:user, null: false
    	t.integer		:total, default => 20
    	t.boolean		:finished
    	t.string		:brand
      t.timestamps
    end
  end
end
