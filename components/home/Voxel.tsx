import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../../lib';
import { VoxelLoader, VoxelContainer } from './VoxelLoader';

const easeOutCirc = (x:number) => {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Voxel : React.FC = () => {
  const refContainer: any = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>()
  const [_camera, setCamera] = useState<THREE.OrthographicCamera>()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState<OrbitControls>()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)
      
      const al = new THREE.AmbientLight(0xaaaaaa, 0.4);
      scene.add(al);

      const dl1 = new THREE.DirectionalLight(0xbbbbbb, 0.7);
      dl1.position.set(2,2,0);
      //const dl1Helper = new THREE.DirectionalLightHelper(dl1, 3);
      scene.add(dl1);

      // const dl2 = new THREE.DirectionalLight(0xbbbbbb, 0.3);
      // dl2.position.set(-5,-2,-5);
      // //const dlHelper = new THREE.DirectionalLightHelper(dl2, 3);
      // scene.add(dl2);

      const pl1 = new THREE.PointLight(0xffffff, 1, 8, 2);
      //const pl1Helper = new THREE.PointLightHelper(pl1, 3);
      pl1.position.set(0,2,0);
      scene.add(pl1);

      // const pl2 = new THREE.PointLight(0xffffff, 0.2, 8, 2);
      // //const pl2Helper = new THREE.PointLightHelper(pl2, 3);
      // pl2.position.set(8,3,-2);
      // scene.add(pl2);

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      loadGLTFModel(scene, '/logo.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req:any = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          //const rotSpeed = 10;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 10;

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    //@ts-ignore
    <VoxelContainer ref={refContainer}>{loading && <VoxelLoader />}</VoxelContainer>
  )
}

export default Voxel;
