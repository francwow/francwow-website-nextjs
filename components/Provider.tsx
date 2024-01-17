"use client";

import { PropsWithChildren, useState } from "react";
import { language, menuActive } from "../types/Types";
import { LanguageContext, MenuActiveContext } from "../context/Context";

const Provider = (props: PropsWithChildren) => {
  const [englishActive, setEnglishActive] = useState<language>(true);
  const [menuActive, setMenuActive] = useState<menuActive>(false);

  return (
    <MenuActiveContext.Provider value={{ menuActive, setMenuActive }}>
      <LanguageContext.Provider value={{ englishActive, setEnglishActive }}>
        {props.children}
      </LanguageContext.Provider>
    </MenuActiveContext.Provider>
  );
};

export default Provider;
