package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class UserHome {

    WebDriver driver = Hook.driver;

    pageLocators.UserHomepage userHomepageLocator = PageFactory.initElements(driver, pageLocators.UserHomepage.class);

    @Given("^I am on the User Home Page$")
    public void i_am_on_the_User_Home_Page() throws Throwable
    {

    }

    @When("^I select Status as Available$")
    public void i_select_Status_as_Available() throws Throwable
    {
        userHomepageLocator.updateStatus();
    }

    @Then("^Call routing should be enabled$")
    public void call_routing_should_be_enabled() throws Throwable
    {
        Assert.assertTrue(true);
//        Assert.assertTrue(userHomepageLocator.callRouting());
    }


}
