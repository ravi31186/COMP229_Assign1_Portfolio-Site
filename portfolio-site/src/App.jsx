import { Routes, Route, Link } from 'react-router-dom';
import React from "react";
import './App.css'
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import logo from "./assets/logo.png";

/*
File Name: app.js
Student Name: Ravindra Patil
Student ID: 300611610
Date: 2025-09-14

Description: Handles interactive behavior for the portfolio site.
*/
function App() {
  return (
    <>
      {/* ======= Navigation Bar ======= */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="#">
          <img
            src={logo}
            width="60"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about-me">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/services">Services</a>
            </li>
             <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ======= Routes ======= */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
