import Bilibili from "@/components/ui/logo/Bilibili";
import Notion from "@/components/ui/logo/Notion";

const platformOptions = [
  {
    value: "bilibili",
    label: "bilibili",
    icon: <Bilibili />,
  },
  {
    value: "notion",
    label: "notion",
    icon: <Notion />,
  },
];

// get the typeof platform options value
type PlatformType = (typeof platformOptions)[number]["value"];

const defaultValue: PlatformType = platformOptions?.[0].value;

export { platformOptions, defaultValue };
export type { PlatformType };
