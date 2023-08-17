import { createContext } from "react";

const DesignContext = createContext<DesignContextProps>(
  {} as DesignContextProps,
);

export default DesignContext;
