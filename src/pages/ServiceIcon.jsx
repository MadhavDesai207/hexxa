import React from 'react';

export const ServiceIcon = ({ type }) => {
  // Function to return appropriate icon based on type
  const getIcon = () => {
    switch (type) {
      case "code-brackets":
        return (
          <div className="icon-placeholder web-dev">
            <div className="code-bracket">&lt;/&gt;</div>
          </div>
        );
      case "mobile-dev":
        return (
          <div className="icon-placeholder app-dev">
            <div className="mobile-icon">📱</div>
          </div>
        );
      case "ai-brain":
        return (
          <div className="icon-placeholder ai-dev">
            <div className="ai-icon">🧠</div>
          </div>
        );
      case "software-design":
        return (
          <div className="icon-placeholder software-design">
            <div className="design-icon">🖱️</div>
          </div>
        );
      case "devops-consulting":
        return (
          <div className="icon-placeholder devops">
            <div className="devops-icon">⚙️</div>
          </div>
        );
      case "blogging":
        return (
          <div className="icon-placeholder blogging">
            <div className="blog-icon">✍️</div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="service-icon-container">{getIcon()}</div>;
};
