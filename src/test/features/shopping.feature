Feature: Shopping on Automation Exercise

  Background: Precondition
    Given I navigate to "https://automationexercise.com/"
    When I go to the Products section
    And I choose the third product and view its details
    And I enter a random quantity and add the product to the cart
    And I proceed to checkout
    Then I should see the Register/Login modal

  Scenario: Purchase a product as a new user
    Given I click to Register/Login button
    When I register a new user with random details
    And I confirm the order
    Then I log out successfully
