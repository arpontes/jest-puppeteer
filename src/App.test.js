async function runTests(page) {
    await page.goto("http://localhost:3000");

    await page.evaluate(() => {
        (document.querySelectorAll(".App-logo") || []).forEach(el => el.remove());
    });

    let image = await page.screenshot();
    //Acabou de carregar
    expect(image).toMatchImageSnapshot();
}

describe("Medium Viewport", () => {
    it("Render loading", async () => {
        const page = await browser.newPage();
        await page.setViewport({ width: 1024, height: 768 });
        await runTests(page);
    });
});

describe("Small Viewport", () => {
    it("Render loading", async () => {
        const page = await browser.newPage();
        await page.setViewport({ width: 360, height: 640 }); // Galaxy S5
        await runTests(page);
    });
});
