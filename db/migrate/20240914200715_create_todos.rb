class CreateTodos < ActiveRecord::Migration[7.2]
  def change
    create_table :todos do |t|
      t.string :title
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.integer :priority
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
