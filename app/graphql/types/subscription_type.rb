module Types
  class SubscriptionType < Types::BaseObject
    field :test_sub, String,
      null: false,
      description: "subscription test"

    def test_sub
      TestWorker.perform_async if initial_call?
    end

    private

      def initial_call?
        context.to_h.keys.exclude?(:subscription_id)
      end
  end
end
