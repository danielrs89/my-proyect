# 🌌 NASA Astronomy Picture of the Day (APOD) Viewer

A simple and responsive **React** application that fetches and displays NASA's **Astronomy Picture of the Day** using the [NASA APOD API](https://api.nasa.gov/). Users can view the daily space image along with its title, description, and credits.

## 🚀 Features

- 🖼️ Displays NASA’s Astronomy Picture of the Day automatically.
- 📅 Option to select a specific date to view past images.
- 🧾 Shows title, scientific explanation, and image credits.
- ✅ Unit and integration testing with **Jest** and **React Testing Library**.
- 📱 Responsive and modern UI using **CSS Modules** or **Tailwind CSS**.

---

## 🖼️ Preview


![App example preview](https://github.com/user-attachments/assets/d1a9a272-9ca5-4da9-952f-48664d1296a3)


---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nasa-apod-viewer.git
cd nasa-apod-viewer
```
Install dependencies:

```bash
npm install
```
Create a .env file in the root of the project with your NASA API key:

```env
REACT_APP_NASA_API_KEY=your_nasa_api_key_here
You can request a free API key from api.nasa.gov.
```


---
▶️ Usage
To start the development server:

```bash
npm start
```
The app will be available at `http://localhost:3000`.

---
🧪 Testing
To run tests:

```bash

npm test
This will run all unit and integration tests using Jest and React Testing Library.
```

---
📁 Project Structure
bash
Copiar
Editar
nasa-apod-viewer/
├── public/
├── src/
│   ├── components/
│   │   └── ApodViewer.jsx
│   ├── hooks/
│   │   └── useApod.js
│   ├── __tests__/
│   │   └── ApodViewer.test.jsx
│   ├── App.jsx
│   ├── index.js
├── .env.example
├── README.md
├── package.json

---
🛠️ Tech Stack
React

Axios

Jest

React Testing Library

CSS Modules / Tailwind CSS

NASA APOD API

📃 License
This project is licensed under the MIT License.

---
👤 Author
Daniel Rodríguez Sánchez
📧 dani89rosa@gmail.com

---
🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.

Create a new branch: git checkout -b feature/your-feature.

Commit your changes: git commit -m 'Add your feature'.

Push to your branch: git push origin feature/your-feature.

Open a Pull Request.







