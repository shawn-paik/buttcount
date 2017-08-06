require_relative '../spec_helper'

describe User do
  describe 'associations' do
    before(:each) do
      @user = User.create!(email:"paik.shawn@gmail.com",password:"123456")
      @other_user = User.create!(email:"oddnorth@gmail.com",password:"123456")
      @pack = Pack.create!(packable_id:@user.id, packable_type: @user.class.name)
      @butt = Butt.create(buttable_id: @user.id, buttable_type: @user.class.name )
    end

    it "returns the user's packs" do
      expect(@user.packs).to match_array [@pack]
    end

    it "returns the user's butts" do
      expect(@user.butts).to match_array [@butt]
    end

  end
end