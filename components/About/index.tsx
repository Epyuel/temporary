"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section id="about-us" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-123 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[988/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light.svg"
                alt="About"
                className="dark:hidden rounded-[1rem]"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                About {" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  oneHR
                </span>
              </h2>
              <div className="mb-10">
                <p>
                  We're all about making life easier for you. From tracking attendance to managing leaves, from handling payroll to assessing performance, 
                  we've got it all covered. And the best part? It's all automated, so you can say goodbye to manual errors.
                </p>
              </div>
              <div className="mb-10">
                <p>
                  But we're not just about processes; we're about people. We help you find the right talent for your team and give them the tools they need to grow and succeed.
                  Our platform is designed to engage employees, giving them a voice and a platform to express themselves.
                </p>
              </div>
              <div className="mb-10">
                <p>
                  We also believe in the power of learning. That's why we've built a training module into our platform, complete with quizzes and certifications.
                  And when it's time to say goodbye, we make sure it's a smooth transition, with a comprehensive exit management system.
                </p>
              </div>
              <div className="mb-10">
                <p>
                  oneHR is driven by business values that matter to you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

    </>
  );
};

export default About;
