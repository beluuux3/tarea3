import React from "react";
import Team1 from "../../images/team/image1.png";
import Team2 from "../../images/team/image2.png";
import Team3 from "../../images/team/image3.png";
import Team4 from "../../images/team/image4.png";

export default function Team() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h4 className="text-2xl font-bold mb-6">Our team</h4>
        <p className="text-gray-600 mb-8 px-72">
          People from various origins, cultures, and personalities make up our
          team. This blend makes it a powerful team
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="">
            <img
              src={Team1}
              alt="team1"
              className="w-50 h-auto mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            />
            <div className="font-semibold">John Adams</div>
            <div className="text-xs text-gray-500">CEO</div>
          </div>
          <div className="">
            <img
              src={Team2}
              alt="team2"
              className="w-50 h-auto mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            />
            <div className="font-semibold">Carrey Johnson</div>
            <div className="text-xs text-gray-500">Senior Developer</div>
          </div>
          <div className="">
            <img
              src={Team3}
              alt="team3"
              className="w-50 h-auto mx-auto mb-4 hover:scale-110 transition-transform duration-300  "
            />
            <div className="font-semibold">Ray Marie</div>
            <div className="text-xs text-gray-500">Developer</div>
          </div>
          <div className="">
            <img
              src={Team4}
              alt="team4"
              className="w-50 h-auto mx-auto mb-4 hover:scale-110 transition-transform duration-300"
            />
            <div className="font-semibold">Austin Min</div>
            <div className="text-xs text-gray-500">Designer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
