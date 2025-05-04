import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-8 text-theme mx-auto">
      <h2 className="text-4xl font-bold mb-6">About Our Project</h2>
      <p className="text-lg mb-8">
        Welcome to our <span className="font-semibold">Home Work Demo</span>{" "}
        project! This application was created to demonstrate basic concepts of
        React development, routing with <strong>React Router</strong>, and
        simple navigation between pages.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-base mb-8">
        Our goal is to provide a simple, easy-to-understand example that helps
        beginners learn how to structure React projects and connect different
        parts of an application using navigation links.
      </p>
      <p className="text-base mb-8">
        Our goal is to provide a simple, easy-to-understand example that helps
        beginners learn how to structure React projects and connect different
        parts of an application using navigation links.
      </p>
      <p className="text-base mb-8">
        Our goal is to provide a simple, easy-to-understand example that helps
        beginners learn how to structure React projects and connect different
        parts of an application using navigation links.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>React</li>
        <li>React Router</li>
        <li>HTML & CSS</li>
        <li>TailwindCSS</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Future Plans</h2>
      <p className="text-base mb-8">
        In the future, we plan to expand this demo by adding authentication,
        protected routes, and maybe even a backend!
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-base">
        If you have any questions or suggestions, feel free to reach out to us
        via GitHub or email.
      </p>
    </div>
  );
};

export default About;
