import foot from '../../assets/texture/texturefoot.jpg'
import { useLoader, useFrame} from '@react-three/fiber'
import { TextureLoader } from 'three';
import React, { useRef } from 'react';


const Foot = (props) => {

  const [footMap] = useLoader (
    TextureLoader, [foot]
  );

  const FootRef = useRef();

  useFrame (({clock}) => {
    const elapsedTime = clock.getElapsedTime();
    FootRef.current.rotation.y = elapsedTime / 6; 
  })

  return (
    <>
    <pointLight  color="#f6f3ea" position={[2,0,5]} intensity={3} />
<mesh ref={FootRef} position={[0,0,3]}>
  <sphereGeometry args={[1, 32, 32]} />
  <meshStandardMaterial 
  map={footMap}
  normalMap={footMap}
  metalness={0.8}
  roughness={0.9}
  />

</mesh>
    </>
  );
};

export default Foot;
