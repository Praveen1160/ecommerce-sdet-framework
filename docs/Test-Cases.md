# Manual Test Cases – SauceDemo E-Commerce Application

**Application:** https://www.saucedemo.com/  
Username `standard_user` 
Password `secret_sauce` 


# 1. Login and Authentication Test Cases

## TC-LOGIN-001: Verify login with valid credentials

**Requirement ID:** REQ-001  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. SauceDemo application is accessible.
2. User is on the login page.
3. A valid user account is available.

**Test Data:**
- Username: `standard_user`
- Password: `secret_sauce`

**Steps:**
1. Open https://www.saucedemo.com/.
2. Enter `standard_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click the Login button.
5. Observe the resulting page.

**Expected Result:**
- User should be successfully authenticated.
- User should be redirected to the inventory page.
- Product inventory should be displayed.
- No login error should appear.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-LOGIN-002: Verify login with an invalid username

**Requirement ID:** REQ-002  
**Test Type:** Negative  
**Priority:** P1

**Preconditions:**
1. SauceDemo application is accessible.
2. User is on the login page.

**Test Data:**
- Username: `invalid_user`
- Password: `secret_sauce`

**Steps:**
1. Open the SauceDemo login page.
2. Enter `invalid_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click Login.
5. Observe the error message.

**Expected Result:**
- User should not be authenticated.
- User should remain on the login page.
- An appropriate authentication error message should be displayed.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-LOGIN-003: Verify login with an invalid password

**Requirement ID:** REQ-002  
**Test Type:** Negative  
**Priority:** P1

**Preconditions:**
1. SauceDemo application is accessible.
2. User is on the login page.

**Test Data:**
- Username: `standard_user`
- Password: `wrong_password`

**Steps:**
1. Open the SauceDemo login page.
2. Enter `standard_user` in the Username field.
3. Enter `wrong_password` in the Password field.
4. Click Login.
5. Observe the application response.

**Expected Result:**
- User should not be authenticated.
- User should remain on the login page.
- An appropriate authentication error should be displayed.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-LOGIN-004: Verify login with empty username and password

**Requirement ID:** REQ-002  
**Test Type:** Negative / Boundary  
**Priority:** P1

**Preconditions:**
1. SauceDemo application is accessible.
2. User is on the login page.

**Test Data:**
- Username: Empty
- Password: Empty

**Steps:**
1. Open the SauceDemo login page.
2. Leave the Username field empty.
3. Leave the Password field empty.
4. Click Login.
5. Observe the validation message.

**Expected Result:**
- Login should not be successful.
- The application should display an appropriate validation message indicating that required credentials are missing.
- User should remain on the login page.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-LOGIN-005: Verify login with a locked-out user account

**Requirement ID:** REQ-003  
**Test Type:** Negative  
**Priority:** P1

**Preconditions:**
1. SauceDemo application is accessible.
2. User is on the login page.
3. Locked-out test credentials are available.

**Test Data:**
- Username: `locked_out_user`
- Password: `secret_sauce`

**Steps:**
1. Open the SauceDemo login page.
2. Enter `locked_out_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click Login.
5. Observe the application response.

**Expected Result:**
- User should not be allowed to log in.
- An appropriate locked-account error message should be displayed.
- User should remain on the login page.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-LOGIN-006: Verify that the password field masks entered characters

**Requirement ID:** REQ-002  
**Test Type:** Positive / UI  
**Priority:** P3

**Preconditions:**
1. SauceDemo application is accessible.
2. User is on the login page.

**Test Data:**
- Password: `secret_sauce`

**Steps:**
1. Open the SauceDemo login page.
2. Click the Password field.
3. Enter `secret_sauce`.
4. Observe the characters displayed in the field.
5. Clear the field and enter the password again if needed.

**Expected Result:**
- Password characters should be masked rather than displayed as readable text.
- The password should still be accepted when valid credentials are submitted.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-LOGIN-007: Verify that an unauthenticated user cannot access the inventory page directly

**Requirement ID:** REQ-014  
**Test Type:** Negative / Security  
**Priority:** P1

**Preconditions:**
1. SauceDemo application is accessible.
2. User is logged out.
3. A fresh browser session or private browsing window is available.

**Test Data:**
- Inventory URL: `https://www.saucedemo.com/inventory.html`

**Steps:**
1. Open a fresh browser session.
2. Ensure that the user is not logged in.
3. Enter the inventory URL directly in the browser address bar.
4. Press Enter.
5. Observe the resulting page and URL.

