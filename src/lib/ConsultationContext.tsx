"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ConsultationContextType {
  isOpen: boolean;
  openConsultation: () => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType>({
  isOpen: false,
  openConsultation: () => {},
  closeConsultation: () => {},
});

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ConsultationContext.Provider
      value={{
        isOpen,
        openConsultation:  () => setIsOpen(true),
        closeConsultation: () => setIsOpen(false),
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
}

export const useConsultation = () => useContext(ConsultationContext);
