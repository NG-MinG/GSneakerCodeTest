# G-Sneaker Code Test

My name is Nguyen Duc Minh. I have fully completed the required features of "CODE TEST" with the following sections:

# Requirements

### Must have: Fully completed

-   [x] Display all products in `Our Products` section (for products data please check from [Technical Requirements](#technical-requirements)):
    -   [x] Single product should have name, description, price, image and `Add To Cart` button.
    -   [x] User able to click on `Add To Cart` to add target product to their cart.
    -   [x] Added product doesn't have `Add To Cart` button anymore, it should have `Check Mark Icon (✓)` instead.
-   [x] Display all added products in `Your Cart` section:
    -   [x] Each product in cart should have name, price, image, increase/decrease amount button and remove button.
    -   [x] User able to increase/decrease amount of a product in cart. When product's amount is decreased to zero, that product will be removed from cart naturally.
    -   [x] User able to remove product from cart.
    -   [x] Show total price of all products in car. When user increase/decrease product's amount or remove product, total price should be re-calculate correctly.
    -   [x] When there are no products in cart, we should show `Your cart is empty` message.
    -   [x] Products in cart should be persistent: When user visit the application, products are added before should be showed, user don't need to add products again.
-   [x] UI must follow correctly design from [live demo](https://gshoes.vercel.app).

### Nice to have:

-   [x] Responsive design (look good on all devices: desktops, tablets & mobile phones).
-   [x] Smooth animations (don't really need to be same as the demo, just do what you think is good).
-   [x] Deploy the application to free platforms.
-   [ ] Unit tests

# Frontend

-   Basic performance optimizations: React Memo, Clean-up function.
-   Technologies: ReactJS, Redux toolkit, CSS module.
-   Coding standards: Eslint and Prettier.

# INSTRUCTION

## Local installation `develop-env` with `docker compose`

**Step 1: Change directory to docker-compose directory**

```shell
cd docker-compose
```

**Step 2: Build and run docker compose with dev-env**

Window:

```bash
docker compose -f up --build
```

Linux / MacOS:

```shell
sudo docker compose up --build
```

Alternative Linux / MacOS:

```shell
sudo docker-compose up --build
```

## Manually installation

```shell
cd gsneaker
npm install
```

### Run

```shell
npm start
```

# Local links

> -   GSneaker Client: [http://localhost:3000](http://localhost:3000)

---

# Deployment links:

> -   GSneaker Client: [http://localhost:3000](http://localhost:3000)

**Thank for reviewing my project!**