**Expected Result:**
- Unauthenticated users should not be able to access protected inventory content.
- The application should redirect the user to the login page or display an appropriate access restriction.
- Protected product information should not be accessible.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

# 2. Product Listing and Sorting Test Cases

## TC-PROD-001: Verify that the inventory page displays products after successful login

**Requirement ID:** REQ-004  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. SauceDemo application is accessible.
2. User has valid login credentials.

**Test Data:**
- Username: `standard_user`
- Password: `secret_sauce`

**Steps:**
1. Open the SauceDemo login page.
2. Log in using valid credentials.
3. Wait for the inventory page to load.
4. Observe the product listing.
5. Verify the product names, prices and images.
6. Verify that each displayed product has an available product action.

**Expected Result:**
- Inventory page should load successfully.
- Products should be displayed.
- Product names and prices should be visible.
- Product images should load.
- Product actions such as Add to cart should be available.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-PROD-002: Verify product sorting by name in ascending order

**Requirement ID:** REQ-006  
**Test Type:** Positive  
**Priority:** P2

**Preconditions:**
1. User is logged in as `standard_user`.
2. Inventory page is displayed.
3. Multiple products are available.

**Test Data:**
- Sorting option: Name (A to Z)

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Locate the product sorting dropdown.
4. Select Name (A to Z).
5. Observe the product names displayed.
6. Compare the displayed order alphabetically.

**Expected Result:**
- Products should be arranged alphabetically by name in ascending order.
- The first product should have the alphabetically earliest name.
- The last product should have the alphabetically latest name.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-PROD-003: Verify product sorting by name in descending order

**Requirement ID:** REQ-006  
**Test Type:** Positive  
**Priority:** P2

**Preconditions:**
1. User is logged in as `standard_user`.
2. Inventory page is displayed.
3. Multiple products are available.

**Test Data:**
- Sorting option: Name (Z to A)

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Locate the product sorting dropdown.
4. Select Name (Z to A).
5. Observe the product names displayed.
6. Compare the displayed order alphabetically in reverse.

**Expected Result:**
- Products should be arranged alphabetically in descending order.
- The first product should have the alphabetically latest name.
- The last product should have the alphabetically earliest name.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-PROD-004: Verify product sorting by price in ascending order

**Requirement ID:** REQ-005  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. Inventory page is displayed.
3. Multiple products with different prices are available.

**Test Data:**
- Sorting option: Price (low to high)

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Locate the product sorting dropdown.
4. Select Price (low to high).
5. Observe the displayed product prices.
6. Compare consecutive product prices from top to bottom.

**Expected Result:**
- Products should be sorted by price in ascending order.
- Each product price should be greater than or equal to the previous product price.
- The lowest-priced product should appear first.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-PROD-005: Verify product sorting by price in descending order

**Requirement ID:** REQ-005  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. Inventory page is displayed.
3. Multiple products with different prices are available.

**Test Data:**
- Sorting option: Price (high to low)

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Locate the product sorting dropdown.
4. Select Price (high to low).
5. Observe the displayed product prices.
6. Compare consecutive product prices from top to bottom.

**Expected Result:**
- Products should be sorted by price in descending order.
- Each product price should be less than or equal to the previous product price.
- The highest-priced product should appear first.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-PROD-006: Verify product details on the product detail page

**Requirement ID:** REQ-004  
**Test Type:** Positive  
**Priority:** P2

**Preconditions:**
1. User is logged in as `standard_user`.
2. Inventory page is displayed.
3. At least one product is available.

**Test Data:**
- Product: Any product displayed in inventory.

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Select a product by clicking its name or image.
4. Observe the product detail page.
5. Verify the product name.
6. Verify the product description.
7. Verify the product price.
8. Verify the product image.
9. Navigate back to the inventory page.

**Expected Result:**
- The selected product detail page should open.
- Product name should match the selected inventory item.
- Product description should be displayed.
- Product price should match the inventory price.
- Product image should correspond to the selected product.
- User should be able to navigate back to inventory.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

# 3. Shopping Cart Test Cases

## TC-CART-001: Verify adding one product to the shopping cart

**Requirement ID:** REQ-007, REQ-009  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. Inventory page is displayed.
3. Shopping cart is initially empty.

**Test Data:**
- Product: Any available product.

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Select an available product.
4. Click Add to cart.
5. Observe the product button.
6. Observe the shopping cart badge.
7. Click the cart icon.
8. Verify the selected product is displayed.

