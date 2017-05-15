class Renamepackbutt < ActiveRecord::Migration[5.0]
  def change
  	rename_table :pack_butts, :buttpacks
  end
end
