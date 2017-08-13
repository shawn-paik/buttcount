class ChangeDataForFbid < ActiveRecord::Migration[5.0]
  def change
		change_column :users, :fbid, :int8, :limit => 8
  end
end
