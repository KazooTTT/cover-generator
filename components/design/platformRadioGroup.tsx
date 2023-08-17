import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useContext } from "react";
import DesignContext from "./context";
import { platformOptions } from "./metaConfig/platform";

export default function App() {
  const { platform, togglePlatform } = useContext(DesignContext);
  return (
    <RadioGroup
      label="请选择你的平台"
      orientation="horizontal"
      value={platform}
      onValueChange={(value) => {
        togglePlatform(value);
      }}
    >
      {platformOptions.map((item) => (
        <Radio value={item.value} key={item.value}>
          {item.label}
        </Radio>
      ))}
    </RadioGroup>
  );
}
