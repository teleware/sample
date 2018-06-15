package stepDefinitions;

import config.ConfigReader;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hook {


    public static WebDriver driver;

    @Before
    public void setUp()
    {
        System.setProperty("webdriver.chrome.driver", ConfigReader.getDriver());

        driver = new ChromeDriver();

        driver.manage().window().maximize();


    }


    @After
    public void shutDown()
    {
        driver.quit();
    }


}

