class TestWorker
  include Sidekiq::Worker

  def perform
  end
end
