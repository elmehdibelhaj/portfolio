import { motion } from "motion/react";

import { Container } from "@/components/layout";
import { trustedCompanies } from "@/data/trusted-by.data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function TrustedBy() {
  return (
    <section
      aria-labelledby="trusted-by-title"
      className="border-b border-[color:var(--border)] py-12"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.p
            id="trusted-by-title"
            variants={fadeUp}
            className="text-center text-[20px] font-semibold text-[color:var(--foreground)]"
          >
            Trusted by teams at companies including
          </motion.p>

          <div className="mt-8 flex w-full flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-6 lg:gap-x-16">
            {trustedCompanies.map(({ name, logo, darkLogo, url }) => (
              <motion.a
                key={name}
                variants={fadeUp}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name} website`}
                title={name}
                className={`trusted-company trusted-company-${name.toLowerCase()}`}
              >
                <img
                  src={logo}
                  alt={name}
                  className="trusted-logo trusted-logo-light"
                />

                <img
                  src={darkLogo}
                  alt=""
                  aria-hidden="true"
                  className="trusted-logo trusted-logo-dark"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}