class AddFbToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :fbid, :integer
  end
end