**Expected Result:**
- Selected product should be added to the cart.
- Product action should change to Remove where applicable.
- Cart badge should display 1.
- Selected product should be visible on the cart page.
- Product name and price should match the inventory listing.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CART-002: Verify adding multiple products to the shopping cart

**Requirement ID:** REQ-007, REQ-009  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. Inventory page is displayed.
3. Shopping cart is initially empty.

**Test Data:**
- Product 1: Sauce Labs Backpack
- Product 2: Sauce Labs Bike Light

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Locate Sauce Labs Backpack.
4. Click Add to cart.
5. Locate Sauce Labs Bike Light.
6. Click Add to cart.
7. Observe the cart badge.
8. Click the cart icon.
9. Verify both products are displayed.

**Expected Result:**
- Both selected products should be added to the cart.
- Cart badge should display 2.
- Both products should be displayed on the cart page.
- Product names and prices should be correct.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CART-003: Verify removing a product from the inventory page

**Requirement ID:** REQ-008  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. Inventory page is displayed.
3. At least one product is available.

**Test Data:**
- Product: Sauce Labs Backpack.

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Locate Sauce Labs Backpack.
4. Click Add to cart.
5. Verify the cart badge displays 1.
6. Click Remove for Sauce Labs Backpack.
7. Observe the cart badge.
8. Open the cart page.
9. Verify that Sauce Labs Backpack is no longer displayed.

**Expected Result:**
- Product should be removed from the shopping cart.
- Cart badge should update accordingly or disappear when the cart becomes empty.
- Removed product should not be displayed in the cart.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CART-004: Verify shopping cart contents

**Requirement ID:** REQ-009  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. Inventory page is displayed.
3. Shopping cart is initially empty.

**Test Data:**
- Sauce Labs Backpack.
- Sauce Labs Bike Light.

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Add Sauce Labs Backpack to the cart.
4. Add Sauce Labs Bike Light to the cart.
5. Click the shopping cart icon.
6. Verify the products displayed.
7. Verify each product name.
8. Verify each product price.
9. Verify the displayed item quantities.

**Expected Result:**
- Cart should contain the two selected products.
- Product names should match the selected products.
- Prices should match the inventory prices.
- Each selected product should have the expected quantity.
- No additional products should appear.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CART-005: Verify removing a product from the cart page

**Requirement ID:** REQ-008  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. At least two products have been added to the cart.
3. Cart page is displayed.

**Test Data:**
- Sauce Labs Backpack.
- Sauce Labs Bike Light.

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Add Sauce Labs Backpack to the cart.
4. Add Sauce Labs Bike Light to the cart.
5. Open the cart page.
6. Locate Sauce Labs Backpack.
7. Click Remove for Sauce Labs Backpack.
8. Observe the cart contents.
9. Verify Sauce Labs Bike Light is still present.

**Expected Result:**
- Sauce Labs Backpack should be removed.
- Sauce Labs Bike Light should remain in the cart.
- Cart badge should reflect the remaining item count.
- No unintended product should be removed.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CART-006: Verify shopping cart when all products are removed

**Requirement ID:** REQ-008  
**Test Type:** Negative / Edge Case  
**Priority:** P2

**Preconditions:**
1. User is logged in as `standard_user`.
2. At least two products have been added to the cart.
3. Cart page is displayed.

**Test Data:**
- Sauce Labs Backpack.
- Sauce Labs Bike Light.

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Add Sauce Labs Backpack to the cart.
4. Add Sauce Labs Bike Light to the cart.
5. Open the cart page.
6. Click Remove for Sauce Labs Backpack.
7. Click Remove for Sauce Labs Bike Light.
8. Observe the cart page.
9. Observe the cart badge.

**Expected Result:**
- No products should remain in the cart.
- Cart badge should disappear or display an empty-cart count as designed.
- Cart page should not display the removed products.
- User should be able to continue shopping.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

# 4. Checkout Test Cases

## TC-CHECK-001: Verify successful simulated checkout with valid customer information

**Requirement ID:** REQ-010, REQ-011, REQ-012  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. At least one product is added to the cart.
3. Cart page is accessible.

**Test Data:**
- First Name: John
- Last Name: Smith
- Postal Code: A1A 1A1

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Add Sauce Labs Backpack to the cart.
4. Open the shopping cart.
5. Verify the selected product is displayed.
6. Click Checkout.
7. Enter `John` in the First Name field.
8. Enter `Smith` in the Last Name field.
9. Enter `A1A 1A1` in the Postal Code field.
10. Click Continue.
11. Observe the order overview page.

