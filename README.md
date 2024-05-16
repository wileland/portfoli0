Portfolio Project
Overview
This is a full-stack portfolio project built using React for the frontend and Node.js with Express and MongoDB for the backend. The project showcases various features including user registration, login, and a dashboard for logged-in users.
Features

- User Registration and Authentication
- Local Storage for User Sessions
- Dashboard for Logged-In Users
- Error Handling and User Feedback
- Integration with MongoDB for Data Storage
  Technologies Used
- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, MongoDB, Mongoose, dotenv, bcrypt, nodemon
- **Other Tools**: Concurrently, VSCode, Postman
  Setup Instructions
  Prerequisites
- Node.js (v18.20.2)
- npm (v10.4.0)
- MongoDB Atlas or MongoDB Compass
  Installation

1. Clone the repository:
   git clone https://github.com/your-username/portfolio.git
2. Navigate to the project directory:
   cd portfolio
3. Install dependencies for the root, client, and server:
   npm install
   cd client && npm install
   cd ../server && npm install
4. Set up your environment variables:
   Create a `.env` file in the `server` directory with the following content:
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your-database>?retryWrites=true&w=majority
   Running the Application
5. Start the MongoDB server if you are using a local instance:
   mongod
6. Seed the database (if applicable):
   npm run seed
7. Start the development server:
   npm start
8. Open your browser and navigate to:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`
  Folder Structure
  portfolio/
  ├── .vscode/
  │ └── settings.json
  ├── client/
  │ ├── node_modules/
  │ ├── public/
  │ ├── src/
  │ │ ├── components/
  │ │ │ ├── About.jsx
  │ │ │ ├── Critiques.jsx
  │ │ │ ├── Header.jsx
  │ │ │ ├── Hero.jsx
  │ │ │ ├── Projects.jsx
  │ │ │ └── CheckoutForm.jsx
  │ │ ├── context/
  │ │ │ └── GlobalContext.js
  │ │ ├── assets/
  │ │ ├── App.jsx
  │ │ ├── index.js
  │ │ └── reportWebVitals.js
  │ ├── .env
  │ ├── .gitignore
  │ ├── package-lock.json
  │ ├── package.json
  │ ├── postcss.config.js
  │ ├── README.md
  │ └── tailwind.config.js
  ├── server/
  │ ├── node_modules/
  │ ├── routes/
  │ │ └── auth.js
  │ ├── models/
  │ │ └── User.js
  │ ├── utils/
  │ │ └── seed.js
  │ ├── .env
  │ ├── .gitignore
  │ ├── package-lock.json
  │ ├── package.json
  │ └── server.js
  ├── .gitignore
  ├── LICENSE
  └── README.md

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.
License
This project is licensed under the MIT License - see the LICENSE file for details.

---

William L. Haynes
