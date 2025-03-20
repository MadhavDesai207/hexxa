import React, { useEffect, useRef, useState } from 'react';
import gavo from "../assets/team/Gavo.jpg";
import "../pages/styles/AboutPage.css";

// Import other images similarly

export const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Gaurang Bharadava",
      position: "Blockchain Lead",
      bio: "",
      image: "/src/assets/team/placeholder-1.jpg" // Replace with actual image path
    },
    {
      id: 2,
      name: "Madhav Desai",
      position: "Development lead",
      bio: "",
      image: "/src/assets/team/placeholder-2.jpg" // Replace with actual image path
    },
    {
      id: 3,
      name: "Anshuman Prajapati",
      position: "ML Project Lead & Project Manager",
      bio: "",
      image: "/src/assets/team/placeholder-3.jpg" // Replace with actual image path
    },
    {
      id: 4,
      name: "Manav Bagathaliya",
      position: "DL Project & Marketing Lead",
      bio: "",
      image: "/src/assets/team/placeholder-4.jpg" // Replace with actual image path
    },
    {
      id: 5,
      name: "Prince Vagadiya",
      position: "DevOps & Automation Lead",
      bio: "",
      image: "/src/assets/team/placeholder-4.jpg" // Replace with actual image path
    }
  ];

  // Stats data
  const stats = [
    { id: 1, value: 6, label: "Projects Completed", suffix: "+" },
    { id: 2, value: 9, label: "Happy Clients", suffix: "+" },
    { id: 3, value: 4, label: "Service Categories", suffix: "" },
    { id: 4, value: 43, label: "Client Satisfaction", suffix: "%" }
  ];

  // Refs for section animations
  const introRef = useRef(null);
  const statsRef = useRef(null);
  const visionMissionRef = useRef(null);
  const teamSectionRef = useRef(null);
  const teamCardsRef = useRef([]);

  // Visibility states
  const [introVisible, setIntroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [visionMissionVisible, setVisionMissionVisible] = useState(false);
  const [teamSectionVisible, setTeamSectionVisible] = useState(false);
  const [teamCardsVisible, setTeamCardsVisible] = useState([]);

  // Setup visibility detection for each section
  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: "0px 0px -100px 0px" };

    const createObserver = (ref, setVisibleState) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleState(true);
            observer.unobserve(entry.target);
          }
        },
        observerOptions
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    // Create observers for each section
    const introObserver = createObserver(introRef, setIntroVisible);
    const statsObserver = createObserver(statsRef, setStatsVisible);
    const visionMissionObserver = createObserver(visionMissionRef, setVisionMissionVisible);
    const teamSectionObserver = createObserver(teamSectionRef, setTeamSectionVisible);

    // Initialize team cards visibility array
    setTeamCardsVisible(new Array(teamMembers.length).fill(false));

    // Create observers for team cards with staggered animation
    const teamCardObservers = teamCardsRef.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTeamCardsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        },
        observerOptions
      );

      observer.observe(ref);
      return observer;
    });

    // Cleanup function
    return () => {
      introObserver.disconnect();
      statsObserver.disconnect();
      visionMissionObserver.disconnect();
      teamSectionObserver.disconnect();
      teamCardObservers.forEach(observer => observer && observer.disconnect());
    };
  }, [teamMembers.length]);

  // Initialize team cards ref array
  useEffect(() => {
    teamCardsRef.current = teamCardsRef.current.slice(0, teamMembers.length);
  }, [teamMembers.length]);

  return (
    <div className="about-page page-container">
      {/* Introduction Section */}
      <section className={`about-intro scroll-section ${introVisible ? 'visible' : ''}`} ref={introRef}>
        <div className="about-intro-content">
          <div className="about-intro-text">
            <h1 className="intro-title">About Hexxa</h1>
            <p className="about-tagline">Innovating for a smarter tomorrow</p>

            <div className="about-description">
              <p>
                Founded in 2023, Hexxa emerged from a simple vision: to harness the power of advanced technology to solve real-world business challenges. We believe that AI and digital transformation shouldn't just be buzzwords—they should deliver measurable value and drive sustainable growth.
              </p>
              <p>
                As technology consultants and solution providers, we bridge the gap between complex technical capabilities and practical business applications. Our team combines deep technical expertise with business acumen to deliver solutions that are not just technologically sound but strategically aligned with your objectives.
              </p>
              <p>
                What sets us apart is our commitment to making advanced technology accessible. We don't just implement solutions; we ensure you understand how they work and how they benefit your business. This transparent approach has earned us the trust of clients across industries, from startups to enterprise organizations.
              </p>
            </div>
          </div>

          <div className="about-stats" ref={statsRef}>
            {stats.map((stat, index) => (
              <AnimatedStatBox
                key={stat.id}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={index * 150}
                isVisible={statsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className={`vision-mission scroll-section ${visionMissionVisible ? 'visible' : ''}`} ref={visionMissionRef}>
        <div className="vision-box">
          <h2>Our Vision</h2>
          <p>To be the catalyst for technological innovation that empowers businesses to thrive in an increasingly digital world.</p>
        </div>
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>To deliver cutting-edge AI and digital solutions that solve complex business challenges, drive efficiency, and create sustainable value for our clients.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className={`team-section scroll-section ${teamSectionVisible ? 'visible' : ''}`} ref={teamSectionRef}>
        <div className="team-header">
          <h2>The Team</h2>
          <p>Meet the experts behind Hexxa's innovative solutions</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`team-card ${teamCardsVisible[index] ? 'visible' : ''}`}
              ref={el => teamCardsRef.current[index] = el}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              
              <div className="team-image-container">
                <img
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Optimized Animated stat box component
const AnimatedStatBox = ({ value, label, suffix, delay, isVisible }) => {
  const [count, setCount] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // More performant animation effect
  useEffect(() => {
    if (!isVisible) return;

    // Add delay for staggered animation start
    const animationStartTimeout = setTimeout(() => {
      let startValue = 0;
      const duration = 1800; // slightly faster for better UX
      const totalSteps = 30; // Fewer steps for better performance
      const stepValue = value / totalSteps;
      const stepTime = duration / totalSteps;

      const counter = setInterval(() => {
        startValue += stepValue;

        if (startValue >= value) {
          clearInterval(counter);
          setCount(value);
          // Add a slight delay before applying the completion animation class
          setTimeout(() => setIsAnimationComplete(true), 100);
        } else {
          setCount(Math.floor(startValue));
        }
      }, stepTime);

      return () => {
        clearInterval(counter);
        clearTimeout(animationStartTimeout);
      };
    }, delay);

    return () => clearTimeout(animationStartTimeout);
  }, [isVisible, value, delay]);

  return (
    <div className={`stat-box ${isVisible ? 'visible' : ''} ${isAnimationComplete ? 'animate' : ''}`}>
      <h3 className="stat-value">{count}{suffix}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};