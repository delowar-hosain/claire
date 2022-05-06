import React, { useEffect, useState,useContext,useRef} from "react";
import { Canvas, extend, useFrame,useThree } from '@react-three/fiber'
import {OrbitControls,PresentationControls,TransformControls } from "@react-three/drei"
import FullBody from "@/components/body_components/FullBody";
import { onValue } from "firebase/database";
import { realtimeDB } from "@/services/firebase/index";
import { AppContext } from "@/context/createContext";



const default_sample = [
  {
    count: 0,
    description: "",
    firebase_synced_at: 1650042246,
    id: 1370,
    link: "https://clairedothealth.wpcomstaging.com/category/cardio/",
    name: "Cardio",
    parent: 0,
    slug: "cardio",
    taxonomy: "category",
  },{
    count: 0,
    description: "",
    firebase_synced_at: 1650412011,
    id: 1374,
    link: "https://clairedothealth.wpcomstaging.com/category/category/brain/",
    name: "Brain",
    parent: 0,
    slug: "brain",
    taxonomy: "category",
  },{
    count: 0,
    description: "",
    firebase_synced_at: 1650042294,
    id: 1376,
    link: "https://clairedothealth.wpcomstaging.com/category/liver/",
    name: "Liver",
    parent: 0,
    slug: "liver",
    taxonomy: "category",
  }
]
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
            children?:[categoryType]|[]
          }|[]
// export type categoryType = object

function ThreeDAnimation() {

  const { state, addCategory } = useContext(AppContext);
  // let navigate = useNavigate();

  const [allCategory, setAllCategory] = useState<any | null>(null);
   const [wpCategories, setWpCategories] = useState<any | null>(null);

  useEffect(() => {
    if (state?.wpCategories?.length > 0) {
      setAllCategory(state?.wpCategories);
    } else {
      console.log('wpCategories');

      try {
        onValue(realtimeDB("wpCategories"), (snapshot) => {
          console.log(snapshot);
          
          let records: any[] = [];
          snapshot.forEach((childRecord) => {
            records.push(childRecord.val());
          });
          let data:any[] = []  
             
          data = records.filter((row:any) => parseInt(row.parent) === 0) 
          records.forEach((row:any) => {
            const indexvalue =  data.findIndex((datarow:any)=>datarow.id == row.parent);
            //console.log('indexvalue',indexvalue);
            if(indexvalue !== -1){
              if(data[indexvalue].children)
                data[indexvalue].children.push(row)
              else{
                data[indexvalue].children =[];
                data[indexvalue].children.push(row)
              }
            }
  
          });
          setAllCategory(records);
          addCategory(records);
        });
        
      } catch (error) {
        console.log(error);
        
      }
      
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);


  
  
  return (   
      
        <Canvas /* camera={{ fov:90, position: [0, 0, 3]}}  */className='main-canvas' style={{height:"100VH",backgroundColor:"burlywood"}}>
            
            {/* <PresentationControls
              global={false} // Spin globally or by dragging the model
              cursor={true} // Whether to toggle cursor style on drag
              snap={false} // Snap-back to center (can also be a spring config)
              speed={2} // Speed factor
              zoom={.2} // Zoom factor when half the polar-max is reached
              rotation={[0, 0, 0]} // Default rotation
              polar={[0, Math.PI / 2]} // Vertical limits
              azimuth={[-Infinity, Infinity]} // Horizontal limits
              config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
              
            > */}
            
              <FullBody categories={allCategory} />
            
              
              {/* </PresentationControls> */}
               
            
            
            
        </Canvas>
  );
}

export default ThreeDAnimation;

