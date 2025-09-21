# 📊 PIBTrends

Welcome to **PIBTrends**!  
An interactive web application to visualize and explore the evolution of Brazil's GDP (total and per capita, in US dollars) over the years.

---

## 🚀 Features

- 📈 **Line Chart:** Visualize the evolution of Brazil's total and per capita GDP in an interactive chart.

- 📋 **Detailed Table:** Browse a table with total and per capita GDP in US dollars for each year.

- 💱 **Current Dollar Exchange Rate:** Automatically fetches the current USD/BRL rate via AwesomeAPI.

- 🌗 **Light/Dark Theme:** Switch between light and dark modes with a single click.

- 🔒 **Accessibility:** Components focused on accessibility and intuitive navigation.

---

## 🌐 Production Version

Access the live project here:  
👉 [https://conectar-case.vercel.app/](https://conectar-case.vercel.app/)

---

## 🛠️ Technologies Used

- [React](https://react.dev/)

- [Vite](https://vitejs.dev/)

- [TypeScript](https://www.typescriptlang.org/)

- [Recharts](https://recharts.org/)

- [React Router](https://reactrouter.com/)

- [Vitest](https://vitest.dev/) (unit testing)

- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) (code quality)

---

## ⚡ How to run the Project

### 1. Prerequisites

- Node.js **20.19+** or **22.12+**

- npm (usually comes with Node.js)

---

### 2. Install dependencies

```sh
npm install
```

Then, make sure to install the following libraries used in the project:

```sh
npm install react-router-dom react-icons recharts
```

---

### 3. Configure the API token

Create a `.env` file at the root of the project with the following content:

```
VITE_AWESOME_API_TOKEN=your_token_here
```

Replace `your_token_here` with your token from [AwesomeAPI](https://awesomeapi.com.br/), which is used for fetching the current dollar exchange rate.

> **Note:**  
> If you do not provide a token, the application will use a default dollar value set in the code.

---

### 4. Start the development server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Running Tests

Run unit tests with:

```sh
npm test
```

---

## 📂 Project Structure

```
src/
  assets/        # Images
  components/    # Reusable components (charts, tables, navigation)
  pages/         # Main application pages
  utils/         # Utility functions (e.g., fetchCurrentDollar)
  styles/        # CSS files
```

---

## 💡 Notes

- The project is already configured with ESLint and Prettier. Use the VS Code extensions for a better development experience.

- For production, remember to keep your API token secure.

---

## 👤 Author

Developed by Fernanda Romanoel.

---
