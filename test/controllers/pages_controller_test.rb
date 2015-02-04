require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get learningcenter" do
    get :learningcenter
    assert_response :success
  end

end
