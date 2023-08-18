import DefaultLayout from "@/layouts/default";

import PlatformSelect from "@/components/design/platformRadioGroup";
import { useState } from "react";
import DesignContext from "@/components/design/context";
import { PlatformType } from "@/components/design/metaConfig/platform";
import { useMemo } from "react";

export default function IndexPage() {
  const [platform, setPlatform] = useState<PlatformType>("bilibili");

  const providerValue = useMemo(() => {
    return {
      platform: platform,
      togglePlatform: (newPlatform: PlatformType) => setPlatform(newPlatform),
    };
  }, [platform]);

  return (
    <DefaultLayout>
      <DesignContext.Provider value={providerValue}>
        <div className="setting">
          <PlatformSelect />
        </div>
        <div className="content"></div>
      </DesignContext.Provider>
    </DefaultLayout>
  );
}
