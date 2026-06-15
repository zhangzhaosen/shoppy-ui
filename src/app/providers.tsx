
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import darkTheme from "./dark.theme";
import { ReactElement } from "react";
import { AuthContext } from "./auth/auth-context";
import { AuthProvider } from "./auth/auth-provider";

interface ProviderProps {
  children: ReactElement[], 
  authenticated: boolean
}

export default function Providers({ children, authenticated }: ProviderProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <AuthProvider authenticated={authenticated}>
          {children}
        </AuthProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}