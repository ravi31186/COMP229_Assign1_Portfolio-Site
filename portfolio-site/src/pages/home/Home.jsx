import './Home.css'

export default function Home() {

  return (
    <>
      <div class="home-page-container">
        <h1>Welcome!</h1>
        <p>
          Hi, I’m <strong>Ravindra</strong>.  
          I am a passionate developer who loves working on web and mobile applications. 
          With strong knowledge in React, JavaScript, and backend technologies, I create full-stack solutions for real-world problems.  
          Take a look around, and don’t hesitate to <a href="/contact">reach out</a>—I’d love to hear from you!
          <a href="/about-me"> About me</a> Please review about me page to learn more about my self.
          <a href="/services"> Services</a> My services will provide more details about my skills.
          <a href="/projects"> Projects</a> My Projects will provide more details about my work.
        </p>

        <h2>My Mission</h2>
        <p class="mb-0">
          My mission is to build user-friendly, accessible, and impactful digital solutions that help people connect, learn, and grow.
        </p>
      </div>
    </>
  )
}