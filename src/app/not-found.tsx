import { ArrowLink } from "@/components/ArrowLink";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found">
        The page you requested is not available.
      </PageHero>
      <section className="bg-white">
        <div className="site-container pb-20">
          <ArrowLink href="/">Return home</ArrowLink>
        </div>
      </section>
    </>
  );
}
