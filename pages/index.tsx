import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const config = [
    { title: "弹幕信任度", path: "/barrageTrust" },
    { title: "嘴动变音", path: "/changeVoice" },
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title({ color: "green" })}>目录</h1>
        <ul className="space-y-1 flex flex-col justify-center items-center">
          {config.map((item) => (
            <li key={item.path}>
              <Link
                as={NextLink}
                className={buttonStyles({
                  variant: "bordered",
                })}
                href={`/cover${item.path}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </DefaultLayout>
  );
}
