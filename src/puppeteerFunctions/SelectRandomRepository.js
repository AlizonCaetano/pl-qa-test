const delay = require("../utils/delay");

const SelectRandomRepository = async ({ page }) => {
  try {
    await page.waitForXPath('//a[contains(@itemprop, "codeRepository")]');

    const repositoriesListElements = await page.$x(
      '//a[contains(@itemprop, "codeRepository")]'
    );

    const arraySizeOfRepositoriesList = Number(repositoriesListElements.length);

    const sortedIndexOfRepositoryToGo = Math.floor(
      Math.random() * arraySizeOfRepositoriesList
    );

    const chosenRandomRepositoryToGo = `(//a[contains(@itemprop, "codeRepository")])[${sortedIndexOfRepositoryToGo}]`;

    const selectedRepository = await page.waitForXPath(
      chosenRandomRepositoryToGo
    );

    await selectedRepository.evaluate((btn) => btn.click());

    await page.waitForNavigation({ waitUntil: "load" });

    const pullRequestsOfRepositoryButton = await page.waitForXPath(
      '//a[contains(@data-selected-links, "pulls")]'
    );

    await pullRequestsOfRepositoryButton.click();

    await delay(2000);

    await page.waitForXPath('//a[contains(@href, "compare")]');

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = SelectRandomRepository;
