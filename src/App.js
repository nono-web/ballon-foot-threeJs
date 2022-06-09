import './App.css';
import Foot from './components/Foot/Foot';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import TopSection from './components/TopSection/TopSction';

function App() {
  return (
    <div className="canvasContainer">
      <TopSection />
   <Canvas>
     <Suspense fallback={null}>
       <Foot />
     </Suspense>
   </Canvas>
    </div>
  );
}

export default App;
