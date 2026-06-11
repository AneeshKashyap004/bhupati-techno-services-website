import type { Metadata } from "next";
import { BlogCard } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import { blogs } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "SEO-ready insights on IT infrastructure services, cybersecurity services, managed IT services, cloud solutions, and IT consulting in Bangalore.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-enterprise-gradient pt-32 text-white">
        <div className="container-enterprise py-20">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-200">Blog</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl font-extrabold leading-tight md:text-7xl">
            Enterprise technology insights for Bangalore businesses.
          </h1>
        </div>
      </section>
      <section className="bg-brand-light py-20">
        <div className="container-enterprise">
          <SectionHeader
            eyebrow="SEO Architecture"
            title="Search-ready content pillars."
            description="This blog architecture is prepared for focused keyword clusters around IT infrastructure, cybersecurity, managed IT, cloud, and consulting."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.href} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
