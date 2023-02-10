/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

export const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarToggle = () => setSidebarOpen(!sidebarOpen);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, sidebarToggle }}>
      {children}
    </SidebarContext.Provider>
  );
}
