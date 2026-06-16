import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./App.module.scss";
import { TripCards, TripCardsErrorBoundary, TripCardsSkeleton } from "./components";

const App = () => (
  <ErrorBoundary
    fallback={
      <p className={styles.error}>
        Unexpected error occurred, please reload the page and try again
      </p>
    }
  >
    <TripCardsErrorBoundary>
      <Suspense fallback={<TripCardsSkeleton />}>
        <TripCards />
      </Suspense>
    </TripCardsErrorBoundary>
  </ErrorBoundary>
);

export default App;
