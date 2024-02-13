const delay = require("../utils/delay");

require("dotenv").config();
const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

const AuthLogin = async ({ page }) => {
  try {
    const homeLoginButton = await page.waitForXPath('(//a[@href="/login"])[1]');
    await homeLoginButton.evaluate((btn) => btn.click());

    const signInputName = await page.waitForXPath("//input[@id='login_field']");
    await signInputName.type(email);

    const signInputPassword = await page.waitForXPath(
      "//input[@id='password']"
    );
    await signInputPassword.type(pass);

    const signInButtonSubmit = await page.waitForXPath(
      '//input[@type="submit"]'
    );

    await signInButtonSubmit.click();

    await page.waitForNavigation({ waitUntil: "load" });

    let twoFactorElement = null;

    try {
      twoFactorElement = await page.waitForXPath(
        '//input[contains(@aria-describedby, "verify-device")]|//div[contains(@class, "two-factor")]',
        { timeout: 5000 }
      );
    } catch {}

    if (twoFactorElement) {
      let tryCount = 0;
      let warningIsVisible = true;

      do {
        let cathElement = null;

        try {
          cathElement = await page.waitForXPath(twoFactorElement, {
            timeout: 2000,
          });
        } catch {}

        if (!cathElement) {
          warningIsVisible = false;
        }

        await delay(2000);
        tryCount++;
      } while (warningIsVisible && tryCount < 60);

      if (tryCount >= 60) {
        throw new Error("Manual token not typed.");
      }
    }

    const localUrl = await page.url();
    console.log(localUrl);
    if (localUrl !== "https://github.com/") {
      throw new Error("Login not sucessful");
    }

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = AuthLogin;
