Feature: verify homepage

  Background:

    Given I am on the loginpage


  Scenario Outline: verify Login with Invalid data

    When I enter "<Email>" and "<Password>"
    And I click login button
    Then I should see error message

    Examples:
      | Email    | Password    |
      |          |             |
      | 001-1240 |             |
      |          | Naveen123   |


  Scenario:  verify Login with valid data

    When I enter valid Email and Password
      | Email    | Password    |
      | 001-1240 | Naveen123   |
    And I click login button
    Then I should see user home page




