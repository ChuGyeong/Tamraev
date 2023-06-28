import React, { memo } from 'react';

const Error = memo(() => {
   return (
      <div
         style={{
            background: '#000',
            height: '100vh',
            textAlign: 'center',
            color: '#fff',
            padding: 400,
            boxSizing: 'border-box',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100000,
            fontWeight: 900,
         }}>
         <h2>
            <i className="xi-error" style={{ fontSize: 150 }}></i>
         </h2>
         <p style={{ fontSize: 50 }}>Error</p>
      </div>
   );
});

export default Error;
