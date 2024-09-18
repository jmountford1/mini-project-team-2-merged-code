class Todo < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :priority, inclusion: { in: [0, 1, 2] }

  validates :user_id, presence: true

  
end
