import { useContext, useMemo } from "react";
import { OutlawArchiveContext } from "../contexts/OutlawArchive/OutlawArchiveContext";

export function useSummary() {
  const { data } = useContext(OutlawArchiveContext);
  const summary = useMemo(() => {
    return data?.reduce(
      (acc, transactions) => {
        if (transactions.wanted_status === "Capturado") {
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
  }, [data]);

  return summary;
}
