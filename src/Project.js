import './Project.css';
function Project(){
    return(
        <div id="project">
        <h1 style={{marginTop: '0',marginBottom: '4%',textAlign: 'center', paddingTop: '60px', color: '#6da5d6'}}>My Projects</h1>
        <div id="my-projects">
            <div>
                <img src="./ScreenShot-Dashboard.png" alt=""/>
                <p>My dashboard page presents an elegant and interactive data hub, offering real-time insights at a
                    glance. Its user-friendly design empowers users to track and analyze key metrics effortlessly</p>
                <a href="https://drive.google.com/uc?export=view&id=1H1tkKXbtEDKdHMbDjjvDne8FvoT9da99" target='_blank' style={{position: 'relative',bottom: '-21px'}}>Visit Page</a>
            </div>
            <div>
                <img src="./Screenshot -Planet.png"/>
                <p>Welcome to My Planet's Portal - Your Gateway to Earth's Beauty and Sustainability. Explore the
                    wonders of our planet, discover ways to protect it, and join the global movement for a greener
                    future.</p>
                <a href="https://drive.google.com/uc?export=view&id=1eLIxWfHRiHsDTNwzq-5NWN8A40ws1TOQ" target='_blank' style={{position: 'relative',bottom: '-21px'}}>Visit Page</a>
            </div>
            <div>
                <img src="./SS-LandingPage.jpeg" alt=""/>
                <p>My Vegan Food Order website showcases an efficient front-end architecture with optimized CSS and
                    responsive HTML5, delivering a seamless, data-secure user experience for exploring our diverse
                    plant-based offerings.</p>
                <a href="https://drive.google.com/uc?export=view&id=1VEt4osVEzHDMXdSvqRewQIXADtUg5rHl" target='_blank' style={{position: 'relative',bottom: '-5px;'}}>Visit Page</a>
            </div>
        </div>
    </div>
    );
}
export default Project;