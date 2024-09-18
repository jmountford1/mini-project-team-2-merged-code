class UserMailer < ApplicationMailer
    default from: 'no-reply@ytodoappindustries.com'
  
    def welcome_email
      @user = params[:user]
      @login_url = 'http://localhost:3000/' # Replace with your actual login URL
      mail(to: @user.email, subject: 'Welcome to ToDo App!')
    end
  end