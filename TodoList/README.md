# ✨ Task Master - Premium React To-Do App

A beautiful, high-performance To-Do application built with React and Vite. Features a glassmorphism design, countdown timers, and detailed task tracking.

![Task Master Preview](https://via.placeholder.com/800x400?text=Task+Master+App+Preview)

## 🚀 Features

-   **Smart Task Management**: Add tasks with specific due dates and times.
-   **⏳ Live Countdowns**: Real-time countdown timers for every task.
-   **⚡ Auto-Expire Logic**: Tasks automatically move to "Failed" when time runs out.
-   **📊 Summary Dashboard**: Track your productivity with a history of Completed vs. Failed tasks.
-   **🎨 Premium UI**:
    -   **Glassmorphism Design**: Modern, frosted-glass aesthetics.
    -   **Morning Mist Theme**: A clean, airy light theme with Teal & Sky Blue accents.
    -   **Smooth Animations**: Slide-ins, fades, and interactive hover effects.
    -   **Toast Notifications**: Instant visual feedback for all actions.

## 🛠️ Tech Stack

-   **Framework**: React 18
-   **Build Tool**: Vite
-   **Styling**: Pure CSS3 (CSS Variables, Flexbox, Grid, Keyframe Animations)
-   **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)
-   **Persistence**: LocalStorage (Data survives page reloads)

## 🏃‍♂️ How to Run

1.  **Clone the repository** (if applicable)
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Start Development Server**:
    ```bash
    npm run dev
    ```
4.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```text
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── TaskForm.jsx    # Input form for new tasks
│   ├── TaskItem.jsx    # Individual task card with timer logic
│   ├── TaskList.jsx    # Container for active tasks
│   ├── TaskSummary.jsx # Dashboard for Completed/Failed history
│   └── Toast.jsx       # Notification system
├── App.css          # Global styles, variables, and animations
├── App.jsx          # Main application logic and state management
└── main.jsx         # Application entry point
```

## 💡 Usage Guide

1.  **Add a Task**: Enter a task description, select a date, and pick a time.
2.  **Track It**: Watch the countdown timer tick down.
3.  **Complete It**: Click the ✅ button before time runs out to mark it as success.
4.  **Delete It**: Click 🗑️ to remove a task.
5.  **Review**: Check the bottom section to see your history of triumphs and missed deadlines.

---

**Developed with ❤️ using React & CSS.**
