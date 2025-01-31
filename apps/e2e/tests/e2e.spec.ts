import {test, expect} from '@playwright/test';

const BACKEND_URL =  'http://localhost:3000';
const FRONTEND_URL = 'http://localhost:3001';

test.describe('E2E Test - Fetch User Delivery', () => {
  test('Should fetch and display user delivery data', async ({page, request}) => {
    const VALID_USER_ID = `ff535484-6880-4653-b06e-89983ecf4ed5`;
    const response = await request.get(`${BACKEND_URL}/comms/your-next-delivery/${VALID_USER_ID}`);
    expect(response.status()).toBe(200);

    const deliveryData = await response.json();
    await page.goto(`${FRONTEND_URL}/welcome/${VALID_USER_ID}`);

    await expect(page.getByText(deliveryData.title)).toBeVisible();
    await expect(page.getByText(deliveryData.message)).toBeVisible();
    await expect(page.getByText(`£${deliveryData.totalPrice.toFixed(2)}`)).toBeVisible();

    if (deliveryData.freeGift) {
      await expect(page.getByText('FREE GIFT')).toBeVisible();
    }
  });

  test('Should show page not found for invalid uuid', async ({page, request}) => {
    await page.goto(`${FRONTEND_URL}/welcome/not-a-uuid`);

    await expect(page.getByText('Meowch...The page you\'re looking for doesn\'t exist.')).toBeVisible();
  });


  test('Return 404 for uuid of nonexistent user', async ({page, request}) => {
    const NON_EXISTENT_USER_ID = `ff535484-6880-4653-b06e-89983ecf4ed6`;
    const response = await request.get(`${BACKEND_URL}/comms/your-next-delivery/${NON_EXISTENT_USER_ID}`);
      expect(response.status()).toBe(404);

      await page.goto(`${FRONTEND_URL}/welcome/${NON_EXISTENT_USER_ID}`);
      await expect(page.getByText('Meowch...The page you\'re looking for doesn\'t exist.')).toBeVisible();
  });
});
