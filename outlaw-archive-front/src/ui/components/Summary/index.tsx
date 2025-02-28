import { CheckCircle, DirectionsRun } from "@mui/icons-material";
import { SummaryInfo } from "./styles";
import { useSummary } from "../../../data/hooks/useSummary";

export function Summary() {
    const { captured, wanted } = useSummary();
    return (
        <SummaryInfo className="info-container">
            <div className="captured">
                <CheckCircle />
                {captured} foram capturados
            </div>
            <div className="wanted">
                <DirectionsRun />
                {wanted} ainda estão sendo procurados
            </div>
        </SummaryInfo>
    )
}