**Expected Result:**
- Customer information should be accepted.
- User should be redirected to the order overview page.
- Selected products should be displayed.
- Product prices and displayed totals should be correct.
- User should be able to proceed to the simulated order completion step.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CHECK-002: Verify checkout validation with all customer information fields empty

**Requirement ID:** REQ-010  
**Test Type:** Negative / Boundary  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. At least one product is added to the cart.
3. User has navigated to the checkout information page.

**Test Data:**
- First Name: Empty
- Last Name: Empty
- Postal Code: Empty

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Add a product to the cart.
4. Open the cart page.
5. Click Checkout.
6. Leave the First Name field empty.
7. Leave the Last Name field empty.
8. Leave the Postal Code field empty.
9. Click Continue.
10. Observe the validation message.

**Expected Result:**
- User should not proceed to the order overview page.
- Application should display an appropriate required-field validation message.
- Checkout information page should remain displayed.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CHECK-003: Verify checkout validation when First Name is missing

**Requirement ID:** REQ-010  
**Test Type:** Negative / Boundary  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. At least one product is added to the cart.
3. User is on the checkout information page.

**Test Data:**
- First Name: Empty
- Last Name: Smith
- Postal Code: A1A 1A1

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Add a product to the cart.
4. Open the cart page.
5. Click Checkout.
6. Leave the First Name field empty.
7. Enter `Smith` in the Last Name field.
8. Enter `A1A 1A1` in the Postal Code field.
9. Click Continue.
10. Observe the validation message.

**Expected Result:**
- Checkout should not proceed.
- Application should display a validation message indicating that First Name is required.
- User should remain on the checkout information page.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CHECK-004: Verify checkout validation when Last Name is missing

**Requirement ID:** REQ-010  
**Test Type:** Negative / Boundary  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. At least one product is added to the cart.
3. User is on the checkout information page.

**Test Data:**
- First Name: John
- Last Name: Empty
- Postal Code: A1A 1A1

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Add a product to the cart.
4. Open the cart page.
5. Click Checkout.
6. Enter `John` in the First Name field.
7. Leave the Last Name field empty.
8. Enter `A1A 1A1` in the Postal Code field.
9. Click Continue.
10. Observe the validation message.

**Expected Result:**
- Checkout should not proceed.
- Application should display a validation message indicating that Last Name is required.
- User should remain on the checkout information page.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CHECK-005: Verify checkout validation when Postal Code is missing

**Requirement ID:** REQ-010  
**Test Type:** Negative / Boundary  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. At least one product is added to the cart.
3. User is on the checkout information page.

**Test Data:**
- First Name: John
- Last Name: Smith
- Postal Code: Empty

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Add a product to the cart.
4. Open the cart page.
5. Click Checkout.
6. Enter `John` in the First Name field.
7. Enter `Smith` in the Last Name field.
8. Leave the Postal Code field empty.
9. Click Continue.
10. Observe the validation message.

**Expected Result:**
- Checkout should not proceed.
- Application should display a validation message indicating that Postal Code is required.
- User should remain on the checkout information page.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

---

## TC-CHECK-006: Verify order overview and simulated order completion

**Requirement ID:** REQ-011, REQ-012, REQ-013  
**Test Type:** Positive  
**Priority:** P1

**Preconditions:**
1. User is logged in as `standard_user`.
2. At least one product has been added to the cart.
3. Valid checkout information has been submitted.
4. User is on the order overview page.

**Test Data:**
- First Name: John
- Last Name: Smith
- Postal Code: A1A 1A1
- Product: Sauce Labs Backpack

**Steps:**
1. Open the SauceDemo application.
2. Log in using valid credentials.
3. Add Sauce Labs Backpack to the cart.
4. Open the shopping cart.
5. Click Checkout.
6. Enter valid First Name, Last Name and Postal Code.
7. Click Continue.
8. Verify that Sauce Labs Backpack appears in the order overview.
9. Verify the product price.
10. Verify the item total.
11. Verify the displayed tax and order total, if present.
12. Click Finish.
13. Observe the order confirmation page.

**Expected Result:**
- Order overview should display the selected product.
- Product price should match the inventory price.
- Item total and displayed tax/total calculations should be consistent with the displayed values.
- Clicking Finish should complete the simulated checkout.
- An appropriate order confirmation message should be displayed.
- User should be able to return to the inventory page if that option is provided.

**Actual Result:** Not executed.

**Status:** Not Run.

**Evidence:** To be attached.

