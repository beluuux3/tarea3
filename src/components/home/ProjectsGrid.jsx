import React from "react";
import Project1 from "../../images/projects/image1.png";
import Project2 from "../../images/projects/image2.png";
import Project3 from "../../images/projects/image3.png";
import Project4 from "../../images/projects/image4.png";
import Project5 from "../../images/projects/image5.png";
import Project6 from "../../images/projects/image6.png";
import Ellipse1 from "../../images/projects/Ellipse_30.png";
import Ellipse2 from "../../images/projects/Ellipse_31.png";
import Vector from "../../images/projects/Vector_9.png";

export default function ProjectsGrid() {
  return (
    <>
      <section className="relative py-20 w-screen ">
        <img
          src={Ellipse1}
          alt="circle decorations"
          className="absolute h-[600px] left-[100px] top-[700px]"
        />
        <img
          src={Ellipse2}
          alt="circle decorations"
          className="absolute h-[600px] left-[1100px] top-[100px]"
        />

        <img
          src={Vector}
          alt="circle decorations"
          className="absolute w-[1,122px] h-[25px] top-[500px] left-[1400px]"
        />
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Our Projects</h2>
          <p className="text-gray-600 mb-12 text-sm max-w-2xl mx-auto">
            A project is a single or team activity, combining research and
            design with best effort. Here are some of our team's projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto bg-[#C4C4C4]/15 rounded-2xl p-3 shadow-lg ">
            <div className="flex flex-col gap-6 ">
              <div className=" rounded-2xl p-3">
                <img
                  src={Project1}
                  alt="project 1"
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className=" rounded-2xl p-3">
                <img
                  src={Project2}
                  alt="project 4"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className=" rounded-2xl p-3">
                <img
                  src={Project3}
                  alt="project 2"
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className=" rounded-2xl p-3">
                <img
                  src={Project4}
                  alt="project 5"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className=" rounded-2xl p-3">
                <img
                  src={Project5}
                  alt="project 3"
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className=" rounded-2xl p-3">
                <img
                  src={Project6}
                  alt="project 6"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition">
              View More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
