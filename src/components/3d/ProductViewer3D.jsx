import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, Stage } from '@react-three/drei'

// Model component to load and display the 3D model
function Model({ modelPath }) {
  const meshRef = useRef()
  const { scene } = useGLTF(modelPath)
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })
  
  return (
    <primitive ref={meshRef} object={scene} scale={1.5} />
  )
}

// Fallback component when the model can't be loaded
function FallbackModel() {
  const meshRef = useRef()
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4A5568" />
    </mesh>
  )
}

function ProductViewer3D({ modelPath }) {
  const [modelLoaded, setModelLoaded] = useState(false)
  const [loadError, setLoadError] = useState(false)
  
  useEffect(() => {
    if (modelPath) {
      // Simulate loading - in a real app, you'd check if the model actually loaded
      const timer = setTimeout(() => {
        setModelLoaded(true)
      }, 1000)
      
      return () => clearTimeout(timer)
    } else {
      setLoadError(true)
    }
  }, [modelPath])
  
  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Model not available</p>
      </div>
    )
  }
  
  if (!modelLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <p className="text-primary-500">Loading 3D model...</p>
      </div>
    )
  }
  
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      <color attach="background" args={['#f8f9fa']} />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.7}
        rotation={[0, -Math.PI / 4, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Stage environment="city" intensity={0.6}>
          {modelPath ? (
            <Model modelPath={modelPath} />
          ) : (
            <FallbackModel />
          )}
        </Stage>
      </PresentationControls>
      <Environment preset="city" />
    </Canvas>
  )
}

export default ProductViewer3D