import React from 'react';

export default function Link({ href, children, className = '', onClick, ...props }) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    
    if (href.startsWith('/')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
