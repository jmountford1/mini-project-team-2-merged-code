require 'jwt'

class UsersController < ApplicationController
  before_action :authenticate_user, only: %i[update view]
  skip_before_action :authenticate_user, only: %i[login]

    def new
    end

    def test
      render plain: "This is a simple string response"
    end
  
    def login
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        token = encode_token(user.id, user.email)
        render json: { token: token, message: 'Logged in!' }, status: :ok
      else
        render json: { error: 'Invalid email or password.' }, status: :unauthorized
      end
    end
  
    def logout
      render json: { message: 'Logged out!' }, status: :ok
    end

    def create
      user_params = params.permit(:email, :username, :password)
  
      user = User.new(user_params)
  
      if user.save
        token = encode_token(user.id, user.email)
        render json: { message: 'User created successfully!', token: token, user: user }, status: :created
      else
        render json: { error: 'Failed to create user', details: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def view
      user_data = @current_user.as_json(except: [:created_at, :updated_at, :password_digest, :id])

      render json: { user: user_data }, status: :ok
    end

    def update
      user_params = params.permit(:email, :username, :password, :user)
      if @current_user.update(user_params)
        render json: { message: 'Profile Updated.', user: @current_user }, status: :ok
      else
        render json: { error: 'Failed to update user.', details: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private


    #placeholder - update later
    def encode_token(user_id, user_email)
      #encode JWT tokens
      JWT.encode({ LOGGED_IN: true, USER_ID: user_id, USER_EMAIL: user_email }, 'j1FnHqRPD2ZRr0hyg6r8SNAjPq5ZoxQy', 'HS256')
    end
    
    def authenticate_user
      auth_header = request.headers['Authorization']
      if auth_header
        token = auth_header.split(' ')[1]
        begin
          decoded_token = JWT.decode(token, 'j1FnHqRPD2ZRr0hyg6r8SNAjPq5ZoxQy', true, algorithm: 'HS256')
          user_id = decoded_token[0]['USER_ID']
          @current_user = User.find(user_id)
        rescue JWT::DecodeError => e
          Rails.logger.error "JWT DecodeError: #{e.message}"
          Rails.logger.error "Invalid token: #{token}"
          render json: { error: 'Invalid token. Please login again.' }, status: :unauthorized
        end
      else
        render json: { error: 'Token missing. Please login again.' }, status: :unauthorized
      end
    end
  

end
