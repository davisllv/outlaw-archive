import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./ui/styles/theme/default";
import { DefaultGlobalStyles } from "./ui/styles/globalStyles";
import { OutlawArchiveContextProvider } from "./data/contexts/OutlawArchive/OutlawArchiveContextProvider";
import { DefaultLayout } from "./ui/components/DefaultLayout";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OutlawArchiveContextProvider>
        <DefaultLayout />
      </OutlawArchiveContextProvider>
      <DefaultGlobalStyles />
    </ThemeProvider>
  );
}
