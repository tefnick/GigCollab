import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/src/config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make gigs more&nbsp;
        <span className={title({ color: "blue" })}>collaborative&nbsp;</span>,
            <br />
        </span>
        <span className={title()}>
          and&nbsp;
        </span>
          <span className={title({ color: "green" })}>engaging</span>
          <span className={title()}>.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Lets get you out there.
        </div>
      </div>
    </section>
  );
}
