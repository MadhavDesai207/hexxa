import React from 'react';
import '../pages/styles/ProjectImage.css';

// Import default project image
import defaultProjectImage from '../assets/team/Gavo.jpg';

// Dynamic import approach for ES modules
export const ProjectImage = ({ type }) => {
  const [imageSrc, setImageSrc] = React.useState(null);
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    // Using dynamic imports to load the image
    import(`../assets/${type}.jpg`)
      .then((module) => {
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.warn(`Image not found: ${type}. Using default image.`);
        setImageSrc(defaultProjectImage);
        setImageError(true);
      });
  }, [type]);

  return (
    <div className="project-image-container">
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={`${type} project`} 
          className="project-image" 
        />
      ) : (
        <div className="image-loading">Loading...</div>
      )}
    </div>
  );
};