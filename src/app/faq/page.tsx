import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ">
        For questions about representation, please call {site.phone} or write{" "}
        {site.email}. The firm is on call 24/7.
      </PageHero>
      <section className="bg-white">
        <div className="site-container pb-20">
          <ArrowLink href="/contact/">Request a consultation</ArrowLink>
        </div>
      </section>
    </>
  );
}
