import React from "react";
import { RadioGroup, Radio, RadioProps, cn } from "@nextui-org/react";
import { useContext } from "react";
import DesignContext from "./context";
import { platformOptions } from "./metaConfig/platform";
import { FC } from "react";

export const CustomRadio: FC<RadioProps> = (props) => {
  const { children, ...otherProps } = props;
  console.log("%c Line:10 🍫 otherProps", "color:#e41a6a", otherProps);

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
      }}
    >
      {children}
    </Radio>
  );
};

export default function App() {
  const { platform, togglePlatform } = useContext(DesignContext);
  return (
    <RadioGroup
      label="平台"
      orientation="horizontal"
      value={platform}
      onValueChange={(value) => {
        togglePlatform(value);
      }}
    >
      {platformOptions.map((item) => (
        <CustomRadio key={item.value} value={item.value}>
          {item.icon}
        </CustomRadio>
      ))}
    </RadioGroup>
  );
}
