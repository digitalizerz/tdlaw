import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complaints Policy",
};

export default function ComplaintsPage() {
  return (
    <>
      <PageHero title="Complaints Policy" />
      <section className="bg-white">
        <div className="site-container max-w-3xl space-y-6 section-y text-base leading-8 text-td-muted">
          <p>
            If you have a concern about the firm or this website, please contact
            T.D. Armstrong Law Firm, P.C. directly.
          </p>
          <p>
            Phone: <a href={site.phoneHref}>{site.phone}</a>
            <br />
            Email: <a href={site.emailHref}>{site.email}</a>
            <br />
            {site.address.line1}, {site.address.line2}
          </p>
        </div>
      </section>
    </>
  );
}
