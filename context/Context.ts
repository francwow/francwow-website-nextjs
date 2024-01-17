"use client";

import { createContext, useContext } from "react";
import { LanguageContextType, MenuActiveType } from "../types/Types";

export const LanguageContext = createContext<LanguageContextType | null>(null);
export const MenuActiveContext = createContext<MenuActiveType | null>(null);

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useMenuContext = (): MenuActiveType => {
  const context = useContext(MenuActiveContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};
