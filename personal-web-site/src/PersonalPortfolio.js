import React from 'react';
import './personalPortfolio.css';

export default class PersonalPortfolio extends React.Component {

  constructor() {
    super();
    this.state = {
      menuClass: false,
      scrollClass: false,
      toggleButton: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll = () => {
    let scroll = document.documentElement.scrollTop;

    if(scroll > 1) {
      this.setState({
        menuClass: true,
      })
    } else {
      this.setState({
        menuClass: false,
      })
    }

    if(scroll > 400) {
      this.setState({
        scrollClass: true,
      })
    } else {
      this.setState({
        scrollClass: false,
      })
    }
  }

  handleToggleButton = () => {
    if(this.state.toggleButton === true) {
      this.setState({
        toggleButton: false
      })
    } else {
      this.setState({
        toggleButton: true
      })
    }
  }
  
  render = () => {
    return ( 
      <div className="page-container">
        <a href="#top" className={`scroll-top ${this.state.scrollClass ? '' : 'scroll-top-hidden'}`}><i className="fa fa-angle-up"></i></a>
        <div id="home" className="header">
          <nav className={`navbar-default ${this.state.menuClass ? 'top-nav-collapse' : ''}`}>
            <button className="navbar-toggle" onClick={this.handleToggleButton.bind(this)}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className={`menu-container ${!this.state.toggleButton ? 'hidden' : ''}`}>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#cv">Download CV</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <article className="banner-container">
            <div className="banner-table">
              <h2>I am Seker Can Cepni</h2>
              <h1>Front-end Developer</h1>
              <div className="scroll-btn wow fadeInDown animated">
                <a href="#about" className="page-scroll">
                  <span className="mouse"><span className="weel"><span></span></span></span>
                </a>
              </div>
            </div>
          </article>
        </div>
        <section id="about" className="about-wrapper">
          <div className="relative">
            <div className="column-container">
              <h3>About Me</h3>
              <p>Hi there. I’m Seker Can Cepni. I am a Front-end Developer. I graduated from computer engineering department of Kadir Has University. I have knowledge HTML, CSS, JAVASCRIPT, REACT, responsive design and so on. I am one of the followers of new technologies.</p>
              <h2 className="classic">– S. Cepni</h2>
            </div>
            <div className="column-container circle-shape">
              <circle-progress _ngcontent-c0="" class="copy">
                <svg height="140" width="140">
                  <circle cx="70" cy="70" r="60" fill="none" stroke="#353333e6" strokeWidth="5"></circle>
                  <path d="M 70 10 
                    A 60 60 0 1 0 130 70" stroke="#63606099" strokeWidth="5" fill="none" strokeDasharray="60.6,221.6"></path>
                  <animate attributeName="stroke-dasharray" from="0,1" to="125.6,125.6" dur="3s"/>           
                  <text textAnchor="middle" x="70" y="70">
                    <tspan fontSize="14" fill="#444444">HTML/CSS</tspan>
                  </text>
                  <text textAnchor="middle" fill="#A9A9A9" x="70" y="85">
                    <tspan fontSize="12">85%</tspan>
                  </text>
                </svg>
              </circle-progress>
              <circle-progress _ngcontent-c0="" class="copy">
                <svg height="140" width="140">
                  <circle cx="70" cy="70" r="60" fill="none" stroke="#353333e6" strokeWidth="5"></circle>
                  <path d="M 70 10 
                    A 60 60 0 1 0 130 70" stroke="#63606099" strokeWidth="5" fill="none" strokeDasharray="93.6,195.6"></path>
                  <animate attributeName="stroke-dasharray" from="0,1" to="125.6,125.6" dur="3s"/>           
                  <text textAnchor="middle" x="70" y="70">
                    <tspan fontSize="14" fill="#444444">JAVASCRIPT</tspan>
                  </text>
                  <text textAnchor="middle" fill="#A9A9A9" x="70" y="85">
                    <tspan fontSize="12">75%</tspan>
                  </text>
                </svg>  
              </circle-progress>
              <circle-progress _ngcontent-c0="" class="copy">
                <svg height="140" width="140">
                  <circle cx="70" cy="70" r="60" fill="none" stroke="#353333e6" strokeWidth="5"></circle>
                  <path d="M 70 10
                    A 60 60 0 1 0 130 70" stroke="#63606099" strokeWidth="5" fill="none" strokeDasharray="125.6,160.6"></path>
                  <animate attributeName="stroke-dasharray" from="0,1" to="125.6,125.6" dur="3s"/>           
                  <text textAnchor="middle" x="70" y="70">
                    <tspan fontSize="14" fill="#444444">REACT</tspan>
                  </text>
                  <text textAnchor="middle" fill="#A9A9A9" x="70" y="85">
                    <tspan fontSize="12">65%</tspan>
                  </text>
                </svg>  
              </circle-progress>
            </div>
          </div>
        </section>
        <section className="info-container">
          <div className="info-wrapper">
            <div className="title-wrapper">
              <div className="title">
                <h3>Trust Me</h3>
                <p>I follow front end technology. I'm trying to make it easier for users to navigate on the website. I can find solutions to problems and implement them in the right direction. I take care to work harmoniously within the team.</p>
              </div>
            </div>
            <div className="ability-container">
              <div className="inline">
                <div className="item-container">
                  <h4 className="item-title">I'm researcher</h4>
                  <p className="item-text">Front end web development involves many different technologies, and the landscape is constantly changing. I always enjoy exploring and learning new technologies.</p>
                </div>
                <div className="item-container">
                  <h4 className="item-title">I'm curious</h4>
                  <p className="item-text">I am curious about front-end development technologies. I am follow technologies and I try to understand how them work.</p>
                </div>
              </div>
              <div className="inline">
                <div className="item-container">
                  <h4 className="item-title">I'm brave</h4>
                  <p className="item-text">I do not afraid to learn new information. I do attacks for improve myself. I try to join new projects</p>
                </div>
                <div className="item-container">
                  <h4 className="item-title">I'm communicative</h4>
                  <p className="item-text">I can contact easily with other people. I do not shy to say my idea. Therefore, I can be in communication with other persons.</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        <section className="image-container quotation-img">
          <div className="explanation">
            <p><i className="fa fa-quote-left" aria-hidden="true"></i></p>
            <p>Front-end development is like an ocean. You happen to have a ship, but no map. First learn the shallow waters, then go deep.</p>
            <h2 className="no-margin classic">Ivan</h2>
          </div>
        </section>
        <section id="services" className="info-container">
          <div className="info-wrapper">
            <div className="title-wrapper">
              <div className="title">
                <h3>What I Do</h3>
                <p>There are so many options available not only programming language-wise, but regarding tools, frameworks, and technologies as well.</p>
              </div>
            </div>
            <div className="ability-container">
              <div>
                <div className="item-container">
                  <h4 className="item-title">Web Development</h4>
                  <p className="item-text">I have basic informations (HTML, CSS, JAVASCRIPT) for front-end development.</p>
                </div>
                <div className="item-container">
                  <h4 className="item-title">Seo</h4>
                  <p className="item-text">SEO is a very important issue on web world. I pay attention SEO rules on all my projects.</p>
                </div>
              </div>
              <div>
                <div className="item-container">
                  <h4 className="item-title">Responsive Design</h4>
                  <p className="item-text">Responsive design is an important part of web design. I prepare each project according to mobile compatibility.</p>
                </div>
                <div className="item-container">
                  <h4 className="item-title">Software Workflow</h4>
                  <p className="item-text">I use software workflow tools (Like Bıtbucket, Webpack). These tools allow me to work more effectively on the project</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        <section id="cv" className="image-container download-cv-img">
          <div className="explanation">
            <h2><span>Download CV</span></h2>
            <p><i className="icon fa fa-file-pdf-o" aria-hidden="true"></i></p>
            <p>Working hard for something we don't care about is called stress: Working hard for something we love is called passion.</p>
            <a href="/sekercancepniCV.pdf" download className="download-btn">Download Cv</a>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="contact-container">
            <h3>Contact Me</h3>
            <p>Feel free to contact me to provide some feedback on my templates, give me suggestions for new templates and themes, or to just say hello!</p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
                <p>sekercancepnii@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="fa fa-mobile fa-3x" aria-hidden="true"></i>
                <p>0 536 331 75 12</p>
              </div>
              <div className="contact-item">
                <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                <p>Istanbul , Bahcelievler</p>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer">
            <a href="#home"><i className="fa fa-angle-double-up fa-2x"></i></a>
            <ul>
              <li>
                <a href="https://www.facebook.com/sekercan.cepni" target="_blank"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="http://instagram.com/sekercancepni" target="_blank"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sekercancepni/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="https://github.com/sekercancepni" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}