🚀 URL Shortener (Bitly Clone)

A modern, fast, and production-ready URL Shortener built with Node.js, Express, MongoDB, and EJS.
This project allows users to convert long URLs into short links and track click analytics in real time.

🌟 Features

🔗 Shorten any long URL

🚀 Auto-generate short codes

📊 Track number of clicks

🗄 Store URLs in MongoDB

🖥 Clean modern UI (EJS + CSS)

⚡ Fast redirects

🔐 Production-ready backend

🛠 Tech Stack

Backend: Node.js, Express

Database: MongoDB (Mongoose)

Frontend: EJS, HTML, CSS

Utilities: shortid

📁 Project Structure
URL_SHORTENER
│
├── models/
│   └── shorturl.model.js
│
├── views/
│   └── index.ejs
│
├── server.js
├── package.json
└── README.md

⚙ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

2️⃣ Install Dependencies
npm install

3️⃣ Start MongoDB

Make sure MongoDB is running locally:

mongod

4️⃣ Run Server
nodemon server.js


Server will run at:

http://localhost:3000

🚀 How it Works

User enters a long URL

App generates a short code

Short URL is saved in MongoDB

On clicking short URL → redirect to original URL

Clicks are counted automatically

🧠 Learning Outcomes

Express routing

MongoDB & Mongoose

EJS templating

MVC structure

URL redirection

Real-world backend workflow

📌 Future Improvements

User authentication

Custom short URLs

QR code generation

Analytics dashboard

Cloud deployment

👨‍💻 Author

Deepak Kumar
Full-Stack Developer (MERN)
Building products, not just projects 🚀
