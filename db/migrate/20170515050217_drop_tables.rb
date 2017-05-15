class DropTables < ActiveRecord::Migration[5.0]
  def change
  	drop_table :butts
  	drop_table :packs
  end
end
