import React, { useEffect, useState } from 'react';

export interface RouteItem {
  path: string;
  element: React.ReactNode;
}

interface RouterProps {
  routes: RouteItem[];
}

export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }> = ({ to, children, className, ...rest }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.location.pathname !== to) {
      window.history.pushState({}, '', to);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};

export const SimpleRouter: React.FC<RouterProps> = ({ routes }) => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname || '/');
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const matchedRoute = routes.find((route) => route.path === currentPath) || routes[0];

  return <>{matchedRoute.element}</>;
};
