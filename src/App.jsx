
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.classList.add('bg-whatsapp');
    return () => {
      document.body.classList.remove('bg-whatsapp');
    };
  }, []);
  return (
    <div>
      <h1>Hello Dasun</h1>
    </div>
  );
}

export default App;
