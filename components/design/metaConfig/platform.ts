const platformOptions = [
  {
    value: "bilibili",
    label: "bilibili",
  },
  {
    value: "notion",
    label: "notion",
  },
];

// get the typeof platform options value
type PlatformType = (typeof platformOptions)[number]["value"];

const defaultValue: PlatformType = platformOptions?.[0].value;

export { platformOptions, defaultValue };
export type { PlatformType };
