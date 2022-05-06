
import { useEffect, useState,useRef,useContext ,Suspense} from "react";
import * as THREE from 'three'
import { useGLTF,Html,Image } from '@react-three/drei'
import PartDetails from "./details/PartDetails";


declare global {
  interface Window { triggerCategoryClick: any; }
}

 export default function Ball({...props}) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null)
  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const {category,activePart,setActivePart} = props 


  const pointClick = (event:any) =>{
    if (typeof window.triggerCategoryClick === "function") { 
        // safe to use the function
        window.triggerCategoryClick(category.id,(category.name!=activePart)?true:false);
    }
    //setActive(!active)
    
    setActivePart((category.name==activePart)?'':category.name)
    
  }
 
  //console.log('Ball category',category);
 
  return (

    <group {...props}>
        <mesh
          
          ref={mesh}
          scale={( activePart == category.name )   ? 1.5 : 1}
          onClick={pointClick}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}>          
          <sphereBufferGeometry args={[.05, 64, 64]} />
          <meshStandardMaterial color={hovered||(activePart == category.name )? 'orange' : 'blue'} />
        </mesh>
        {(( activePart == category.name )||hovered) && category && <>
            { ( activePart == category.name ) && category.children && category.children.map((child:any,index:number)=>{
                return <PartDetails category={child} key={index} ang={(index - 1) * -0.5 } name={child.name} />
            }) }
            {/* <PartDetails ang={0} name={"name1"} />
            <PartDetails ang={-.5} name={"name2"} />
            <PartDetails ang={-1} name={"name3"} /> */}
            <Html scale={0.3}  position={[ 0, 0.2, .1]} transform occlude>
                  <div className="annotation">
                    <h2 style={{margin:"0px",fontSize: '1.6em' }}>{category.name}</h2>                
                    {/* {active && <a href={category.link} target="_blank" rel="noopener noreferrer">
                      Link
                      </a>} */}
                  </div>
                </Html></> }
        {category.name=="Cardio" && <Suspense><Image  scale={.3} position={[0, 0, ( activePart == category.name )?0.1:-0.2]}  url="/body-parts/heart.svg"  /></Suspense>}
    </group>
  )
}