import DefaultLayout from "@/layouts/default";

import PlatformRadioGroup from "@/components/design/platformRadioGroup";
import { useState } from "react";
import DesignContext from "@/components/design/context";
import { PlatformType } from "@/components/design/metaConfig/platform";

export default function IndexPage() {
  const [platform, setPlatform] = useState<PlatformType>("bilibili");

  return (
    <DefaultLayout>
      <DesignContext.Provider
        value={{
          platform: platform,
          togglePlatform: (newPlatform: PlatformType) =>
            setPlatform(newPlatform),
        }}
      >
        <div className="setting">
          <div className="platform">
            <PlatformRadioGroup />
          </div>
        </div>
        <div className="content"></div>
      </DesignContext.Provider>
    </DefaultLayout>
  );
}
