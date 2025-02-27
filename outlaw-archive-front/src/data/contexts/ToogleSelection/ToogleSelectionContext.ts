import { createContext } from "react";
import { IEditState } from "../../types/interfaces/GeneralInterfaces";

interface IToogleSelectionContextType {
  selectedValues: Set<number>;
  toggleSelectAll(): void;
  toggleSelection(id: number): void;
  editStates: IEditState;
  changeEditState: (id?: number) => void;
}

export const ToogleSelectionContext =
  createContext<IToogleSelectionContextType>({} as IToogleSelectionContextType);
