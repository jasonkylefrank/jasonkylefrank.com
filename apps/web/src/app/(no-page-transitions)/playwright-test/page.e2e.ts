import { test, expect, Page } from "@playwright/test";

const baseURL = "http://localhost:3000";
const playwriteTestPageRoute = `${baseURL}/playwright-test`;

test("has title", async ({ page }) => {
  //await page.goto("https://playwright.dev/");
  await page.goto(playwriteTestPageRoute);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright test/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  // await page.getByRole("link", { name: "Get started" }).click();
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

async function toggleDetails(page: Page) {
  await page.getByTestId("expand-details-icon").click();
}

test("expand icon expands and collapses details", async ({ page }) => {
  await page.goto(playwriteTestPageRoute);

  const detailsPanel = page.getByTestId("details-panel");

  const expectDetailsPanelScaleY = async (scaleY = 0) => {
    await expect(detailsPanel).toHaveCSS(
      "transform",
      `matrix(1, 0, 0, ${scaleY}, 0, 0)`
    );
  };

  await expectDetailsPanelScaleY(0);

  await toggleDetails(page);

  await expectDetailsPanelScaleY(1);

  await toggleDetails(page);

  await expectDetailsPanelScaleY(0);
});

test("Nested hidden text is visible after being revealed", async ({ page }) => {
  await page.goto(playwriteTestPageRoute);
  const nestedTextEl = page.getByText("This is nested hidden text");

  await expect(nestedTextEl).toHaveCSS("opacity", "0");

  await toggleDetails(page);

  await page.getByTestId("show-nested-text-icon").click();

  await expect(nestedTextEl).toBeVisible();
  await expect(nestedTextEl).toHaveCSS("opacity", "1");

  await expect(page).toHaveScreenshot("Hidden text becomes visible.png", {
    fullPage: true,
  });
});

test("Nested hidden text becomes visible (details text ignored)", async ({
  page,
}) => {
  await page.goto(playwriteTestPageRoute);
  const nestedTextEl = page.getByText("This is nested hidden text");

  await expect(nestedTextEl).toHaveCSS("opacity", "0");

  await toggleDetails(page);

  await page.getByTestId("show-nested-text-icon").click();

  await expect(nestedTextEl).toBeVisible();
  await expect(nestedTextEl).toHaveCSS("opacity", "1");

  await expect(page).toHaveScreenshot(
    "Hidden text becomes visible (details text ignored).png",
    {
      fullPage: true,
      mask: [page.getByTestId("details-panel-placeholder-text")],
    }
  );
});
