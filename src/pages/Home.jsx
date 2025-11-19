import React from "react";

import Services from "../components/home/Services.jsx";
import Features from "../components/home/Features.jsx";
import Details from "../components/home/Details.jsx";
import ProjectsGrid from "../components/home/ProjectsGrid.jsx";
import Team from "../components/home/Team.jsx";
import ContactForm from "../components/home/ContactForm.jsx";
import Footer from "../components/home/Footer.jsx";
import Header from "../components/home/Header.jsx";
import Opinion from "../components/home/Opinion.jsx";
import Blog from "../components/home/Blog.jsx";
import BackgroundElements from "../images/background_elements.png";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <img
        src={BackgroundElements}
        alt="background"
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative z-10">
        <Header />

        <main>
          <section id="services">
            <Services />
          </section>
          <section id="features">
            <Features />
          </section>
          <section id="details">
            <Details />
          </section>
          <section id="projects">
            <ProjectsGrid />
          </section>
          <section id="team">
            <Team />
          </section>
          <section id="opinion">
            <Opinion />
          </section>
          <section id="blog">
            <Blog />
          </section>
          <section id="contact">
            <ContactForm />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
