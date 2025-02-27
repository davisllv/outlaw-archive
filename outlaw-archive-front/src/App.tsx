import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./ui/styles/theme/default";
import { DefaultGlobalStyles } from "./ui/styles/globalStyles";
import ReactVirtualizedTable from "./ui/components/VirtualizedTable";
import "./styles.css";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="main-container">
        <ReactVirtualizedTable />

        <div></div>
      </div>
      <DefaultGlobalStyles />
    </ThemeProvider>
  );
}
