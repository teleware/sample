$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/home.feature");
formatter.feature({
  "line": 1,
  "name": "verify homepage",
  "description": "",
  "id": "verify-homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "verify Login with Invalid data",
  "description": "",
  "id": "verify-homepage;verify-login-with-invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I enter \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "verify-homepage;verify-login-with-invalid-data;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 15,
      "id": "verify-homepage;verify-login-with-invalid-data;;1"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 16,
      "id": "verify-homepage;verify-login-with-invalid-data;;2"
    },
    {
      "cells": [
        "001-1240",
        ""
      ],
      "line": 17,
      "id": "verify-homepage;verify-login-with-invalid-data;;3"
    },
    {
      "cells": [
        "",
        "Naveen123"
      ],
      "line": 18,
      "id": "verify-homepage;verify-login-with-invalid-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4160749619,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.i_am_on_the_loginpage()"
});
formatter.result({
  "duration": 568565271,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "verify Login with Invalid data",
  "description": "",
  "id": "verify-homepage;verify-login-with-invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I enter \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "Home.i_enter_and(String,String)"
});
formatter.result({
  "duration": 94308564,
  "status": "passed"
});
formatter.match({
  "location": "Home.i_click_login_button()"
});
formatter.result({
  "duration": 70216142,
  "status": "passed"
});
formatter.match({
  "location": "Home.i_should_see_error_message()"
});
formatter.result({
  "duration": 81476848,
  "status": "passed"
});
formatter.after({
  "duration": 752569297,
  "status": "passed"
});
formatter.before({
  "duration": 3283272859,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.i_am_on_the_loginpage()"
});
formatter.result({
  "duration": 434296675,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verify Login with Invalid data",
  "description": "",
  "id": "verify-homepage;verify-login-with-invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I enter \"001-1240\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "001-1240",
      "offset": 9
    },
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "Home.i_enter_and(String,String)"
});
formatter.result({
  "duration": 119563925,
  "status": "passed"
});
formatter.match({
  "location": "Home.i_click_login_button()"
});
formatter.result({
  "duration": 69193236,
  "status": "passed"
});
formatter.match({
  "location": "Home.i_should_see_error_message()"
});
formatter.result({
  "duration": 30910696,
  "status": "passed"
});
formatter.after({
  "duration": 721519661,
  "status": "passed"
});
formatter.before({
  "duration": 3300884330,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.i_am_on_the_loginpage()"
});
formatter.result({
  "duration": 479500327,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify Login with Invalid data",
  "description": "",
  "id": "verify-homepage;verify-login-with-invalid-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I enter \"\" and \"Naveen123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "Naveen123",
      "offset": 16
    }
  ],
  "location": "Home.i_enter_and(String,String)"
});
formatter.result({
  "duration": 113543919,
  "status": "passed"
});
formatter.match({
  "location": "Home.i_click_login_button()"
});
formatter.result({
  "duration": 71182522,
  "status": "passed"
});
formatter.match({
  "location": "Home.i_should_see_error_message()"
});
formatter.result({
  "duration": 32826318,
  "status": "passed"
});
formatter.after({
  "duration": 713692340,
  "status": "passed"
});
formatter.before({
  "duration": 3284286647,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "Home.i_am_on_the_loginpage()"
});
formatter.result({
  "duration": 427298254,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify Login with valid data",
  "description": "",
  "id": "verify-homepage;verify-login-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I enter valid Email and Password",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 24
    },
    {
      "cells": [
        "001-1240",
        "Naveen123"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see user home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Home.i_enter_valid_Email_and_Password(DataTable)"
});
formatter.result({
  "duration": 138948796,
  "status": "passed"
});
formatter.match({
  "location": "Home.i_click_login_button()"
});
formatter.result({
  "duration": 66498675,
  "status": "passed"
});
formatter.match({
  "location": "Home.i_should_see_user_home_page()"
});
formatter.result({
  "duration": 2142813,
  "status": "passed"
});
formatter.after({
  "duration": 809210157,
  "status": "passed"
});
});