# 📇 orgInsight - Know your Organization

A responsive **Employee Directory Web Application** built with **React 19 + Vite**, **Redux Toolkit + Redux-Saga**, and **Material-UI (MUI)**.  
It allows you to list, search, and filter employees, view their positions in an **Org Chart** (React D3 Tree), and manage themes (**Dark/Light Mode**) with persistent preference storage.

---

## 🚀 Overview

The Employee Directory solution is designed to:

- **List** all employees in a clean, responsive grid.
- **Filter/Search** employees by name and department with debouncing for performance.
- **Visualize hierarchy** in an interactive, collapsible **Organizational Chart**.
- **Switch themes** between Light and Dark mode with persistence via `localStorage`.
- **Mock backend** using `json-server` for local API simulation.
- **Work seamlessly** on desktop and mobile with dynamic sidebar / bottom navigation.

This solution emphasizes **modularity**, **scalability**, and **clean separation** of UI and business logic through **custom hooks** and **Redux**.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, React Router 7
- **State Management**: Redux Toolkit, Redux-Saga
- **UI Library**: Material-UI v7 (MUI)
- **Data Visualization**: react-d3-tree (Org Chart)
- **Mock API**: json-server (for local employee data simulation)
- **Testing**: Vitest + React Testing Library
- **Build Tool**: Vite
- **Styling**: Emotion (MUI's default styling engine)

---

## 📦 Setup Instructions

### 1️⃣ Clone the repository
`git clone https://github.com/<your-username>/employee-directory.git`

`cd employee-directory`

### 2️⃣ Install dependencies
`npm install`


### 3️⃣ Start development server
`npm run dev`

This will launch on `http://localhost:5173` by default (port configurable via `vite.config.js`).

### 4️⃣ Build for production
`npm run build`

### 5️⃣ Preview production build locally
`npm run preview`


---
## 📂 Folder Structure

```
src/
├── components/ # Reusable UI components
│ ├── Employees.jsx # Main employee listing & filters
│ ├── Filters.jsx # Search & filter UI
│ ├── EmployeeGrid.jsx # Grid layout for employees
│ ├── Header.jsx # Header UI
│ ├── Layout.jsx # UI for all the routes with common header, sidebar and footer
│ ├── CustomThemeToggleButton.jsx # Custom component to show toggle theme option
│ ├── EmployeeCard.jsx # Card UI for each employee
│ ├── OrgChart.jsx # D3 Tree org chart
│ ├── OrgChartNode.jsx # Own custom NodeLabel to show employees data for org chart
│ ├── Sidebar.jsx # Sidebar & bottom navigation
│ ├── Home/
│ │ ├── index.jss # Main dashboard file
│ │ ├── Bestteams.jsx # Component to show best teams
│ │ ├── TopPerformers.jsx # UI for employees of the month
│ │ └── UpcomingEvents.jsx # UI for upcomin gevents
│ └── Footer.jsx # Footer component
│
├── hooks/ # Custom React hooks for logic separation
│ ├── useEmployees.js # Data fetching & employee logic
│ └── useFilters.js # Search/department filter handling with debounce
│
├── context/ # Global contexts
│ └── ThemeContext.jsx # Dark/Light mode with localStorage persistence
│
├── constants/ # Static shared constants
│ └── common.js # Sidebar items, enums, etc.
│
├── helpers/ # Helper/utility functions
│ └── common.js # buildHierarchy and other helpers
│
├── store/ # Redux state management
│ ├── employees/ # Redux slice, saga, and actions for employees
│ └── store.js # Redux store configuration
│
├── theme/ # Theme-related configuration
│ └── createAppTheme.js # MUI theme definitions (light & dark)
│
├── routes/ # Routing configuration
│ └── index.js # Public route definitions
│
├── utils/ # Generic utility functions
│ └── common.js # localStorage helper (getItem, setItem)
│
├── constants/ # static data will go here
│ └── common.js # employees static data and other common static data.
│
├── network/ # apis should be written here
│ └── employees.js # apis for employees mofdule
│
├── App.jsx # Main App entry component
└── main.jsx # React DOM entry point
```

## 📂 Folder Structure
src/
├── components/ # Reusable UI components\

│ ├── Employees.jsx # Main employee listing & filters

│ ├── Filters.jsx # Search & filter UI
│ ├── EmployeeGrid.jsx # Grid layout for employees
│ ├── EmployeeCard.jsx # Card UI for each employee
│ ├── OrgChart.jsx # D3 Tree org chart
│ ├── Sidebar.jsx # Sidebar & bottom navigation
│ └── Footer.jsx # Footer component
│
├── hooks/ # Custom React hooks for logic separation
│ ├── useEmployees.js # Data fetching & employee logic
│ └── useFilters.js # Search/department filter handling with debounce
│
├── context/ # Global contexts
│ └── ThemeContext.jsx # Dark/Light mode with localStorage persistence
│
├── constants/ # Static shared constants
│ └── common.js # Sidebar items, enums, etc.
│
├── helpers/ # Helper/utility functions
│ └── common.js # buildHierarchy and other helpers
│
├── store/ # Redux state management
│ ├── employees/ # Redux slice, saga, and actions for employees
│ └── store.js # Redux store configuration
│
├── theme/ # Theme-related configuration
│ └── createAppTheme.js # MUI theme definitions (light & dark)
│
├── routes/ # Routing configuration
│ └── index.js # Public route definitions
│
├── utils/ # Generic utility functions
│ └── storage.js # localStorage helper (getItem, setItem)
│
├── App.jsx # Main App entry component
├── main.jsx # React DOM entry point
└── setupTests.js # RTL/Jest DOM setup


---

## 🏗 Architectural & Scalability Decisions

1. **Vite + React 19**
   - Fast development server, modern ESM support, and optimized builds.

2. **Custom Hooks** (`useEmployees`, `useFilters`)
   - Separates **business logic** from UI components for reusability and testability.

3. **Redux Toolkit + Redux-Saga**
   - Scalable for larger apps with complex async flows.
   - Saga handles API requests and side effects without polluting components.

4. **ThemeContext with localStorage**
   - Maintains theme preference across reloads and sessions.
   - Context API allows theme switching anywhere in the app.

5. **Debounced Filtering**
   - Reduces unnecessary re-renders and improves performance when searching.

6. **Responsive Layout**
   - Desktop: Permanent sidebar.  
   - Mobile: Bottom navigation bar for better UX.

7. **Org Chart with react-d3-tree**
   - Hierarchical data visualization that supports zoom, pan, expand/collapse.
   - Data transformation handled by `buildHierarchy()` helper.

8. **Scalability in Mind**
   - Easily adaptable to a real backend by replacing adding API calls to network tab.
   - Modular folder structure supports growth without losing maintainability.
   - Uses MUI for consistent, theme-aware styling across components.

---

## 👨‍💻 Author

**Designed & Developed by**  
[Jaydeep Singh Chouhan](https://www.linkedin.com/in/jaydeep-singh-chouhan)

---
