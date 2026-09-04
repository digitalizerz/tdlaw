import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" />
      <section className="bg-white">
        <div className="site-container max-w-3xl space-y-6 section-y text-base leading-8 text-td-muted">
          <p>
            This website is provided by {site.name} for general information about
            the firm and its practice areas. Nothing on this site is legal advice
            for your specific situation.
          </p>
          <p>
            Sending a message through the contact form, calling, or emailing the
            firm does not create an attorney-client relationship. That
            relationship is formed only after the firm agrees to represent you
            and a written engagement is in place.
          </p>
          <p>
            Do not send confidential information until you have confirmed that
            the firm can represent you. The firm’s office is at {site.address.line1},{" "}
            {site.address.line2}. You may reach us at {site.phone} or {site.email}.
          </p>
        </div>
      </section>
    </>
  );
}
