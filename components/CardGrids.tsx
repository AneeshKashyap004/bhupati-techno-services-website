"use client";

import { BlogCard, IndustryCard, ServiceCard, TestimonialCard } from "@/components/Cards";
import { Stagger, StaggerItem } from "@/components/Motion";
import { images } from "@/data/images";
import { blogs, industries, services, testimonials } from "@/data/site";

export function ServicesGrid() {
  return (
    <Stagger className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <StaggerItem key={service.slug}>
          <ServiceCard
            {...service}
            href={`/services#${service.slug}`}
            image={images.services[service.slug as keyof typeof images.services]}
          />
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
          <IndustryCard
            {...industry}
            image={images.industries[industry.title as keyof typeof images.industries]}
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function TestimonialsGrid() {
  return (
    <Stagger className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <StaggerItem key={testimonial.quote}>
          <TestimonialCard {...testimonial} avatar={images.testimonials[index]} />
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
          <BlogCard
            {...blog}
            image={images.blogs[blog.category as keyof typeof images.blogs]}
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
