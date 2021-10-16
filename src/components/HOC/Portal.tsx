import React from 'react';
import ReactDOM from 'react-dom';

const Portal: React.FC = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);

  const el: HTMLElement = document.createElement('myPortal');

  React.useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? ReactDOM.createPortal(children, el) : null;
};

export default Portal;
