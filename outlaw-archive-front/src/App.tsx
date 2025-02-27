import { Box, Button, Modal, ThemeProvider } from "@mui/material";
import { defaultTheme } from "./ui/styles/theme/default";
import { DefaultGlobalStyles } from "./ui/styles/globalStyles";
import ReactVirtualizedTable from "./ui/components/VirtualizedTable";
import { FooterContainer, FormContainer } from "./styles";
import { CheckCircle, DirectionsRun } from "@mui/icons-material";
import { ToogleSelectionContextProvider } from "./data/contexts/ToogleSelection/ToogleSelectionContextProvider";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { useSummary } from "./data/hooks/useSummary";

export function App() {
  const formOutlawWanted = useForm();
  const { captured, wanted } = useSummary();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit } = formOutlawWanted;

  const handleSubmitSingleValues = (value: any) => {
    console.log(value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <FormContainer onSubmit={handleSubmit(handleSubmitSingleValues)}>
        <ToogleSelectionContextProvider>
          <FormProvider {...formOutlawWanted}>
            <ReactVirtualizedTable />
          </FormProvider>
          <FooterContainer>
            {/* Contadores */}
            <div className="info-container">
              <div className="captured">
                <CheckCircle />
                {captured} foram capturados
              </div>
              <div className="wanted">
                <DirectionsRun />
                {wanted} ainda estão sendo procurados
              </div>
            </div>

            {/* Botões */}
            <div className="buttons-container">
              <Button
                variant="contained"
                type="button"
                onClick={() => handleOpen()}
              >
                Alterar Selecionados
              </Button>
              <Button variant="contained" type="submit">
                Alterar
              </Button>
            </div>
          </FooterContainer>
        </ToogleSelectionContextProvider>
      </FormContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "62rem",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h1>Oi</h1>
        </Box>
      </Modal>
      <DefaultGlobalStyles />
    </ThemeProvider>
  );
}
