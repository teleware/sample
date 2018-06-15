package pageLocators;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Homepage {

    WebDriver driver;

    public Homepage(WebDriver driver)
    {
        this.driver = driver;
    }

    @FindBy(id = "txtUsername")
    private WebElement userName;

    @FindBy(id = "txtPassword")
    private WebElement passWord;

    @FindBy(id = "btn_login")
    private WebElement loginBtn;

    @FindBy(id = "txtUsername-error")
    private WebElement usernameErr;

    @FindBy(id = "txtPassword-error")
    private WebElement passwordErr;

    public void fillTheForm(String username, String password)
    {
        userName.sendKeys(username);

        passWord.sendKeys(password);

    }

    public boolean userNameErrMessage()
    {
        boolean result =false;

        if(usernameErr.isDisplayed())
        {
            result = true;
        }

        return result;
    }

    public boolean passwordErrMessage()
    {
        boolean result =false;

        if(passwordErr.isDisplayed())
        {
            result = true;
        }

        return result;
    }

    public void clickLogin()
    {
        loginBtn.click();
    }

}
