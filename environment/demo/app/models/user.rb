class User < ApplicationRecord
    #  attr_accessible :email, :name, :password, :password_confirmation
     has_secure_password
end
