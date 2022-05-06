import React, { useRef,useState } from 'react'
import { useGLTF,Html } from '@react-three/drei'
const roo_url = process.env.REACT_APP_ROUTE_ROOT || "/";
export default function EyeBall({ ...props }) {
  const group = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const { nodes, materials } = useGLTF('/eye.gltf')
  //console.log(props);
  const eyeClick = (event) =>{
    if (typeof window.triggerCategoryClick === "function") { 
        // safe to use the function
        window.triggerCategoryClick(5,!active);
    }
    setActive(!active)
  } 
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh 
            scale={1}
            onPointerOver={(event) => setHover(true)}
            onClick={eyeClick}
            onPointerOut={(event) => setHover(false)}
            geometry={nodes.Object_4.geometry} 
            material={materials['Scene_-_Root']} > 
            {active && <Html scale={10}  position={[(props.eyetype ==="left")?-20: 20,0, 0]} transform occlude>
              <div className="annotation">
                <h2 style={{margin:"0px",fontSize: '1.6em' }}>{props.title}</h2>                
                <a href={props.link} target="_blank" rel="noopener noreferrer">Link</a>
              </div>
            </Html> }            
            </mesh>
            
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(roo_url+'eye.gltf')