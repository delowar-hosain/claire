import {  useState,useRef} from "react";
import { Html} from '@react-three/drei'


declare global {
  interface Window { triggerSubCategoryClick: any ;}
}

 export default function PartDetails({...props}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  
  // Set up state for the hovered and active state
  /* const [hovered, setHover] = useState(false) */
  const [active, setActive] = useState(false)
  const {category} = props 
  
  const dist = 1.1;
  const {ang,name} = props;
  const x = dist * Math.cos(ang) 
  const y = dist * Math.sin(ang) 
 // console.log(`x:${x},y:${y}`);


  const pointClick = () =>{
    if (typeof window.triggerSubCategoryClick === "function") { 
        // safe to use the function
        window.triggerSubCategoryClick(category.id,!active);
    }
    else{
      console.log('category.id',category.id);
      window.location.href = "/posts/" + category.id
    }
    setActive(!active)
  
  }

 
  return (

    <group 
    /* onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)} */
     position={[x, y, 0.2]}>
      {/* <Suspense>
      <Image
        
        scale={.3}  url="/body-parts/heart.jpg" 
      />
      </Suspense> */}
      {/* <mesh
          
          ref={mesh}
          scale={active ? 1.5 : 1}
          onClick={pointClick}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}>          
          <sphereBufferGeometry args={[.05, 64, 64]} />
          <meshStandardMaterial color={hovered ? 'orange' : 'blue'} />
        </mesh> */}
        
        <Html scale={0.3}  position={[ -0.5, 0, 0]} transform occlude>
                  <div className="annotation">
                    <h2 className="sub-cat-title" onClick={pointClick} style={{margin:"0px",fontSize: '.7em' }}>{name}</h2>                
                    {/* {active && <a  href="#" target="_blank" rel="noopener noreferrer">
                      Link
                      </a>} */}
                  </div>
                </Html>
    </group>
  )
}