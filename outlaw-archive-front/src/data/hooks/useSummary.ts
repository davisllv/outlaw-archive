import { useMemo } from "react";
import { data } from "../data";

export function useSummary() {
  const summary = useMemo(() => {
    return data.reduce(
      (acc, transactions) => {
        if (transactions.wantedStatus === "Capturado") {
          acc.captured++;
        } else {
          acc.wanted++;
        }

        return acc;
      },
      {
        captured: 0,
        wanted: 0,
      }
    );
  }, []);

  return summary;
}
