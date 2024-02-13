const delay = require("../utils/delay");
const createRandomName = require("../utils/createRandomName");

const CreateRepository = async ({ page }) => {
  try {
    await page.goto("https://github.com/new");

    const newRepositoryName = createRandomName();
    const inputRepositoryNameElement = await page.waitForXPath(
      '//input[contains(@aria-label, "Repository")]'
    );

    await inputRepositoryNameElement.type(newRepositoryName);

    await delay(2000);

    const submitButtonRepository = await page.waitForXPath(
      '//form//button[contains(@type,"submit")]'
    );
    submitButtonRepository.click();

    await page.waitForNavigation({ waitUntil: "load" });
    await page.screenshot({ path: `./src/img/${newRepositoryName}.png` });

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = CreateRepository;
