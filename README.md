# William L. Haynes' Portfolio

Welcome to my portfolio! This app showcases my projects, critiques, and more, all built using React. It also includes functionalities for user authentication and Stripe payments.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Routing](#routing)
- [State Management](#state-management)
- [Stripe Integration](#stripe-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This portfolio is built to demonstrate my proficiency in React and to showcase my projects. The app includes pages for About, Projects, Critiques, and Contact, with a user authentication system and Stripe payment integration.

## Technologies Used

- React
- React Router
- React Context API with `useReducer`
- Framer Motion
- Tailwind CSS
- Stripe
- Node.js
- Express
- MongoDB

## Installation

To get started with this project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/your-repo/portfolio.git
cd portfolio
npm install
```

Make sure to navigate to both client and server directories to install their respective dependencies:

```bash
cd client
npm install
cd ../server
npm install
```

## Usage

npm start
This will run the server on port 5000 and the client on port 3000.

## Components

Header
The Header component contains navigation links to different sections of the app.

Hero
The Hero component is the main landing section of the homepage.

About
The About component provides information about me.

Projects
The Projects component showcases my projects.

Critiques
The Critiques component displays critiques.

Contact
The Contact component contains a form to contact me.

Login
The Login component allows users to log in to their account.

Register
The Register component allows users to create a new account.

Dashboard
The Dashboard component is the main page for logged-in users.

CheckoutForm
The CheckoutForm component integrates Stripe for payment processing.

## Routing

The app uses React Router for navigation. The main routes include:

/: Home (Hero, About, Projects, Critiques)
/login: Login
/register: Register
/dashboard: Dashboard (for authenticated users)

## State Management

State management is handled using the Context API and useReducer. The global state includes isAuthenticated, user, and tab.

GlobalContext.jsx
The GlobalContext provides the global state and dispatch function.

App.jsx
The App component uses the global context to manage authenticated and unauthenticated states and render the appropriate components.

## Stripe Integration

The app uses Stripe for payment processing. The CheckoutForm component is wrapped with the Elements provider to integrate Stripe.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact me at william@example.com.

William L. Haynes' Portfolio - Showcasing the robustness of React.
