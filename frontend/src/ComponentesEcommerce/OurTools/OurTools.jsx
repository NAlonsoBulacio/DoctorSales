import React from "react";

const OurTools = () => {
  const icons = [
    "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",
    "https://scontent.ftuc2-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=e280be&_nc_ohc=xxUtz3mLTtwAX8zAym_&_nc_ht=scontent.ftuc2-1.fna&oh=00_AfBv2ugB-tSz1DUv9fnazgCndWZN2olHY0s2mlemO_QJ0A&oe=65D234F9",
    "https://marketing-assets.calendly.com/media/logo.svg",
    "https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohologowhitebg.svg",
  ];

  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center space-y-4">
        <div className="w-full">
          <h1 className="text-gray-800 text-4xl font-poppins-400 tracking-widest">
            Nuestras Integraciones<span className="text-purple-800">:</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-y-4 lg:gap-y-0 gap-x-6 lg:gap-x-8 px-0 lg:px-20">
          {icons?.map((tool, index) => (
            <div className="w-1/3 lg:w-1/6" key={index}>
              <img className="w-full" src={tool} alt="tool" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTools;
