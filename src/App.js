import React from "react";
import ProjectCard from "./ProjectCard";
import InteractiveCanvas from "./InteractiveCanvas";
import "./App.css";

function App() {
  const projects = [
    {
      title: "Socialite",
      description: "Social networking platform for students.",
      image: "13kb.jpg",
      link: "https://socialite-alpha.vercel.app/",
    },
    {
      title: "Agnihotri-aerospace",
      description: "Aerospace engineering solutions company.",
      image: "Black Instagram Highlight Icons - SPEAKOFTHEANGEL.jpg",
      link: "https://agnihotriaerospace.com/",
    },
    {
      title: "LLiftn",
      description: "Bridging the gap between loss and financial security, simplifying insurance for your family during tough times.",
      image: "contacts.jpg",
      link: "https://lliftn.com/",
    },
    {
      title: "Cactus Dashboard",
      description: "Dashboard for managing business data.",
      image: "download (4).jpg",
      link: "https://cactus-001.vercel.app/dashboard",
    },
    {
      title: "Website 5",
      description: "E-commerce platform for electronics.",
      image: "download (2).jpg",
      link: "https://www.figma.com/proto/zAIbcnlua5JFjk7o0hSoLL/chatting-app-(Community)?node-id=9-8&node-type=canvas&t=e2qu7Tq0mt9ccvl6-1&scaling=scale-down&content-scaling=fixed&page-id=9%3A7&starting-point-node-id=9%3A8&show-proto-sidebar=1://www.figma.com/design/zAIbcnlua5JFjk7o0hSoLL/chatting-app-(Community)?node-id=9-7&node-type=canvas&t=iTVkU1TfZdjoRGba-0https://www.figma.com/proto/YLaxhOqRcqSMINNtqYdSU7/login-page-(Community)?node-id=4-29&node-type=canvas&t=4WvwEj54EMw6eMxS-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A29",
    },
    {
      title: "Website 6",
      description: "Educational resources for schools.",
      image: "download (3).jpg",
      link: "https://https://www.figma.com/proto/zAIbcnlua5JFjk7o0hSoLL/chatting-app-(Community)?node-id=9-8&node-type=canvas&t=e2qu7Tq0mt9ccvl6-1&scaling=scale-down&content-scaling=fixed&page-id=9%3A7&starting-point-node-id=9%3A8&show-proto-sidebar=1.com",
    },
  ];

  return (
    <div className="App">
      <InteractiveCanvas />
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;
