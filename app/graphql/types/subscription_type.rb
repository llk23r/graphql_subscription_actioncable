module Types
  class SubscriptionType < Types::BaseObject
    field :testSub, String,
      null: false,
      description: "subscription test"

    def test_sub()
      Time.now.to_i
    end
  end
end
