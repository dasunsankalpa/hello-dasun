

import whatsappBg from './assets/whatsapp-bg.jpeg';

function App() {
  const bgStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${whatsappBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={bgStyle}>
      <h1>Hello Dasun</h1>
    </div>
  );
}

export default App;
