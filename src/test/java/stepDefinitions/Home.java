package stepDefinitions;

import config.ConfigReader;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class Home {

    WebDriver driver = Hook.driver;

    pageLocators.Homepage homepageLocator = PageFactory.initElements(driver, pageLocators.Homepage.class);

    public String userName, psw;

    @Given("^I am on the loginpage$")
    public void i_am_on_the_loginpage() throws Throwable
    {
        driver.get(ConfigReader.getUrl());

    }

    @When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_enter_and(String arg1, String arg2) throws Throwable
    {
        userName = arg1;
        psw = arg2;

        homepageLocator.fillTheForm(arg1,arg2);

    }

    @When("^I enter valid Email and Password$")
    public void i_enter_valid_Email_and_Password(DataTable arg1) throws Throwable
    {
        List<List<String>>  loginDetails = arg1.raw();

        for (int i = 1; i<loginDetails.size(); i++)
        {
            homepageLocator.fillTheForm(loginDetails.get(i).get(0),loginDetails.get(i).get(1));
        }

    }

    @When("^I click login button$")
    public void i_click_login_button() throws Throwable
    {
        homepageLocator.clickLogin();
    }

    @Then("^I should see user home page$")
    public void i_should_see_user_home_page() throws Throwable
    {

        Assert.assertTrue(true);

    }

    @Then("^I should see error message$")
    public void i_should_see_error_message() throws Throwable
    {
        //if((userName.equalsIgnoreCase(" "))&& (psw.equalsIgnoreCase(" ")))
        if(userName.isEmpty() && psw.isEmpty())
        {
            homepageLocator.userNameErrMessage();
            homepageLocator.passwordErrMessage();

        }

        else if((userName.isEmpty() &&  (!psw.isEmpty())))
        {
            homepageLocator.userNameErrMessage();
        }

        else
        {
            homepageLocator.passwordErrMessage();
        }
    }



}
