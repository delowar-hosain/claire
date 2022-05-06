
import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'



const roo_url = process.env.REACT_APP_ROUTE_ROOT || "/";
type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    material_0: THREE.MeshStandardMaterial
  }
} 
export default function Body({ ...props }: JSX.IntrinsicElements['group']) {

  const group = useRef<THREE.Group>(null)
  // const group = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const { nodes, materials } = useGLTF(roo_url+'body.gltf') as GLTFResult

  return (
    <group scale={0.3} ref={group} {...props} dispose={null}>
      <group  rotation={[-Math.PI / 2, 0, 0]} position={[0, 5, 0]} >
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}

useGLTF.preload(roo_url+'body.gltf')