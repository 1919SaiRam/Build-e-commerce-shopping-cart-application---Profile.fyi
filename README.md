# Build-e-commerce-shopping-cart-application---Profile.fyi :-

# Home page :-Products list means list of items :-  
![Screenshot (11)](https://github.com/user-attachments/assets/af6505cc-3a51-44b7-ac01-e127da663703)

# After Add to Cart Functionality ; the User's Virtual Shopping Cart Page 
![Screenshot (12)](https://github.com/user-attachments/assets/5c30f337-aef5-4e1d-ab75-247e2eaef0b3)

# Afer Click checkout button - Cart Summary Section:- with adding discount on subtotal value of user selected items :- 
![Screenshot (13)](https://github.com/user-attachments/assets/8c4264ce-a115-4c9a-972d-541127d5b229)

# After click on confirmation to place order by the user :- 
![Screenshot (14)](https://github.com/user-attachments/assets/73e8edeb-0954-485c-aafd-4756b19fe0ae)


# implementation of  error handling for scenarios like invalid quantity input ; Empty cart or discount codes.
1) Invalid QTY :- 
![Screenshot (15)](https://github.com/user-attachments/assets/9c8b75ce-cd36-4438-acdb-8dcccc3c929d)

2) Empty cart :-
  ![Screenshot (16)](https://github.com/user-attachments/assets/3fbc01d7-86d5-4867-9c1d-43d06598f7f2)

 3) While adding invalid discount value :-
    ![Screenshot (17)](https://github.com/user-attachments/assets/9f503a45-ae54-48a8-b08c-0697d21e1caf)
    &
    ![Screenshot (18)](https://github.com/user-attachments/assets/15df16d5-3457-426f-9c91-05bfbac6ebaf)





# Let's find which is existed evaluation done to builded the "Build-e-commerce-shopping-cart-application---Profile.fyi" project based on the provided criteria:-

# 1. Code Logic and Cleanliness:
Structure & Readability:

The project has well-structured code with a clear separation of components and styles. Ensure clear that:
Each component has a single responsibility.
Code is consistently indented and formatted.
Comments are added where complex logic exists or where the intent might not be immediately clear.

# State Management:- 

Efficient state management is crucial. React hooks are used effectively for managing state. Checking done with :
State updates are performant, especially in components that affect multiple parts of the app.
Proper cleanup is done to prevent memory leaks.
# Comments:

Ensured comments are present and useful. They should explain why certain decisions were made, especially in complex areas of code or where there might be potential confusion.

# 2. Design Symmetry:
Consistent Layout:

--> The layout is consistent across pages. Checking done :
Uniform spacing, alignment, and styling for similar components.
Consistent design elements (buttons, headers, etc.).



Responsive Design:

--> CSS media queries are used to ensure responsiveness. Verify by:
Testing done on various devices and screen resolutions.
Ensuring no elements are misaligned or improperly scaled on different devices.



Design Elements:

---> Design elements like buttons and images should be aligned and styled consistently. Confirm:
All design elements match the intended visual design.
No design discrepancies across different pages.

# 3. Reusable Components:
Component Reusability:

Components like ProductCard and CartItem are reusable. Ensured with :
These components are used consistently throughout the application.
Similar code is not repeated elsewhere.



Modularity:

Components are modular. Check:
Changes to a component are reflected throughout the application.
Components are easy to update or replace without affecting the overall functionality.

$4. Completeness of Features:
Feature Implementation:

All features (product display, cart management, checkout, confirmation) are implemented. Confirm:
All features work as expected.
Edge cases (e.g., empty cart, failed checkout) are handled gracefully.
Functionality:

Thoroughly test all functionalities. Ensure:
Adding products to the cart, updating quantities, checking out, and viewing the confirmation page all work correctly.
The application handles errors or invalid inputs properly, providing clear feedback to the user.
Recommendations for Readme File
Since you had an issue with adding the README file, here are some recommendations to include in it:

# Project Overview:

Briefly described as above the purpose and functionality of the application.
--> Features:

List the main features (e.g., product display, cart management, checkout process) as implemented in application .
--> Installation Instructions:

Provide steps to set up and run the project locally (e.g., dependencies, environment setup) as implemented .

--> Usage:-

Explained how to use the application (e.g., adding products, viewing cart, checking out).

Testing:

Describe how to run tests and what testing tools are used:-
Use "npm test" for testing _tests_ for project !! 
--> Testing with Jest and React Testing Library
https://drive.google.com/file/d/16yomEITjk9AkK_ZQmUFDGkQGrhcJVWe1/view?usp=drivesdk
Jest Provides a robust test runner, mocking capabilities, and assertions. It integrates well with React through its official testing library.
![Screenshot (8)](https://github.com/user-attachments/assets/290a133e-a8ab-431b-b673-0f6ef5f06741)


Contributing:- 

Above all are the Provided guidelines for contributing to the project.

# 🤝 Thanks for the Investing Valuable time & Patience for Review 🙏




# Note :- -->  For Explore user authentication for persistent cart storage across sessions :- Application enhancement logs :- 
Additional features required to project like login implementation with user Credentials like :- 
// LoginPage.jsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login with backend API
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
# but this authenticaton ; can be effectively possible to use useContext & useEffect hooks ;- 
export const AuthContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for authentication state (e.g., check for token)
  }, []);

  #In cartPage.jsx:- 
  useEffect(() => {
    // Load cart data from local storage or backend
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


---> For dymaically data rendering of products list need to create _---   .env file   # Environment variables (e.g., API URL for development)
