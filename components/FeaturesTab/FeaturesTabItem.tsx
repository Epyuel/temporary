import React, { ComponentType } from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { StarBorder } from "@mui/icons-material";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark,aspect } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          {featureTab.lists.length?
          <ul className="mb-5 list-none">
            {
              featureTab.lists.map((item:any[],key)=>{
                const desc:string = item[0];
                const icon:any = item[1];
                return (
                  <li key={key} className="flex items-center mb-2">
                    {icon?icon:''}
                    {desc}
                  </li>
                )
              }) 
            }
          </ul>
          :''
          }
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className={`relative mx-auto hidden ${aspect} max-w-[550px] md:block md:w-1/2`}>
          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div>
      </div>
      {/* aspect-[562/366] */}
    </>
  );
};

export default FeaturesTabItem;
