require("dotenv").config();
const username = process.env.GITHUB_USER_FULLNAME;

const GoToRepositories = async ({ page }) => {
  try {
    await page
      .waitForXPath('//button[contains(@aria-label, "user")]')
      .then((btn) => btn.click());

    const userRepositoriesLinkButton = await page.waitForXPath(
      '//a[contains(@href, "?tab=repositories")]',
      {
        visible: true,
      }
    );

    await userRepositoriesLinkButton.click();

    await page.waitForNavigation({ waitUntil: "load" });

    const userNameInProfileInfos = await page.waitForXPath(
      '//span[contains(@class, "fullname")]'
    );

    const userNameInProfileInfosText = await userNameInProfileInfos.evaluate(
      (el) => el.textContent.trim()
    );

    if (userNameInProfileInfosText !== username) {
      throw new Error("The username doesn't matches with credentials.");
    }

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = GoToRepositories;
