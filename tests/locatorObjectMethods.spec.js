
import { test } from "@playwright/test";

test.describe("Test Group", () => {
    //Create a beforeEach
    test.beforeEach(async ({ page }) => {
      await page.goto("https://practice.cydeo.com/");
    });

  test("Check() method checks the radio buttons and checkboxs if they haven't been checked yet", async ({ page }) => {
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox1 = page.locator("#box1");
    
    await checkBox1.check();
    
  });

  test("Unchecked() method unchecks the radio buttons and checkboxs if they haven't been unchecked yet", async ({ page }) => {
    let checkboxesLink = page.locator("text='Checkboxes'");
    await checkboxesLink.click();

    let checkBox2 = page.locator("#box2");

    await checkBox2.uncheck();


  });

  test("selectOption() used for dropdowns", async ({ page }) => {
    page.locator("text='Dropdown'").click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");

    //Select by value
    // await simpleDropdown.selectOption("1");

    //Select by visible text
    // await simpleDropdown.selectOption({label: "Option 1"});

    //Select by index
    await simpleDropdown.selectOption({ index: 1 });

    // await page.waitForTimeout(3000);

  });

  //Create an empty test
  test("innerText() retrieves the visible text", async ({ page }) => {
    let headerElement = page.locator("//span[@class='h1y']");

    let actualText = await headerElement.innerText();

    console.log(actualText);

  });
  
  //Create a test
     test("inputValue(): Only works with <input>, <textare>, <select>", async ({ page }) => {

    let inputsLink = page.getByText("Inputs");

    // await inputsLink.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);

    await inputsLink.click();
    
    let inputBox = page.locator("//input[@type='number']");

    await inputBox.fill("123");

    let inputValue = await inputBox.inputValue();

    console.log(inputValue);
   });
  
  
  
});