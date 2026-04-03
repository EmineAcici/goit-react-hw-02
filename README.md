# Sip Happens Café - Feedback Widget

A simple and interactive feedback collection application built with React. This project demonstrates state management, side effects with LocalStorage, and conditional rendering.

## 🚀 Features

- **Feedback Tracking:** Collects and displays counts for "Good", "Neutral", and "Bad" experiences.
- **Real-time Statistics:** Automatically calculates the total number of feedbacks and the percentage of positive ratings.
- **Conditional Rendering:** - Shows a friendly notification message when no feedback has been collected.
  - Displays the statistics and a "Reset" button only after the first feedback is received.
- **Persistent Data:** Uses `useEffect` and `localStorage` to ensure feedback data is preserved even after refreshing the page.
- **Modular Component Architecture:** Clean separation of concerns between UI components.

## 🛠️ Tech Stack

- **React** (Scaffolded with Vite)
- **Hooks:** `useState`, `useEffect`
- **Styling:** CSS3 with BEM Methodology for scalable and maintainable styles.

## 📁 Component Structure

- `App`: The root component that manages state and handles business logic.
- `Description`: Displays the café's name and instructions.
- `Options`: Contains buttons to submit feedback and the "Reset" button.
- `Feedback`: Lists the feedback counts and calculated statistics.
- `Notification`: A fallback message displayed when there is no feedback data.

