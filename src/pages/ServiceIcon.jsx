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
      case "frontend-dev":
        return (
          <div className="icon-placeholder frontend">
            <div className="frontend-icon">🎨</div>
          </div>
        );
      case "backend-dev":
        return (
          <div className="icon-placeholder backend">
            <div className="backend-icon">🔧</div>
          </div>
        );
      case "security":
        return (
          <div className="icon-placeholder security">
            <div className="security-icon">🔒</div>
          </div>
        );

      case "above":
        return (
          <div className="icon-placeholder security">
            <div className="security-icon">All</div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="service-icon-container">{getIcon()}</div>;
};