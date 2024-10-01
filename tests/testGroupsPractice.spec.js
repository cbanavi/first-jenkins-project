import { test } from '@playwright/test';

test.describe("@smoke Test Group1", () => {

  test.beforeEach(async({page}) => {
    await page.goto("https://practice.cydeo.com/");
  });


  test("@lib01 Getting the title of the page", async ({ page }) => {
    //Log URL
    console.log(await page.title());
  });

  test("Getting the current URL of the page", async ({ page }) => {
    //get url
    console.log(page.url());
  });

  test("Set the window size", async ({ page }) => {
    await page.setViewportSize({ width: 1850, height: 1080 });

    await page.goto("https://practice.cydeo.com/");

  });

});
