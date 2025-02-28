import { createContext } from "react";
import {
  IEditState,
  IOutlawInformations,
} from "../../types/interfaces/GeneralInterfaces";

interface IOutlawArchiveContextType {
  selectedValues: Set<number>;
  toggleSelectAll(): void;
  editStates: IEditState;
  changeEditState: (id?: number) => void;

  fetchAllWantedOutlaw: () => Promise<void>;
  data: IOutlawInformations[];
}

export const OutlawArchiveContext = createContext<IOutlawArchiveContextType>(
  {} as IOutlawArchiveContextType
);
