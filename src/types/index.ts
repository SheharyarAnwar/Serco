export interface ThemeContext {
  theme: Theme | null;
  setTheme: React.Dispatch<Theme>;
}
export interface Theme {
  color: string;
}
