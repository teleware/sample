package config;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class ConfigReader{

    public static Properties pro;

    static
    {

        try {

              File src = new File("src/main/resources/Config.property");

              FileInputStream fin = new FileInputStream(src);

              pro = new Properties();

              pro.load(fin);

            }

            catch (Exception e)
            {
              e.printStackTrace();
            }


    }

    public static String getUrl()
    {
        return pro.getProperty("URL");
    }

    public static String getDriver()
    {
        return pro.getProperty("Driver");
    }

}

