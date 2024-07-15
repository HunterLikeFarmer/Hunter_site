import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom'; 

const CustomScrollbar = ({ children }) => {
  return (
    <Scrollbar
      style={{ width: '100%', height: '100vh' }}
      trackYProps={{ className: 'scrollbar-track' }}
      thumbYProps={{ className: 'scrollbar-thumb' }}
    >
      {children}
    </Scrollbar>
  );
};

export default CustomScrollbar;
