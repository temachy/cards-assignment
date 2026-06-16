import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./TripCards.module.scss";

type TripCardsErrorBoundaryProps = {
  children: ReactNode;
};

const TripCardsErrorBoundary = ({ children }: TripCardsErrorBoundaryProps) => (
  <ErrorBoundary
    fallbackRender={({ error }) => {
      const errorMessage = error instanceof Error ? error.message : String(error);

      return (
        <p className={styles.noTripsFound}>
          Error loading trips, details: {errorMessage}
        </p>
      );
    }}
  >
    {children}
  </ErrorBoundary>
);

export default TripCardsErrorBoundary;
