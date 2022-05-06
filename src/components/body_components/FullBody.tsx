import React, { useRef,useState,useEffect } from 'react'
import { Canvas, extend, useFrame,useThree } from '@react-three/fiber'
import {OrbitControls,PresentationControls,TransformControls } from "@react-three/drei"

import * as THREE from 'three'
import Body from "./parts/Body"
import Ball from './parts/Ball'
type OrbitControlsType = typeof OrbitControls
interface currentInterface {
  update : ()=>void,
  reset : ()=>void,
  position:[x:number,y:number,z:number],
  getAzimuthalAngle: () => number,
  setAzimuthalAngle: (value :number) => void,
}
export type categoryType = {
    count: number,
    description: string,
    firebase_synced_at: number,
    id: number,
    link: string,
    name: string,
    parent: number,
    slug: string,
    taxonomy: string,
  }

/* declare module THREE {
    export class Vector3 {
        constructor(x: number, y: number, z: number);
    }
} */
const point_ball_position = [
    {
        name:"Brain",
        position:[0, 2.35, 0.18]
    },
    {
        name:"Cardio",
        position:[0, 1.5, 0.18]
    },
    {
        name:"Liver",
        position:[0, 1, 0.18]
    },
    {
        name:"Kidney",
        position:[.2, .6, 0.1]
    },
]



export default function FullBody({ ...props }) {
  const group = useRef<THREE.Group>(null)
    const {categories} = props
    const [activePart, setActivePart] = useState('')
    //console.log(activePart);
    const OrbitControlsRef = useRef(null)

useFrame((state)=>{
  if(!!OrbitControlsRef.current){
    const current  = OrbitControlsRef.current as currentInterface 
    //console.log(current.getAzimuthalAngle());
  }
   
   //console.log('state.mouse',state.mouse);
   
})

function updatePostion(x:number,y:number,z:number){
  if(!!OrbitControlsRef.current){
    const current  = OrbitControlsRef.current as currentInterface 
    current.position =[0,0,30];
    //console.log(current.getAzimuthalAngle());
  }
}

useEffect(() => {
  if(!!OrbitControlsRef.current){
    console.log(OrbitControlsRef.current);
    const current  = OrbitControlsRef.current as currentInterface 
    //const currentP = current as any; 
    //console.log(current.getAzimuthalAngle());
    
   //OrbitControlsType); 
    
  }
},[OrbitControlsRef.current])

useEffect(() => {
  
    
    if(!!OrbitControlsRef.current){
      const current  = OrbitControlsRef.current as any 
      
      if((activePart)){
        ///console.log(activePart);
        
        
        //console.log('getDistance',current.getDistance());
        //console.log('getPolarAngle',current.getPolarAngle());
        //current.setDistance(2)
        current.setAzimuthalAngle(0)
        current.setPolarAngle(1.2)
        current.enableZoom = true
        //current.target = 
        current.position =[0,0,100];
        //current.reset()
        current.update()
      }else{

      }
      //console.log(current.getAzimuthalAngle());
    }
    


},[activePart])
    
    return (
      <>
        <OrbitControls ref={OrbitControlsRef}
             enableZoom={false} enabled={true}   position={[0,0,50]}  /> 
            
            <ambientLight intensity={0.5}  />
            <pointLight  position={[20, 20, 20]} />
            <group  ref={group} {...props} dispose={null}>
        <Body  />
        {categories && categories.map((category:any,index:number) =>{
            const point_view = point_ball_position.filter((row)=>row.name == category.name)        
            
            return point_view.length > 0 ? <Ball key={index} updatePostion={updatePostion}  activePart={activePart} setActivePart={setActivePart} category={category} name={point_view[0].name} position={point_view[0].position}/>:""
        })}
        {/* <Ball name="" position={[0, 1.5, 0.18]}/> */}
        {/* <EyeBall scale={0.05} eyetype="right" title="Right Eye" description="My eye" link="https//:www.test.com" position={[.05, 2.25, .12]}/>
        <EyeBall scale={0.05} eyetype="left" title="Left Eye" description="My eye" link="https://saifuddinvegans.github.io/pages/" position={[-0.05, 2.25, .12]}/> */}
      </group>
      </>
      
    )
  }