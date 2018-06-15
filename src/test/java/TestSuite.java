import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
         features = "src/test/resources",
        // tags = {"@run1"},
         format = {"pretty", "html:target/Destination", "json:target/cucumber-report.json"})

public class TestSuite {

}
