import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									<p>🎓 Educational Journey</p>
									<p>Hello! I'm Ivan Martinez, a passionate and aspiring software developer. I am currently pursuing my Bachelor of Science in Computer Science, with a minor in Cybersecurity and Business at Texas A&M University, College Station, TX. My expected graduation is in May 2024, and I've maintained a solid GPA of 3.42. My academic journey is enriched by a diverse array of courses ranging from Computer Graphics and Reverse Engineering to Operating Systems and Network Security.</p>
									
									<p>👨‍💻 Professional Skills and Technologies</p>
									<p>I have honed my skills in various programming languages and technologies, including C/C++, Python, Java, React, and Ruby on Rails. My proficiency extends to database management using PostgreSQL, and I'm adept at leveraging tools like GitHub, AWS, and OpenGL. I'm particularly fascinated by the intricacies of software development, be it through web applications or complex systems programming.</p>
									
									<p>🌐 Project Highlights</p>
									<p>My portfolio is a testament to my dedication and creativity in software engineering:</p>
									<ul>
										<li>Web and Software Development: I've developed a range of web applications, such as the Portfolio Creation Web Application using React and Ruby on Rails, and a Web-Based POS System. My focus on full-stack development and user-centric design is evident in these projects.</li>
										<li>System Programming and Security: Delving into lower-level programming, I've created a TCP Client and Server Program, and a Bash Shell in C++. My interest in cybersecurity is showcased through Reverse Engineering Projects using Ghidra.</li>
										<li>Graphics Programming: Demonstrating my skills in graphics, I've developed a Ray Tracing Program and a Rasterization Program using OpenGL, pushing the boundaries of computer graphics and visualization.</li>
									</ul>
									
									<p>🌟 Professional Experience</p>
									<p>My professional journey includes roles at Walmart, where I honed my operational and customer service skills, and externships at JPMorgan Chase & Co., AT&T, and Lyft, where I gained insights into the software engineering landscape in major tech companies.</p>
									
									<p>📜 Certifications and Continuous Learning</p>
									<p>I am currently enhancing my cybersecurity expertise through the Thinkful Cybersecurity Certificate program, staying updated with the latest trends and technologies in the field.</p>
									
									<p>🔍 Looking Ahead</p>
									<p>As I approach the completion of my academic journey, I am enthusiastic about exploring opportunities in software development and cybersecurity, where I can apply my skills and continue to grow as a professional.</p>
									</div>
								</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>


								<div className="about-image-container">
									<div className="about-image-wrapper2">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>


								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
