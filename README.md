# Build-e-commerce-shopping-cart-application---Profile.fyi
The application will feature a product listing page showcasing various products with details and an "Add to Cart" functionality. Additionally, a dedicated cart page will allow users to manage items, including quantity adjustments, removal, and total price calculations with potential discounts.


Here's how you can structure My React app based on the given  assignment description:

My Project App File Structure :- 

/src
  /components
    ProductList.jsx
    ProductCard.jsx
    Cart.jsx
    CartItem.jsx
    Navbar.jsx
  /pages
    Home.jsx
    CartPage.jsx
  /styles
    App.module.css
    ProductCard.module.css
    Cart.module.css
  /data
    products.json
  App.jsx
  index.jsx
Components Breakdown
ProductList.jsx

Displays a grid of ProductCard components.
Fetches product data from products.json.
ProductCard.jsx

Represents individual product information.
Contains "Add to Cart" functionality.
Cart.jsx

Displays a list of CartItem components.
Shows subtotal, discount options, and total price.
Manages the cart state.
CartItem.jsx

Represents an individual item in the cart.
Includes quantity adjustments and a remove button.
Navbar.jsx

Contains links to the home page and cart page.
Optionally displays the number of items in the cart.
Pages
Home.jsx
Home page displaying ProductList.
CartPage.jsx
Dedicated page for displaying the Cart component.
Styles
App.module.css

General styles for the entire application.
ProductCard.module.css

Styles specific to product cards.
Cart.module.css

Styles specific to the cart and its items.
Data
products.json
The local JSON file containing product details (as provided).
Main Files
App.jsx

The main application component that renders Navbar, Home, or CartPage based on the route.
index.jsx

The entry point of the application where ReactDOM.render() is used to mount the App component.
