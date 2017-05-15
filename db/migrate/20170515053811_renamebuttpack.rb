class Renamebuttpack < ActiveRecord::Migration[5.0]
  def change
  	rename_table :buttpacks, :packbutts
  end
end
