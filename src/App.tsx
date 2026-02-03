import { ErrorBoundary } from "react-error-boundary";
import styles from "./App.module.scss";
import { TripCards } from "./components";

const App = () => (
  <ErrorBoundary
    fallback={
      <p className={styles.error}>
        Unexpected error occurred, please reload the page and try again
      </p>
    }
  >
    <TripCards />
  </ErrorBoundary>
);

export default App;
