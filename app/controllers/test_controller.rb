class TestController < ApplicationController
  layout "test"

  def index
    @test_props = { name: "Stranger" }
  end
end
