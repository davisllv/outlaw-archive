import { ReactNode, useCallback, useEffect, useState } from "react";
import { OutlawArchiveContext } from "./OutlawArchiveContext";
import { IEditState, IOutlawInformations } from "../../types/interfaces/GeneralInterfaces";
import apiService from "../../connections/apiService";

interface IOutlawArchiveContextProviderProps {
  children: ReactNode;
}

export function OutlawArchiveContextProvider({
  children,
}: IOutlawArchiveContextProviderProps) {
  const [data, setData] = useState<IOutlawInformations[]>([] as IOutlawInformations[])
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

  const fetchAllWantedOutlaw = useCallback(async () => {
    try {
      const response = await apiService.get<IOutlawInformations[]>("/wanted");
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados de Wanted Outlaw:", error);
    }
  }, []);

  const changeEditState = (id?: number) => {
    if (id !== undefined) {
      setEditStates({ [id]: true });
    } else {
      setEditStates({});
    }
  };

  useEffect(() => {
    fetchAllWantedOutlaw()
  }, [fetchAllWantedOutlaw])

  return (
    <OutlawArchiveContext.Provider
      value={{
        selectedValues,
        toggleSelectAll,
        editStates,
        changeEditState,
        fetchAllWantedOutlaw,
        data,
      }}
    >
      {children}
    </OutlawArchiveContext.Provider>
  );
}
