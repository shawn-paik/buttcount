class AddFbUsers < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :fb, :boolean
  end
end
