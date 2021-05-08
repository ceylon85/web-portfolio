import React from 'react'
import './css/Project.css';
import { Zoom } from 'react-reveal';

function Project() {
    return (
        <div className="projectSection">
                 <div className="title">
                <Zoom>
                    <h1>My most recent work</h1>
                </Zoom>
            </div>
            <div className="project__container">
                <div className="project-card__container">
                    <Zoom>
                        <WorkCard
                            title="n"
                            img={a}
                            link="https://capillamarin.org.ar"
                            github="https://github.com/mariscottin/capillamarin"
                            subtitle="Church website with custom-made admin portal."
                            details={['Node JS for backend', 'EJS as View Engine', 'PostgreSQL as DB', 'AWS S3 for media storage', 'Deployed to Heroku']}
                        />
                    </Zoom>
                </div>
                <div className="project-card__container">
                    <Zoom>
                        <WorkCard
                            title="Green Book Academy"
                            img={a}
                            link="https://www.greenbookacademy.com"
                            github="https://github.com/mariscottin/greenbook"
                            subtitle="Landing page for customer"
                            details={['React JS', 'Bootstrap', 'i18next for language translation', 'Deployed to Heroku']}
                        />
                    </Zoom>
                </div>
                <div className="project-card__container">
                    <Zoom>
                        <WorkCard
                            title="Netflix Clone"
                            img={a}
                            link="https://netflix-clone-4685d.web.app/"
                            github="https://github.com/mariscottin/Netflix-clone"
                            subtitle="Built with React.js with auth and payment"
                            details={['React JS', 'Redux', 'Firestore as DB', 'Authentication with Firebase', 'Stripe for payment processing', 'Deployed to Firebase']}
                        />
                    </Zoom>
                </div>
                <div className="project-card__container">
                    <Zoom>
                        <WorkCard
                            title="Amazon Clone"
                            img={a}
                            link="https://clone-a5a50.web.app/"
                            github="https://github.com/mariscottin/amazon-clone"
                            subtitle="Built with React.js with auth and payment"
                            details={['React JS', 'Firestore as DB', 'Cloud Functions and authentication with Firebase', 'Stripe for payment processing', 'Deployed to Firebase']}
                        />
                    </Zoom>
                </div>
            </div>
            <div className="project__container">
                <div className="project-card__container">
                    <Zoom>
                        <WorkCard
                            title="Golfam Live Prototype"
                            img={a}
                            link="https://golfamfrontend.z19.web.core.windows.net/"
                            github="https://github.com/mariscottin/golfam"
                            subtitle="A golf web app prototype for amateur players."
                            details={['React JS', 'Node JS for backend', 'Mongodb as DB', 'REST API deployed to Heroku', 'React App deployed to Azure']}
                            username="113113"
                            password="113113113"
                        />
                    </Zoom>
                </div>

                <div className="project-card__container">
                    <Zoom>
                        <WorkCard
                            title="Rock Paper Scissors"
                            img={a}
                            link="https://rock-paper-scissors-iota.vercel.app/"
                            github="https://github.com/mariscottin/rock_paper_scissors"
                            subtitle="A frontendmentor.io advanced challenge."
                            details={['React JS', 'Local browser storage to save score', 'Deployed to Vercel']}
                        />
                    </Zoom>
                </div>
                <div className="project-card__container">
                    <Zoom>
                        <WorkCard
                            title="Countries App"
                            img={a}
                            link="https://rest-countries-app.vercel.app/"
                            github="https://github.com/mariscottin/rest-countries-app"
                            subtitle="A frontendmentor.io advanced challenge."
                            details={['React JS', 'Fetch requests to restcountries.eu API', 'Deployed to Vercel']}
                        />
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Project
