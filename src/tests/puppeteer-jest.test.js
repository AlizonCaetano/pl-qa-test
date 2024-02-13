const puppeteer = require("puppeteer");
const robotHandle = require("../puppeteerFunctions");

describe("Create a new repository and take screenshot", () => {
  let page;
  let browser;

  beforeAll(async () => {
    const url = "https://github.com/";

    browser = await puppeteer.launch({ headless: false, slowMo: 10 });
    page = await browser.newPage();

    await page.setViewport({
      width: 1200,
      height: 768,
    });

    await page.goto(url);
  });

  afterAll(async () => {
    await browser.close();
  });

  it("should open Github and login account", async () => {
    const authLogin = await robotHandle.AuthLogin({ page });

    expect(authLogin).toBe(true);
  }, 120000);

  it("should open main menu element and go to repositories", async () => {
    const goToRepositories = await robotHandle.GoToRepositories({ page });

    expect(goToRepositories).toBe(true);
  }, 30000);

  it("should select a random repository and open this", async () => {
    const selectRandomRepository = await robotHandle.SelectRandomRepository({
      page,
    });

    expect(selectRandomRepository).toBe(true);
  }, 30000);

  it("should be create a new repository and take screenshot", async () => {
    const createRepository = await robotHandle.CreateRepository({ page });

    expect(createRepository).toBe(true);
  }, 120000);

  it("logout", async () => {
    const initiateLogout = await robotHandle.InitiateLogout({ page });

    expect(initiateLogout).toBe(true);
  }, 30000);
});
