class ContactsController < ApplicationController
  def index
    render json: [
      { id: 1, name: 'Ryder King', email: 'ryder.king@fsstudio.com' },
      { id: 2, name: 'Daniel Havelka', email: 'daniel707@yahoo.com' },
      { id: 3, name: 'Budai Benedek', email: 'budai.sport@gmail.com' },
      { id: 4, name: 'Ingvar Kristmundsson', email: 'webdev677@hotmail.com' },
      { id: 5, name: 'Gobind Dayal', email: 'gobind@ainsoft.com' }
      ], status: :ok
  end
end
