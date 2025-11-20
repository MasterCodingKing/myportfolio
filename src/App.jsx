import './App.css'
import geminiImg from './assets/Gemini_Generated_Image_8r0lqt8r0lqt8r0l.png'
import bmis from './assets/bmis.png'
import RESTO from './assets/RESTO.png'
import INVENTORY from './assets/INVENTORY.png'
import INVENTORYMANAGEMENT from './assets/INVENTORYMANAGEMENT.png'

function App() {
  const skills= [
  'PHP',
  'MySQL',
  'JavaScript',
  'HTML/CSS',
  'Ajax and API integration',
  'Backend Development',
  'System Maintenance',
  'Customer Support',
  'Problem Solving',
  'Team Collaboration',
  'Libraries (Bootstrap, jQuery, etc.)',
  'Server management',
  'cPanel',
  'FTP',
  'QA (Quality Assurance)', 'React', 'Laravel'
];

// style home
const style = {
  discription: {
    fontSize:34,
    fontWeight:700,
  },
  parah:{

    fontSize:18
  }
}

  return (
    <>
      {/* Sticky Navbar */}
      <div className='container-fluid gap-4'> 
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3 design-1 shadow-sm">
        <div className="container">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Project</a></li>
              <li className="nav-item"><a className="nav-link " href="#skills">Skills</a></li>

              <li className="nav-item btn btn-outline-info btn-sm">
                <a className="nav-link" href="#contact" >
                  Contact
                </a>
                
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <div className="page-container">
        <section id="home" className="page-section">
          <div className='container info-home gap-2'>
            <div className='row align-items-center'>
            <div className='discription col-lg-6' >
               <p style={style.discription}> I'am Christian, a Web developer.</p>
                <p style={style.parah}>
                  I build scalable, user-friendly web applications using <b> Laravel, React, PHP, MySQL, JavaScript, HTML, CSS, and modern libraries</b>.
                </p>
            </div>
            
              <div className="col-lg-6">
                <img
                  src={geminiImg}
                  className="img-fluid rounded shadow-sm"
                  alt="BMIS"
                />
            </div>
            </div>
          </div>
        </section>
        <section id="about" className="page-section">
          <div className='info-about'>
            <h1>About Me</h1><br />
            <p>
            Hi! I’m Christian Julius Bonaobra, a web developer with over two years of experience as an IT Specialist, who loves building practical, clean, and working systems using PHP, MySQL, JavaScript, HTML, and CSS. I enjoy creating dynamic and user-friendly features through AJAX, APIs, Bootstrap, jQuery, and other tools that make development smoother and faster. I’ve worked on backend development, server and cPanel management, FTP deployment, system maintenance, and even customer support and QA, so I understand how a system works from development to real-world use. I’m also someone who’s always eager and willing to learn. I like improving my skills, exploring new technologies, and growing through real projects and teamwork.
            </p>

            
          </div>
        </section>
     <section id="projects" className="projects-section py-5">
      <div className="container">
        
        {/* Project 1 */}
        <div className="row align-items-center project-card mb-5 p-4">
          <h2 className="text-center mb-5 fw-bold">Projects</h2>
          <div className="col-lg-6">
            <img
              src={bmis}
              className="img-fluid rounded shadow-sm"
              alt="BMIS"
            />
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <h3 className="fw-semibold mb-3">BARANGAY MANAGEMENT SYSTEM</h3>
            <p className="text-muted">
              BMIS is a digital information system used by barangays to encode, manage, and retrieve resident and community data. It centralizes all barangay records into a single, reliable database, allowing officials to efficiently deliver frontline services, maintain documentation, and generate accurate reports for administrative and government use.
            </p>
            <a className="btn btn-outline-primary view-btn mt-3" href='https://mainnamin.bmis-staging.net/index.php'>View Project</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="row align-items-center project-card mb-5 p-4 flex-lg-row-reverse">
          <div className="col-lg-6">
            <img
              src={INVENTORY}
              className="img-fluid rounded shadow-sm"
              alt="Resto Inventory System"
            />
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <h3 className="fw-semibold mb-3">RESTO INVENTORY SYSTEM</h3>
            <p className="text-muted">
              A Resto Inventory System is a digital platform designed to track, manage, and monitor a restaurant’s stocks, supplies, ingredients, and consumption. It provides real-time visibility of inventory levels, minimizes wastage, and ensures that the restaurant always has the right amount of items needed for daily operations.
            </p>
            <a className="btn btn-outline-primary view-btn mt-3" href='https://resto.m-techsolutionsphilippinescorp.com/'>View Project</a>
          </div>
        </div>
          {/* Project 2 */}
        <div className="row align-items-center project-card mb-5 p-4 ">
          <div className="col-lg-6">
            <img
              src={RESTO}
              className="img-fluid rounded shadow-sm"
              alt="Resto Inventory System"
            />
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <h3 className="fw-semibold mb-3">POINT OF SALE RESTO</h3>
            <p className="text-muted">
              A Restaurant POS System is a digital platform used to record customer orders, process payments, and manage day-to-day sale transactions in a restaurant. It integrates front-of-house operations (ordering and billing) with back-office processes (inventory, reporting, and user management) to improve service speed, accuracy, and operational efficiency.
            </p>
            <a className="btn btn-outline-primary view-btn mt-3" href='https://resto.m-techsolutionsphilippinescorp.com/'>View Project</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="row align-items-center project-card mb-5 p-4 flex-lg-row-reverse">
          <div className="col-lg-6">
            <img
              src={INVENTORYMANAGEMENT}
              className="img-fluid rounded shadow-sm"
              alt="Inventory System"
            />
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <h3 className="fw-semibold mb-3">INVENTORY SYSTEM</h3>
            <p className="text-muted">
             An Inventory System is a digital platform designed to track, manage, and monitor a company’s products, supplies, and stock levels in real time. It helps businesses maintain accurate inventory data, streamline stock movement, and ensure that items are always available when needed.
            </p>
            <a className="btn btn-outline-primary view-btn mt-3" href='http://its-moa.m-techsolutionsphilippinescorp.com/index.php'>View Project</a>
          </div>
        </div>

      </div>
    </section>

        <section id="skills" className="page-section">
          <div className='info-skills'>
              <h3>SKILLS</h3>
              <div className='col-md-12  gap-3'>
                  {
                    skills.map((skill) => (
                        <button className='btn btn-outline-primary btn-lg view-btn mt-3 m-2'>{skill} </button>
                    ))
                  } 
              </div>
          </div>
        </section>
        <section id="contact" className="page-section">
                 <div className='info-contact'>
                    <h1>Let's Work Together</h1>
                    <p>I’m open to collaboration and professional opportunities. Feel free to reach out to discuss projects, ideas, or potential partnerships.</p>
                    <p> <a href="">09462802364</a> | <a href="christianjuliusbonaobra7@gmail.com">christianjuliusbonaobra7@gmail.com</a> | <a href="https://www.linkedin.com/in/christian-julius-bonaobra-655433281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
LinkedIn</a></p>
                  </div>

        </section>
      </div>
      </div>
    </>
  )
}

export default App
