import { Chip } from "@mui/material";
import { IOutlawInformations } from "../../../../../data/types/interfaces/GeneralInterfaces";
import { StyledContentCell } from "../../../VirtualizedTable/styles";

const statusColors = {
    Procurado: "info",
    Capturado: "default",
} as const;

interface IRowContentProps {
    row: IOutlawInformations;

}

export function RowContentModal({ row }: IRowContentProps) {
    return (
        <>
            <StyledContentCell >
                {row.wanted_name}
            </StyledContentCell>
            <StyledContentCell>
                <Chip
                    label={row.wanted_status}
                    color={statusColors[row.wanted_status]}
                    variant="outlined"
                />
            </StyledContentCell>
            <StyledContentCell>
                <Chip
                    label={row.dead_or_alive ? "Vivo" : "Morto"}
                    sx={{
                        backgroundColor: row.dead_or_alive ? "green" : "red",
                        color: "white",
                    }}
                />
            </StyledContentCell>
        </>
    );
}
