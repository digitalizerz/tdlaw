import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy and Data Protection",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero title="Cookie Policy and Data Protection" />
      <section className="bg-white">
        <div className="site-container max-w-3xl space-y-6 section-y text-base leading-8 text-td-muted">
          <p>
            This website may use cookies or similar technology that are necessary
            to operate the site and the consultation form.
          </p>
          <p>
            Information submitted through the form is used to respond to your
            inquiry. Questions about data protection may be sent to{" "}
            <a href={site.emailHref}>{site.email}</a> or by calling{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
