export type language = boolean;

export type menuActive = boolean;

export type setMenuActive = (value: boolean) => void;

export type setLanguage = (value: boolean) => void;

export type MenuActiveType = {
  menuActive: menuActive;
  setMenuActive: (menuActive: boolean) => void;
};

export type LanguageContextType = {
  englishActive: language;
  setEnglishActive: (language: boolean) => void;
};
