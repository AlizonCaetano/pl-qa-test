const delay = require("../utils/delay");

const SelectRandomRepository = async ({ page }) => {
  try {
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

    return true;
  } catch (error) {
    return console.log(error);
  }
};

module.exports = SelectRandomRepository;
