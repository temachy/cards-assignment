# Trip cards test assignment 

## Prerequisites
* **Node.js**: 22.12
* **npm**: Installed

## Installation
1. **Copy the application**: Clone or copy the repository to your local machine.
2. **Install dependencies**:
```bash
npm install
```

## Running the Application
* **Start the Frontend**: Run the frontend development server:
```bash
npm run dev
```
* **Start the Mock Server**: Run the mock server to simulate data:
```bash
npm run mockServer
```

---

# Architecture and Design Decisions

## 🏗 Component Architecture

### Reusable UI Components
Components designed for high reusability (e.g., **Cards, Modal, Image, Rating**) are located in the `src/UI` folder.
* **Goal:** This separation allows these components to eventually be extracted into a standalone UI component library.
* **Production Consideration:** In a large-scale production environment, it is often more efficient to integrate industry-standard libraries like **Ant Design (Antd)** or **Material UI (MUI)** to ensure accessibility and design consistency.

### Page-Specific Components
Components that are specific to a single view or are not intended for reuse elsewhere live in `src/components`. This keeps the primary UI folder clean and focused on generic building blocks.

## 🎨 Styling Strategy
* **Encapsulation:** Each component has its own dedicated `.scss` file located within the component's directory. 
* **Maintainability:** This approach ensures that styles are modular, easy to locate, and scoped to the relevant component logic.

## Search and Sort
The logic for filtering and sorting data has been moved to a dedicated `util` file.
* **Testability:** Moving logic out of the UI layer allows for easy **unit testing**.
* **Scalability Note:** While implemented on the client side here, sorting and filtering should ideally be handled by the backend. Client-side processing of large datasets increases page load times and degrades user experience.

## 🖼 Image Optimization
To maintain high performance and fast load times:
* **Previews:** The app utilizes compressed image previews. 
* **Backend Proxy:** If the source images cannot be controlled directly, a backend proxy should be implemented to process and serve lightweight versions of the assets to the UI.

## 🌐 Networking and State Management
For data fetching and server-state management, the app uses **@tanstack/react-query**.
* **Caching & Retries:** It provides a robust feature set for caching data, handling retries on failure, and managing loading states out of the box.
* **Standardization:** It is considered the de-facto standard for networking in modern React applications, ensuring the app remains performant and synchronized with the server.