class CreatePackbotts < ActiveRecord::Migration[5.0]
  def change
    create_table :packbotts do |t|

      t.timestamps
    end
  end
end
