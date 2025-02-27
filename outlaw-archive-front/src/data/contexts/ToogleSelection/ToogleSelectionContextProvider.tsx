import { ReactNode, useState } from "react";
import { ToogleSelectionContext } from "./ToogleSelectionContext";
import { data } from "../../data";
import { IEditState } from "../../types/interfaces/GeneralInterfaces";

interface IToogleSelectionContextProviderProps {
  children: ReactNode;
}

export function ToogleSelectionContextProvider({
  children,
}: IToogleSelectionContextProviderProps) {
  const [selectedValues, setSelectedValues] = useState<Set<number>>(new Set());
  const [editStates, setEditStates] = useState<IEditState>({});

  const toggleSelectAll = () => {
    if (selectedValues.size === data.length) {
      setSelectedValues(new Set());
    } else {
      const allIds = new Set(data.map((row) => row.id));
      setSelectedValues(allIds);
    }
  };

  const toggleSelection = (id: number) => {
    const newSelected = new Set(selectedValues);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedValues(newSelected);
  };

  const changeEditState = (id?: number) => {
    if (id !== undefined) {
      setEditStates({ [id]: true });
    } else {
      setEditStates({});
    }
  };

  return (
    <ToogleSelectionContext.Provider
      value={{
        selectedValues,
        toggleSelectAll,
        toggleSelection,
        editStates,
        changeEditState,
      }}
    >
      {children}
    </ToogleSelectionContext.Provider>
  );
}
