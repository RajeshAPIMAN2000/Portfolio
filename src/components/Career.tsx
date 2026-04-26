import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Developer</h4>
                <h5>APIMAN Tech Labs Private Limited</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked as a Junior Developer at APIMAN Tech Labs, contributing to mobile and web application development using React Native and React.js, focusing on API integration, state management, and clean UI components.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Developer</h4>
                <h5>BoldTribe Innovation Private Limited</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked as an Application Developer at BoldTribe Innovations, building scalable mobile and web applications with React Native and React.js, focusing on API integration, state management, and smooth cross-platform performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Application Developer</h4>
                <h5>Uptulasoft (Unit of Uptula Ventures Private Limited)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              A high-performance mobile app developed using React Native, featuring API integration, efficient state management, and seamless functionality across Android and iOS platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
