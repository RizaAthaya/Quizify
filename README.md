# Quizify

**Quizify** is a web application that generates random quiz questions based on selected categories, difficulty levels, question types, and the number of questions. Built using React, Vite, and TypeScript.

## Demo
Visit the live application here: [Quizify Live on Vercel](https://quizify-snowy.vercel.app/auth/login)

![Quizify Preview](https://github.com/user-attachments/assets/9315c58b-4942-4312-9807-1c759e2eaf85)

## Key Features
- Select question categories.
- Adjust difficulty levels (easy, medium, hard).
- Choose question types (multiple-choice, true/false).
- Specify the number of questions.
- Questions are generated randomly based on user preferences.

## Technologies Used
- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Firebase** (used for user authentication)
- **Open Trivia Database (OpenTDB)** (used as the quiz question source)

## How to Install and Run Locally

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or later)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the Repository**

   Run the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/quizify.git
   ```

2. **Navigate to the Project Folder**

   Navigate to the project directory:
   ```bash
   cd quizify
   ```

3. **Copy Environment File**

   Copy the `.env.example` file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```

4. **Install Dependencies**

   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

5. **Run the Project**

   Start the application in development mode:
   ```bash
   npm run dev
   ```

   Then, open your browser and access the application at:
   ```
   http://localhost:5173
   ```

### Build for Production
To create a production build, run the following command:
```bash
npm run build
```

The build output will be available in the `dist` folder.

## Contribution
If you would like to contribute to this project:
1. Fork this repository.
2. Create a new branch for your feature or fix (`git checkout -b new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin new-feature`).
5. Open a Pull Request.

---

Thank you for using **Quizify**! Feel free to provide feedback or report issues on the [Issues](https://github.com/RizaAthaya/quizify/issues) page.
