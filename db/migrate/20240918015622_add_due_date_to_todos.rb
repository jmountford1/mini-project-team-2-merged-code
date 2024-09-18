class AddDueDateToTodos < ActiveRecord::Migration[7.2]
  def change
    add_column :todos, :due_date, :datetime
  end
end
