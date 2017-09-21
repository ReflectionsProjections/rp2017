import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, PageHeader, Clearfix } from 'react-bootstrap'

import styles from './styles.scss'

class Speakers extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        const cardHeightHandler = () => {
            let cards = document.getElementsByClassName('Speakers__card');
            const cardHeights = Array.prototype.map.call(cards, (card) => {
                return card.offsetHeight;
            });

            const maxHeight = Math.max.apply(null, cardHeights);
            cards = document.getElementsByClassName('js-speakercard');
            Array.prototype.forEach.call(cards, (card) => {
                // console.log(card.style);
                card.style.height = maxHeight + "px";
                // console.log(card.style);
                
            });
        };

        window.addEventListener('load', () => {
            cardHeightHandler();
        });

        window.addEventListener('resize', () => {
            cardHeightHandler();
        });
    }

    render() {
        const speakerList = [
            // Keynotes
            {
                'name': 'Brian J. Fox',
                'desc': 'Computer programmer, entrepreneur, author, and free software advocate',
                'img': '../assets/img/brian.png',
                'bio': 'Brian J. Fox is an American computer programmer, entrepreneur, author, and free software advocate. He was the original author of the GNU Bash shell, which he announced as a beta in June 1989. Fox also built the first interactive online banking software in the U.S. for Wells Fargo in 1995, and he created an open source election system in 2008.\n' +
                '\n' +
                'Brian got involved in computing in the early 1980s. He authored Terrapin Logo for the Apple //e and Apple //GS computers, and then began working with Richard Stallman (RMS) to help build the Free Software Foundation (FSF) and project GNU at MIT. While working with RMS, Brian authored Info and Makeinfo and contributed heavily to the TeXinfo documentation system. He also was the maintainer of Emacs, and contributed to both gcc and gdb. His "readline" and "history" libraries are widely used in a wide variety of applications.\n',
                // '\n' +
                // '\n' +
                // 'Fox is best known for the Bash shell, which runs on millions of computing devices worldwide, including, but not limited to, every MacOS, every *nix, a wide variety of routers, printers, crockpots, robots, in-flight entertainment systems, Tim Horton\'s digital menus, gas station advertising, the ISS, and the DeLaval Cow Milking System.\n',
                'keynote': true
            },
            {
                'name': 'Chris Gladwin',
                'desc': 'Founder and Vice Chairman of CleverSafe',
                'img': '../assets/img/chris.jpg',
                'bio': 'In 2004, Chris founded Cleversafe which became the largest and most strategic object storage vendor in the world (according to IDC.)  He raised $100M and then led the company to a $1.4B exit in 2015 when IBM acquired the company.  ' +
                'The technology team he created generated over 1,000 patents granted or filed, creating one of the ten most powerful patent portfolios in the world.  Prior to Cleversafe, Chris was the Foundering CEO of startups MusicNow and Cruise Technologies, and led ' + 
                'product strategy for Zenith Data Systems.  He started his career at Lockheed Martin as a database programmer, and holds an engineering degree from MIT.  Chris is now the CEO and Co-Founder of Ocient whose mission is to successfully provide the leading platform the world uses to analyze its largest datasets.',
                'keynote': true
            },
            {
                'name': 'Laura Kriefman',
                'desc': '',
                'img': '../assets/img/laura.png',                
                'bio': 'Laura Kriefman is an award winning Choreographer and Creative Technologist. She is a 2011-2012 Fellow of the Clore Cultural Leadership Programme, and the Royal Society of the Arts and a board member for the internationally renowned Museum of Broken Relationships (having produced the premiere UK transfer to national critical acclaim). Laura’s company, the Guerilla Dance Project (GDP) is an innovative dance company in Bristol who specialise in Augmented Dance: the fusion between movement and technology.\n',
                'track':'keynote'
            },

            // Data/AI
            {
                'name': 'Christine Hung',
                'desc': 'Machine Learning for Optimized Profitability',
                'bio': 'Christine Hung (Head of Solutions) and Wouter de Bie (Director of Engineering) lead the Data Solutions team at Spotify. They collaborate with business groups across the company to build scalable analytics solutions that enable Spotify\'s targeted advertising and recommendation systems. Previously, Christine ran the Data Science and Engineering team at the New York Times, where her team partnered closely with the newsroom to build audience development tools and predictive algorithms to drive performance.\n',
                'img': '../assets/img/christine.png',
                'track':'data'
            },
            {
                'name': 'Wouter de Bie',
                'desc': 'Director of Engineering at Spotify',
                'bio': 'Wouter de Bie (Director of Engineering) along with Christine Hung lead the Data Solutions team at Spotify. They collaborate with business groups across the company to build scalable analytics solutions that enable Spotify\'s targeted advertising and recommendation systems. Previously, Wouter co-founded and acted as CTO for Jewel Labs, a company focused on developing software for cinema and festival ticketing.',
                'img': '../assets/img/wouter.png',
                'track':'data'                
            },
            {
                'name': 'Travis Oliphant',
                'desc': 'Data Science and Python Guru',
                'bio': 'Travis holds a PhD from the Mayo Clinic and BS and MS degrees in mathematics and electrical engineering from Brigham Young University. Since 1997, he has worked extensively with Python for numerical and scientific programming, most notably as the primary developer of the NumPy package, and as a founding contributor of the SciPy package. He is also the author of the definitive Guide to NumPy.\n' +
                'Travis was an assistant professor of electrical and computer engineering at BYU from 2001-2007, where he taught courses in probability theory, electromagnetics, inverse problems and signal processing. He also served as Director of the Biomedical Imaging Lab, where he researched satellite remote sensing, MRI, ultrasound, elastography and scanning impedance imaging.\n' +
                'As President and Chief Data Scientist of Anaconda, Travis fosters the open source community and is dedicated to furthering the company’s open source projects. He also engages customers in all industries and helps guide technical direction of the company. He has served as a director of the Python Software Foundation and as a director of NumFOCUS.',
                'img': '../assets/img/travis.png',
                'track':'data'                
            },
            {
                'name': 'Rumman Chowdhury',
                'desc': 'Utilizing artificial intelligence for the betterment of humanity',
                'bio': 'Rumman is a Senior Principal at Accenture, working on cutting-edge applications of Artificial Intelligence and leading their Strategic Global Initiative on Responsible Artificial Intelligence.\n' +
                '\n' +
                'With a passion at the intersection of artificial intelligence and humanity she serves on the Board of Directors for multiple AI startups. She is also a member of the IEEE\'s Wellbeing Metrics Standard for Ethical Artificial Intelligence and Autonomous Systems working group. Additionally she has been selected as one of the BBC\'s 100 Women list of 2017.\n' +
                '\n' +
                'She hold two undergraduate degrees from MIT, a Master\'s degree in Quantitative Methods of the Social Sciences from Columbia University, and a doctorate in political science from the University of California, San Diego.\n',
                'img': '../assets/img/rumman.png',
                'track':'data'
                
            },
            {
                'name': 'Amar Das',
                'desc': '',
                'bio': 'Amar Das joined IBM in 2016 as Director of Healthcare Effectiveness Research, as part of IBM’s Healthcare and Life Sciences research organization.  Amar is advancing the healthcare research agenda at IBM by proposing, modeling, and executing clinical studies and clinical trials of IBM solutions within healthcare.\n' +
                '\n' +
                'Prior to joining IBM Research, Amar was a faculty member at Stanford University Medical School and the Geisel School of Medicine at Dartmouth.  At Dartmouth, he also served as Director of Biomedical Informatics within the Department of Biomedical Data Science, which he cofounded, and Director of the Biomedical Informatics Core within the SYNERGY Clinical and Translational Science Institute.\n',
                'img': '../assets/img/amar.png',
                'track':'data'
                
            },
            // HCI / VR
            {
                'name': 'Steven Feiner',
                'desc': 'Integrating the real with the digital through AR technologies',
                'bio': 'Steve Feiner is a Professor of Computer Science at Columbia University, where he directs the Computer\n' +
                'Graphics and User Interfaces Lab, and codirects the Columbia Vision and Graphics Center. His lab has\n' +
                'been doing VR, AR and wearable research for over 25 years, designing and evaluating novel 3D\n' +
                'interaction and visualization techniques, creating the first outdoor mobile AR system using a see-\n' +
                'through head-worn display, and pioneering experimental applications of AR to fields such as tourism,\n' +
                'journalism, maintenance, and construction. Steve received an A.B. in Music and a Ph.D. in Computer\n' +
                'Science, both from Brown University. He is coauthor of Computer Graphics: Principles and Practice,\n' +
                'received the IEEE VGTC Virtual Reality Career Award, and was elected to the CHI Academy. Together\n' +
                'with his students, he has won the ACM UIST Lasting Impact Award and best paper awards at ACM UIST,\n' +
                'ACM CHI, ACM VRST, IEEE ISMAR, and IEEE 3DUI. Steve is lead advisor to Meta, the AR company.\n',
                'img': '../assets/img/steven.png',
                'track':'hci'                
            },
            {
                'name': 'Amir Ebrahimi',
                'desc': 'Helping today’s video game developers build VR games - in VR',
                'img': '../assets/img/amir.png',
                'bio': 'Amir Ebrahimi is a Principal Software Engineer within the Unity Labs team. He holds a Bachelor of Science in Computer Science from the Georgia Institute of Technology. Amir has worked in the games and vfx industries for 15 years, co-founding his own studio, LUMINARY, at one point and is now back at Unity. He was lead architect on EditorVR.\n',
                'track':'hci'                
                
            },
            {
                'name': 'Matt Schoen',
                'desc': '',
                'img': '../assets/img/matt.png',
                'bio': 'Matt Schoen is an engineer with Unity Labs, working primarily on EditorVR. He joined Unity last year to continue to work on VR authoring tools with Jono Forbes, his co-founder at Defective Studios. A long-time Unity user (we\'re talking back to the 2.x days), Schoen has worked on a wide gamut of projects, from PC games to mobile AR apps. He loves writing code for things that no one has ever seen before.\n',
                'track':'hci'                
                
            },
            {
                'name': 'Don Martinelli',
                'desc': '',
                'img': '../assets/img/don.jpg',
                'bio': 'Don Marinelli, Ph.D., is Director of Innovation for Inven Global, the English-language version of Inven Korea, largest game media company in South Korea. He is also a Visiting Professor in Arizona State University’s Arts, Media, and Engineering program; a member of ASU’s Center for Science and the Imagination; and Associate Director of Entertainment Technology Management at Columbia University in the City of New York. Until his retirement in 2012, Don was also Executive Producer and co-founder (along with the late Randy “The Last Lecture” Pausch) of Carnegie Mellon University\'s Entertainment Technology Center, a global master\'s program for entertainment and educational technology research and development. Prior to founding the Entertainment Technology Center, he also served as the Assistant Head of the Drama Dept. (1980-86) and later the Associate Dept. Head (1986-95). Don is a frequent lecturer around the world on the growing impact of entertainment and educational technologies on global culture, entertainment, and education. Don received his B.A. from the University of Tampa, his M.A. in Clinical Psychology from Duquesne University in Pittsburgh, and his Ph.D. in theatre history, literature and criticism at The University of Pittsburgh. His thesis was a critical biography of F.T. Marinetti, founder of Italian Futurism.\n',
                'track':'hci'                
            },
            {
                'name': 'Ranjitha Kumar',
                'desc': '',
                'img': '../assets/img/ranjita.jpg',
                'bio': 'Ranjitha Kumar is an Assistant Professor in the Department of Computer Science at the University of Illinois at Urbana-Champaign where she tackles problems in human-computer interaction, with a focus on bringing data mining and machine learning to bear on problems in design. She received her PhD from the Department of Computer Science at Stanford University, where I worked with Scott Klemmer. She also formerly co-founded and was the the Chief Scientist for Apropose, Inc., a data-driven design company backed by Andreessen Horowitz and New Enterprise Associates.\n',
                'track':'hci'                
                
            },
            // Security / Privacy
            {
                'name': 'Nate Cardozo',
                'desc': 'Cryptography and the Law',
                'img': '../assets/img/nate.png',
                'bio': 'Nate is a Senior Staff Attorney on the Electronic Frontier Foundation’s digital civil liberties team. In addition to his focus on free speech and privacy litigation, Nate works on EFF\'s Who Has Your Back? report and Coders\' Rights Project. Nate has projects involving cryptography and the law, automotive privacy, government transparency, hardware hacking rights, anonymous speech, electronic privacy law reform, Freedom of Information Act litigation, and resisting the expansion of the surveillance state. A 2009-2010 EFF Open Government Legal Fellow, Nate spent two years in private practice before returning to his senses and to EFF in 2012.  Nate has a B.A. in Anthropology and Politics from U.C. Santa Cruz and a J.D. from U.C. Hastings where he has taught first-year legal writing and moot court. He brews his own beer, has been to India four times, and watches too much Bollywood.\n',
                'track':'security'                
                
            },
            {
                'name': 'Shuo Chen',
                'desc': 'Microsoft Researcher and OS expert',
                'img': '../assets/img/shuo.png',
                'bio': 'Shuo Chen is a senior researcher at Microsoft Research Redmond. His interest is on studying operational systems to understand their security challenges and develop systematic solutions. He spends significant time studying problems about software-as-a-service, browser, web privacy/security and memory-based issues. His research led to several real-world security pushes, such as a cross-company effort to fix browser bugs that compromise HTTPS security; Microsoft Internet Explorer team’s effort to systematically fix GUI-spoofing (phishing) bugs; a cross-company effort to fix logic bugs in e-commerce, online payment and single-sign-on services. He received numerous acknowledgements from Microsoft and other major companies for these discoveries and helps. In the past few years, he developed a practical program verification technology to give a higher correctness/security assurance to the implementations of web-based protocols. His research was often covered by the media, such as CNN, CNET, MIT Tech Review, Ars Technica, etc.\n' +
                ' \n' +
                'Shuo served on the program committees for IEEE S&P, USENIX Security, ACM CCS, WWW, etc. Shuo obtained his Ph.D. degree in Computer Science from University of Illinois at Urbana-Champaign. He obtained his Master\'s and Bachelor\'s degree from Tsinghua University and Peking University.\n',
                'track':'security'                
                
            },
            {
                'name': 'Arun Vishwanath',
                'desc': 'Reverse engineering today\'s hackers',
                'img': '../assets/img/arun.png',
                'bio': 'Arun Vishwanath, Ph.D., MBA, is Associate Professor of Communication at the University at Buffalo and Faculty Associate at the Berkman Center for Internet and Society at Harvard University. His research on the “people problems” of cyber security has been presented at leading outlets from the Johns Hopkins Applied Physics Lab to the U.S. Army Cyber Institute at West Point. He has authored more than two-dozen peer reviewed research papers on the science of cyber security and is a frequent CNN opinion contributor. His work has been cited in leading outlets from Scientific American to Wired Magazine.\n',
                'track':'security'                
                
            },
            {
                'name': 'Mark Scott',
                'desc': '',
                'img': '../assets/img/mark.png',
                'bio': 'Mr. Scott is a Director of Software Engineering at Forcepoint in the Global Governments division working in cybersecurity on cross-domain solutions for government customers including the US Department of Defense, intelligence community & other allied nations.  He brings more than 30 years of industry experience in software development, QA & engineering management. He has worked on many interesting projects over the years including SVR4 UNIX embedded computer systems, IRIDIUM satellite & pre-Android smart-phones at Motorola, several network/IT management startups in the dot-com era & security engineering at Raytheon Cyber Products. He resides in the local Urbana-Champaign area with his family & is the site director of the UIUC Research Park Forcepoint office where his team works on a cross-domain access product called Trusted Thin Client & various security-hardened, trusted-OS Linux projects.\n',
                'track':'security'                
                
            },
            // Systems
            {
                'name': 'Sundari Mitra',
                'desc': 'Entrepreneur and electronic chips expert',
                'img': '../assets/img/sundari.png',
                'bio': 'Sundari Mitra is the CEO and co-founder of NetSpeed Systems, which opened for business in August 2011.  Sundari is a proven senior executive with more than 25 years of experience in the semiconductor sector as a senior executive, entrepreneur and engineer. Sundari also founded Prism Circuits and served as its CEO from its inception in 2006 to acquisition of Prism by MoSys in 2009. Sundari served as Executive Vice President of Engineering at MoSys, where she was responsible for its engineering operations and product development. Prior to starting Prism Circuits, Sundari served as a Director of Engineering at Sun Microsystems, where she famously and successfully worked as a part time executive while her children were young.\n' +
                ' \n' +
                'Sundari holds a Master of Science degree in Electrical Engineering from the University of Illinois and a Bachelor of Science degree in Electrical Engineering from Baroda University in India. Her company, NetSpeed Systems, provides scalable, coherent, Network-on-Chip (NoC) IPs to System-on-chip (SoC) designers for a wide range of markets from mobile to enterprise SoCs. NetSpeed\'s NoC IPs deliver significant time-to-market advantages through its system level approach, user-driven automation and state-of-the-art algorithms.\n',
                'track':'systems'                
                
            },
            {
                'name': 'Andrew Schwartzmeyer',
                'desc': 'Microsoft Software Engineer and Open-Source Pundit',
                'img': '../assets/img/andrew.png',
                'bio': 'Andrew Schwartzmeyer is a software engineer at Microsoft. He currently works as a cross-platform engineer in Microsoft’s Enterprise Open Source, with an emphasis on Linux. Schwartzmeyer primarily develops Mesos (Apache’s distributed systems kernel) in partnership with Mesosphere, a company that builds software for data centers. Previously, Schwartzmeyer was a lead contributor on the team building PowerShell on Linux, where he worked with the .NET framework and contributed to the release of PowerShell on Github. Andrew graduated the University of Idaho in 2015 with a BS in Computer Science and Mathematics.\n',
                'track':'systems'                
            },
            {
                'name': 'Sasa Misailovic',
                'desc': 'Microsoft Software Engineer and Open-Source Pundit',
                'img': '../assets/img/sasa.png',
                'bio': 'Sasa Misailovic is an Assistant Professor in the Department of Computer Science at the University of Illinois at Urbana-Champaign. His research interests include programming languages, program analysis, and computer systems, with an emphasis on improving performance, energy efficiency, and resilience in the face of software errors and approximation opportunities. Prior to Illinois he received his Ph.D from MIT in 2015 and Masters from University of Belgrade, Serbia.\n',
                'track':'systems'                
            }

        ];

        this.handleClick = (evt, id) => {
            document.getElementById(id).style.display = 'block';
        };

        this.hideOverlay = (evt, id) => {
            document.getElementById(id).style.display = 'none';
            evt.stopPropagation();
        };

        const speakerView = speakerList.map( (speaker, idx) => {
            if(speaker.keynote) {
                return(
                    <Col key={idx} xs={12} sm={6} md={6}>
                        <Thumbnail onClick={(e) => this.handleClick(e, 'js-overlay-' + idx)} className="Speakers__card--keynote" src={speaker.img} style={{"border":"6px solid #9a6fb0"}}>
                            <h3>{speaker.name}</h3>
                            <p>Keynote Speaker</p>
                            <div onClick={(e) => this.hideOverlay(e, 'js-overlay-' + idx)} id={'js-overlay-' + idx} className="Speakers__overlay">
                                <h4>{speaker.name}</h4><br/>
                                <p>{speaker.bio}</p>
                            </div>
                        </Thumbnail>
                    </Col>
                )
            } else {
                var hex="";
                switch(speaker.track ){
                    case 'data': hex="#02B2CA";
                    break;
                    case 'hci': hex="#85C494"
                    break;
                    case 'security': hex="#EC7F48"
                    break;
                    case 'systems': hex="#E4222B"
                    break;
                    case 'keynote': hex="#9a6fb0"
                    break;

                }
                var hexStr = "6px solid " + hex;
                // console.log(hexStr);
                return(
                    <Col key={idx} xs={12} sm={6} md={3} style={{"border:": ""}}>
                        <Thumbnail onClick={(e) => this.handleClick(e, 'js-overlay-' + idx)} className="Speakers__card js-speakercard" src={speaker.img} style={{"border":hexStr}}>
                            <h3>{speaker.name}</h3>
                            <div onClick={(e) => this.hideOverlay(e, 'js-overlay-' + idx)} id={'js-overlay-' + idx} className="Speakers__overlay">
                                <h4>{speaker.name}</h4><br/>
                                <p>{speaker.bio}</p>
                            </div>
                        </Thumbnail>
                    </Col>
                )
            }
        });

        return(
            <div className="Speakers" id="Speakers">
                <PageHeader className="Speakers__header">Speakers</PageHeader>
                <Grid>
                    <Row>
                        {speakerView}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Speakers
