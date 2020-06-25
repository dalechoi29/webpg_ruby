class OpinionsController < ApplicationController
  def index
   @opinions = Opinion.all
  end

  def show
   @opinion = Opinion.find(params[:id])
  end


  def create
  @opinion = Opinion.new(opinion_params)
  @opinion.save
  redirect_to @opinion
  end
  
  private
    def opinion_params
      params.require(:opinions).permit(:name, :email, "find-us", :newsletter, :comments)
    end
end
