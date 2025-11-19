import React from "react";
import Icon1 from "../../images/features/icon1.png";
import Icon2 from "../../images/features/icon2.png";
import Icon3 from "../../images/features/icon3.png";
import Icon4 from "../../images/features/icon4.png";
import Icon5 from "../../images/features/icon5.png";
import Icon6 from "../../images/features/icon6.png";

const items = [
  {
    icon: Icon1,
    title: "Encrypted Mail",
    text: "A process of encrypting email communications",
  },
  {
    icon: Icon2,
    title: "Display Sharing",
    text: "With other participants, you may share your screen",
  },
  {
    icon: Icon3,
    title: "Private Notebook",
    text: "Private Notebook is an application that is protected",
  },
  {
    icon: Icon4,
    title: "App App Assistance",
    text: "App Assistant is quickly and effectively run the system",
  },
  {
    icon: Icon5,
    title: "Multiple Printing",
    text: "Our canvas prints are crafted on top-notch canvas",
  },
  {
    icon: Icon6,
    title: "Free Sketch",
    text: "Our canvas prints are crafted on top-notch canvas",
  },
];

export default function Features() {
  return (
    <section className="relative py-16">
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Features</h2>
        <p className="text-gray-600 mb-8 text-sm">
          We provide a number of excellent features that will undoubtedly
          improve the user experience. We also provide a better support system
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-transparent"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-4 lg:w-30 lg:h-30">
                <img
                  src={it.icon}
                  alt={it.title}
                  className="w-10 h-10 lg:w-25 lg:h-25"
                />
              </div>
              <h4 className="font-medium text-[16px] text-gray-600 mb-1">
                {it.title}
              </h4>
              <p className="text-gray-500 text-md">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
