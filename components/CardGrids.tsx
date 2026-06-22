"use client";

import { BlogCard, IndustryCard, ServiceCard, TestimonialCard } from "@/components/Cards";
import { Stagger, StaggerItem } from "@/components/Motion";
import { blogs, industries, services, testimonials } from "@/data/site";

export function ServicesGrid() {
  return (
    <Stagger className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <StaggerItem key={service.slug}>
          <ServiceCard {...service} href={`/services#${service.slug}`} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function IndustriesGrid() {
  return (
    <Stagger className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry) => (
        <StaggerItem key={industry.title}>
          <IndustryCard {...industry} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function TestimonialsGrid() {
  return (
    <Stagger className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <StaggerItem key={testimonial.quote}>
          <TestimonialCard {...testimonial} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function BlogGrid() {
  return (
    <Stagger className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
      {blogs.map((blog) => (
        <StaggerItem key={blog.href}>
          <BlogCard {...blog} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
