import React from 'react';

const MainContent = () => (
  <div style={mainContentStyle}>
    <p style={{ backgroundColor: '#ecf0f1', position: 'relative', height: '550px', width: '1195px', marginLeft: '-59px', top: '30px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginLeft: '80px', marginTop: '80px', position: 'relative', color: 'gray' ,fontFamily:'sans-serif'}}>
            <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          </div>
          <p style={{marginLeft:'20px',marginTop:'-20px'}}>video</p>
        </p>
      </div>
      <div style={{ backgroundColor: 'white', width: '700px', marginLeft: '250px', height: '30px', borderRadius: '15px', display: 'flex', alignItems: 'center' }}>
        <p style={{ marginTop: '10px' ,marginLeft:'40px',fontFamily:'sans-serif'}}>insert url here</p>
      </div>
      <p style={{ marginLeft: '600px' ,fontFamily:'sans-serif'}}>or</p>
      <p style={{ marginLeft: '260px', backgroundColor: 'white', width: '200px', height: '200px' }}></p>
      <p style={{ marginLeft: '335px', marginTop: '-130px',fontFamily:'sans-serif' }}>upload</p>
    </p>
  </div>
);

const mainContentStyle = {
  marginLeft: '220px',
  marginTop: '-600px',
};

export default MainContent;
