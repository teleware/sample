package pageLocators;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class UserHomepage {

    WebDriver driver;

    public UserHomepage(WebDriver driver)
    {
        this.driver = driver;

    }

    @FindBy(id = "Registration_PhoneNumberTextBox")
    private WebElement userName;

    @FindBy(id = "Registration_StatusCombo")
    private WebElement statusCombo;

    @FindBy(id = "Registration_CallRoutingCombo")
    private WebElement callRouteCombo;

    @FindBy(id = "Registration_PhoneNumberTextBox")
    private WebElement phoneNum;

    @FindBy(id = "Registration_FaxNumberTextBox")
    private WebElement faxNum;

    @FindBy(id = "Registration_Toolbar_SaveButton")
    private WebElement saveButton;

    @FindBy(id= "Registration_StatusHeadingLabel")
    private WebElement statusTag;


    public void updateStatus()
    {

        Select drpStatus = new Select(statusCombo);
        drpStatus.selectByVisibleText("Available");


    }

    public boolean callRouting()
    {
        return callRouteCombo.isDisplayed();

    }





}
