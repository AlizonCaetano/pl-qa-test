const delay = require("../utils/delay");

const InitiateLogout = async ({ page }) => {
  try {
    await page
      .waitForXPath('//button[contains(@aria-label, "user")]')
      .then((btn) => btn.click());

    const logoutButton = await page.waitForXPath(
      '//a[contains(@data-analytics-event,"LOGOUT")]',
      {
        visible: true,
      }
    );

    await logoutButton.evaluate((btn) => btn.click());

    const confirmLogoutButton = await page.waitForXPath(
      '(//input[@type="submit"])[1]',
      { visible: true }
    );

    await confirmLogoutButton.click();

    await page.waitForNavigation({ waitUntil: "load" });

    let logoutForm;

    try {
      logoutForm = await page.waitForXPath(
        '//div[contains(@class, "auth-form-header")]',
        { timeout: 2000 }
      );
    } catch {}

    if (logoutForm) {
      (async (page, logoutForm) => {
        let tryCount = 0;
        let warningIsVisible = true;

        do {
          let cathElement;

          try {
            cathElement = await page.waitForXPath(logoutForm, {
              timeout: 2000,
            });
          } catch {}

          await delay(2000);
          tryCount++;
        } while (warningIsVisible && tryCount <= 60);

        if (tryCount >= 60) {
          throw new Error(`Logout not sucessful`);
        }
      })();
    }

    return true;
  } catch (error) {
    return console.log(error);
  }
};

module.exports = InitiateLogout;
