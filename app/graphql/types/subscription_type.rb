module Types
  class SubscriptionType < Types::BaseObject
    field :test_sub, String,
      null: false,
      description: "subscription test"

    def test_sub()
    end
  end
end
