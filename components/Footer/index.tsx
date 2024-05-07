"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import AddCompanyInformation from "../Modals/addCompanyInformation";
import { useState } from "react";

const Footer = () => {
  const [openAddCompanyInfo,setOpenAddCompanyInfo] = useState<boolean>(false);
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="index.html" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-light.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-dark.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5">
                  Empowering People, Simplifying Processes oneHR, Your Partner in Success!
                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  contact
                </p>
                <a
                  href="#"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  hello@solid.com
                </a>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-around md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Quick Links
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/"
                        className="mb-3 inline-block hover:text-[#fdcb4e]"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about-us"
                        className="mb-3 inline-block hover:text-[#fdcb4e]"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#features"
                        className="mb-3 inline-block hover:text-[#fdcb4e]"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FAQ"
                        className="mb-3 inline-block hover:text-[#fdcb4e]"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#bonus-modules"
                        className="mb-3 inline-block hover:text-[#fdcb4e]"
                      >
                        Bonus Modules 
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Get in touch
                  </h4>

                  <ul>
                    <li>
                      <Typography
                        className="mb-3 inline-block hover:text-primary cursor-pointer"
                        onClick={()=>setOpenAddCompanyInfo(true)}
                      >
                        Request Demo
                      </Typography>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-center lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} OneHR. All rights reserved
              </p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>

      <AddCompanyInformation
        open= {openAddCompanyInfo}
        setOpen= {setOpenAddCompanyInfo}
      />
    </>
  );
};

export default Footer;
