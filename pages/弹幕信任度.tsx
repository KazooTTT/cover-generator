import DefaultLayout from "@/layouts/default";

import { useState } from "react";
import DesignContext from "@/components/design/context";
import { PlatformType } from "@/components/design/metaConfig/platform";
import { useMemo } from "react";
import Image from "next/image";

export default function IndexPage() {
  const [platform, setPlatform] = useState<PlatformType>("bilibili");

  const providerValue = useMemo<DesignContextProps>(() => {
    return {
      platform: platform,
      togglePlatform: (newPlatform: PlatformType) => setPlatform(newPlatform),
    };
  }, [platform]);

  return (
    <DefaultLayout>
      <DesignContext.Provider value={providerValue}>
        <div className="flex justify-center">
          <div className="h-[716px] w-[1146px] bg-black relative bg-cover bg-center">
            <div className="absolute inset-0 blur-sm opacity-25 ">
              <Image
                src={`/cover.jpg`}
                height={716}
                width={1146}
                alt="cover"
              ></Image>
            </div>
            <div className="absolute text-white left-32  h-full mt-unit-2xl z-10 flex flex-col -space-y-12">
              <div
                className="text-[9rem] font-bold font-AlimamaFangYuanTiVF text-outline text-gradient-shadow"
                style={{
                  // textShadow: "0 0 1rem rgba(0,0,0,0.6)",
                  letterSpacing: "1rem",
                }}
              >
                <div className="flex items-center">
                  <div>弹幕</div>
                  <Image
                    src={`/毛怪疑惑.png`}
                    className=""
                    height={144}
                    width={144}
                    alt="cover"
                  ></Image>
                </div>
              </div>
              <div
                className="text-[9rem] font-bold font-AlimamaFangYuanTiVF text-outline text-gradient-shadow "
                style={{
                  // textShadow: "0 0 1rem rgba(0,0,0,0.6)",
                  letterSpacing: "1rem",
                }}
              >
                <div>信任度</div>
              </div>
            </div>
            <div className="absolute left-32 bottom-36 z-10">
              <div className="space-x-3 flex mb-2">
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 font-extrabold flex items-center justify-center"
                >
                  <Image
                    className="w-16 h-16 rounded-full mr-2"
                    width={64}
                    height={64}
                    src="/avatar.webp"
                    alt="Rounded avatar"
                  />
                  <div>#Hanser</div>
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg  text-2xl px-5 py-2.5 text-center me-2 mb-2 font-extrabold"
                >
                  #p5r
                </button>
              </div>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center justify-center space-x-2">
                  <Image
                    src={`/calender.png`}
                    className="inline"
                    height={24}
                    width={24}
                    alt="cover"
                  ></Image>
                  <div>2023-11-15</div>
                </span>
              </button>
            </div>
            <div className="absolute right-12 bottom-16">
              <Image
                src={`/挠头.png`}
                height={512}
                width={512}
                alt="cover"
              ></Image>
            </div>
          </div>
        </div>
      </DesignContext.Provider>
    </DefaultLayout>
  );
}
