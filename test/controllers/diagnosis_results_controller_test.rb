require 'test_helper'

class DiagnosisResultsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get diagnosis_results_index_url
    assert_response :success
  end

  test "should get new" do
    get diagnosis_results_new_url
    assert_response :success
  end

  test "should get edit" do
    get diagnosis_results_edit_url
    assert_response :success
  end

end
