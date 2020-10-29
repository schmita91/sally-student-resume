
const headerSection =
        <header>
        <div id="img">
            <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="avatar"></img>
        </div>
        <h1 class="title">About Me</h1>
        </header>


const mainSection = [
    introductionSection,
    educationSection,
    worksSection,
    contactSection,
]
    

const introductionSection =
        <section id="introduction">
        <p>Hi I'm Sally I'm 25 and below this line you'll find more information about me.</p>
    </section>


const worksSection =
        <section id="works">
        <p>I have worked at:</p>
        <div id="works_list">
        <ul>
            <li>Github as Engineer during 2018 and there I have to
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li>Jetbrains as Project manager during 2019 and I'm still working there. My work consist in
                A assumenda autem dolorem doloremque
            </li>
        </ul>
        </div>  
    </section>


const educationSection =
        <section id="Education">
        <p>I have studied at:</p>
        <ul>
            <li>IES BEZMILIANA</li>
            <li>Minnesota University</li>
        </ul>
    </section>
    

const contactSection = 
        <section id="Contact-section">
        <p>My contact information: </p>
        <address id="Contact-info">
            <p>My name is Sally</p>
            <p>My email is: <a href="mailto://sally@IntenetExplorer.old">sally@IntenetExplorer.old</a></p>
            <p>My phone number is: <a href="tel:+34100572415">+34 100 57 24 15</a></p>
        </address>
    </section>
    

const appRoot = document.querySelector('#application-root')

function App() {
    return ([
        headerSection,
        introductionSection,
        educationSection,
        worksSection,
        contactSection,
    ])
}


ReactDOM.render(
    <App />,
    appRoot
  );

