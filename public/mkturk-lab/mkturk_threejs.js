async function initThreeJS(sceneData) {
  /**
   * INIT RENDERER
   * WebGL uses 2 Canvases and it's faster to swap them
   * Reference: https://stackoverflow.com/questions/27746091/preservedrawingbuffer-false-is-it-worth-the-effort
   */

  renderer = new THREE.WebGLRenderer({
    canvas: VISIBLECANVASWEBGL,
    antialias: false,
    alpha: true,
    preserveDrawingBuffer: false,
  });

  renderer.setClearColor(0x7f7f7f, 0);
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.autoClear = false;
  renderer.setPixelRatio(TASK.THREEJSRenderRatio);
  document.body.append(renderer.domElement);

  renderer.domElement.style.width = VISIBLECANVASWEBGL.width / TASK.THREEJSRenderRatio + "px";
  renderer.domElement.style.height = VISIBLECANVASWEBGL.height / TASK.THREEJSRenderRatio + "px";

  console.log(VISIBLECANVAS.clientWidth, VISIBLECANVAS.clientHeight);

  // INIT SCENE
  scene = {};

  for (let sceneType in sceneData) {
    let sceneInstance = new THREE.Scene();
    scene[sceneType] = sceneInstance;
  } // FOR n scenes
} // FUNCTION initThreeJS

async function addToScene(taskscreen) {
  // Do the math // when camera is positioned at (0,0,10) and looks at (0,0,0), and has fov = 45
  // var defaultcamera;

  var defaultcamera = new THREE.PerspectiveCamera(
    TASK.THREEJScameraFOV, // FOV
    1, // aspect ratio
    0.1, // near
    2000 // far
  );

  defaultcamera.position.set(0, 0, TASK.THREEJScameraZDist);
  defaultcamera.lookAt(0, 0, 0);
  defaultcamera.updateMatrixWorld();
  defaultcamera.name = "defaultcam";

  var unitvec = new THREE.Vector3(1, 0, 0);

  var unitvec2d = toScreenPosition(unitvec, defaultcamera);
  IMAGEMETA["THREEJStoPixels"] = unitvec2d.x - renderer.domElement.width / 2;

  let framerate = ENV.FrameRateMovie;

  for (
    let classlabel = 0;
    classlabel < IMAGES[taskscreen].length;
    classlabel++
  ) {
    //==== CAMERAS
    // init camera
    // loop through CAMERAS object
    // but it's better to have only one camera in the scene
    // add cameras if visible == 1

    CAMERAS[taskscreen][classlabel] = {};
    for (let cam in IMAGES[taskscreen][classlabel].CAMERAS) {
      var camera;

      if (
        IMAGES[taskscreen][classlabel].CAMERAS[cam].type == "PerspectiveCamera"
      ) {
        camera = new THREE.PerspectiveCamera(
          TASK.THREEJScameraFOV,
          VISIBLECANVASWEBGL.width / VISIBLECANVASWEBGL.height,
          IMAGES[taskscreen][classlabel].CAMERAS[cam].near,
          IMAGES[taskscreen][classlabel].CAMERAS[cam].far
        );
      } else if (
        IMAGES[taskscreen][classlabel].CAMERAS[cam].type == "OrthographicCamera"
      ) {
        camera = new THREE.OrthographicCamera(
          VISIBLECANVASWEBGL.width / (ENV.ViewportPPI / ENV.CanvasRatio) / -2,
          VISIBLECANVASWEBGL.width / (ENV.ViewportPPI / ENV.CanvasRatio) / 2,
          VISIBLECANVASWEBGL.height / (ENV.ViewportPPI / ENV.CanvasRatio) / 2,
          VISIBLECANVASWEBGL.height / (ENV.ViewportPPI / ENV.CanvasRatio) / -2,
          IMAGES[taskscreen][classlabel].CAMERAS[cam].near,
          IMAGES[taskscreen][classlabel].CAMERAS[cam].far
        );
      }

      camera.name = `cam${classlabel}`;
      scene[taskscreen].add(camera);

      if (taskscreen == "Sample" || taskscreen == "Test") {
        FLAGS.movieper[taskscreen][classlabel] = Array(
          IMAGES[taskscreen][classlabel].nimages
        ).fill(0);
      }

      for (let i = 0; i < IMAGES[taskscreen][classlabel].nimages; i++) {
        let durationMS = chooseArrayElement(
          IMAGES[taskscreen][classlabel].durationMS,
          i,
          0
        );
        // FOR CAMERA position (THREEJS coordinate)
        if (
          Array.isArray(
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.x[i]
          )
        ) {
          IMAGES[taskscreen][classlabel].CAMERAS[cam].position.x[i] =
            interpParam_frames(
              IMAGES[taskscreen][classlabel].CAMERAS[cam].position.x[i],
              "continuous",
              durationMS,
              framerate
            );

          FLAGS.movieper[taskscreen][classlabel][i] =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.x[i].length;
          var cameraFirstposition_x =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.x[0][0];
        } else {
          // IF isArray CAMERAS.position.x
          var cameraFirstposition_x =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.x[0];
        }

        if (
          Array.isArray(
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.y[i]
          )
        ) {
          IMAGES[taskscreen][classlabel].CAMERAS[cam].position.y[i] =
            interpParam_frames(
              IMAGES[taskscreen][classlabel].CAMERAS[cam].position.y[i],
              "continuous",
              durationMS,
              framerate
            );

          FLAGS.movieper[taskscreen][classlabel][i] =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.y[i].length;
          var cameraFirstposition_y =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.y[0][0];
        } else {
          var cameraFirstposition_y =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.y[0];
        }

        if (
          Array.isArray(
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.z[i]
          )
        ) {
          IMAGES[taskscreen][classlabel].CAMERAS[cam].position.z[i] =
            interpParam_frames(
              IMAGES[taskscreen][classlabel].CAMERAS[cam].position.z[i],
              "continuous",
              durationMS,
              framerate
            );

          FLAGS.movieper[taskscreen][classlabel][i] =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.z[i].length;

          var cameraFirstposition_z =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.z[0][0];
        } else {
          var cameraFirstposition_z =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].position.z[0];
        }

        /**
         * FOR LOOKAT target
         * Previous scenefile had targetInches. This number is transformed into THREEJS unit
         * New scenefile will only have THREEJS unit or MkTurk will treat all numbers as THREEJS units
         */

        if (
          IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS ===
          undefined
        ) {
          IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS = {};
          for (keys in IMAGES[taskscreen][classlabel].CAMERAS[cam]
            .targetInches) {
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS[keys] =
              rescaleArrayInchestoTHREEJS(
                IMAGES[taskscreen][classlabel].CAMERAS[cam].targetInches[keys],
                ENV.THREEJStoInches
              );
          }
        }

        // IF CAMERA.targetTHREEJS.x isArray
        if (
          Array.isArray(
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.x[i]
          )
        ) {
          IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.x[i] =
            interpParam_frames(
              IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.x[i],
              "continuous",
              durationMS,
              framerate
            );

          FLAGS.movieper[taskscreen][classlabel][i] =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.x[
              i
            ].length;

          var cameraFirsttarget_x =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.x[0][0];
        } else {
          var cameraFirsttarget_x =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.x[0];
        }

        // IF CAMERA.targetTHREEJS.y isArray
        if (
          Array.isArray(
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.y[i]
          )
        ) {
          IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.y[i] =
            interpParam_frames(
              IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.y[i],
              "continuous",
              durationMS,
              framerate
            );

          FLAGS.movieper[taskscreen][classlabel][i] =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.y[
              i
            ].length;

          var cameraFirsttarget_y =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.y[0][0];
        } else {
          var cameraFirsttarget_y =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.y[0];
        }

        // IF CAMERA.targetTHREEJS.z isArray
        if (
          Array.isArray(
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.z[i]
          )
        ) {
          IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.z[i] =
            interpParam_frames(
              IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.z[i],
              "continuous",
              durationMS,
              framerate
            );

          FLAGS.movieper[taskscreen][classlabel][i] =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.z[
              i
            ].length;

          var cameraFirsttarget_z =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.z[0][0];
        } else {
          var cameraFirsttarget_z =
            IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.z[0];
        }
      }

      camera.position.set(
        cameraFirstposition_x,
        cameraFirstposition_y,
        cameraFirstposition_z
      );

      camera.target = new THREE.Vector3(
        cameraFirsttarget_x,
        cameraFirsttarget_y,
        cameraFirsttarget_z
      );

      camera.updateMatrixWorld();
      camera.updateProjectionMatrix();

      CAMERAS[taskscreen][classlabel][cam] = camera;
    } //FOR cam in cameras

    //==== LIGHTS
    LIGHTS[taskscreen][classlabel] = [];
    for (let lt in IMAGES[taskscreen][classlabel].LIGHTS) {
      let lightIdx = Object.keys(IMAGES[taskscreen][classlabel].LIGHTS).indexOf(
        lt
      );
      // let light = new THREE.DirectionalLight(
      //   Number(IMAGES[taskscreen][classlabel].LIGHTS[lt].color), // LIGHT COLOR
      //   IMAGES[taskscreen][classlabel].LIGHTS[lt].intensity // LIGHT INTENSITY
      // );

      let light;
      if (
        IMAGES[taskscreen][classlabel].LIGHTS[lt].type === "DirectionalLight"
      ) {
        light = new THREE.DirectionalLight(
          Number(IMAGES[taskscreen][classlabel].LIGHTS[lt].color), // LIGHT COLOR
          IMAGES[taskscreen][classlabel].LIGHTS[lt].intensity // LIGHT INTENSITY
        );
      } else if (
        IMAGES[taskscreen][classlabel].LIGHTS[lt].type === "AmbientLight"
      ) {
        light = new THREE.AmbientLight(
          IMAGES[taskscreen][classlabel].LIGHTS[lt].color, // LIGHT COLOR
          IMAGES[taskscreen][classlabel].LIGHTS[lt].intensity // LIGHT INTENSITY
        );
      }

      light.name = classlabel + lt;
      scene[taskscreen].add(light);
      LIGHTS[taskscreen][classlabel][lt] = light;

      // Expand movie frames if lighting varies over time
      if (taskscreen == "Sample" || taskscreen == "Test") {
        for (let i = 0; i < IMAGES[taskscreen][classlabel].nimages; i++) {
          let durationMS = chooseArrayElement(
            IMAGES[taskscreen][classlabel].durationMS,
            i,
            0
          );

          // LIGHT Position (THREEJS Coordinate)

          // IF LIGHTS.position.x isArray
          if (
            Array.isArray(
              IMAGES[taskscreen][classlabel].LIGHTS[lt].position.x[i]
            )
          ) {
            IMAGES[taskscreen][classlabel].LIGHTS[lt].position.x[i] =
              interpParam_frames(
                IMAGES[taskscreen][classlabel].LIGHTS[lt].position.x[i],
                "continuous",
                durationMS,
                framerate
              );
            FLAGS.movieper[taskscreen][classlabel][i] =
              IMAGES[taskscreen][classlabel].LIGHTS[lt].position.x[i].length;
          }

          // IF LIGHTS.position.y isArray
          if (
            Array.isArray(
              IMAGES[taskscreen][classlabel].LIGHTS[lt].position.y[i]
            )
          ) {
            IMAGES[taskscreen][classlabel].LIGHTS[lt].position.y[i] =
              interpParam_frames(
                IMAGES[taskscreen][classlabel].LIGHTS[lt].position.y[i],
                "continuous",
                durationMS,
                framerate
              );
            FLAGS.movieper[taskscreen][classlabel][i] =
              IMAGES[taskscreen][classlabel].LIGHTS[lt].position.y[i].length;
          }

          // IF LIGHTS.position.z isArray
          if (
            Array.isArray(
              IMAGES[taskscreen][classlabel].LIGHTS[lt].position.z[i]
            )
          ) {
            IMAGES[taskscreen][classlabel].LIGHTS[lt].position.z[i] =
              interpParam_frames(
                IMAGES[taskscreen][classlabel].LIGHTS[lt].position.z[i],
                "continuous",
                durationMS,
                framerate
              );
            FLAGS.movieper[taskscreen][classlabel][i] =
              IMAGES[taskscreen][classlabel].LIGHTS[lt].position.z[i].length;
          }

          // IF LIGHTS.intensity isArray
          if (
            Array.isArray(
              IMAGES[taskscreen][classlabel].LIGHTS[lt].intensity[i]
            )
          ) {
            IMAGES[taskscreen][classlabel].LIGHTS[lt].intensity[i] =
              interpParam_frames(
                IMAGES[taskscreen][classlabel].LIGHTS[lt].intensity[i],
                "continuous",
                durationMS,
                framerate
              );

            FLAGS.movieper[taskscreen][classlabel][i] =
              IMAGES[taskscreen][classlabel].LIGHTS[lt].intensity[i].length;
          }

          // IF LIGHTS.visible isArray
          if (
            Array.isArray(IMAGES[taskscreen][classlabel].LIGHTS[lt].visible[i])
          ) {
            IMAGES[taskscreen][classlabel].LIGHTS[lt].visible[i] = interpParam_frames(
              IMAGES[taskscreen][classlabel].LIGHTS[lt].visible[i],
              "binary",
              durationMS,
              framerate
            );

            FLAGS.movieper[taskscreen][classlabel][i] =
              IMAGES[taskscreen][classlabel].LIGHTS[lt].visible[i].length;
          }
        } // FOR n images
      } // IF Sample || Test
    } //FOR lt lights

    //==== OBJECTS
    // const orig = new THREE.MeshPhysicalMaterial()
    for (let obj in IMAGES[taskscreen][classlabel].OBJECTS) {
      let objects = OBJECTS[taskscreen][classlabel].meshes[obj].scene;
      let materialparam = IMAGES[taskscreen][classlabel].OBJECTS[obj].material;

      let meshpartnames = [];
      objects.traverse((child) => {
        if (child.name != "Scene") {
          meshpartnames.push(child.name); // store in case of morph later
        }

        // set texture
        if (child.material) {
          if (child.name == "Base") {
            let material = new THREE.MeshPhysicalMaterial(materialparam);
            material.map = child.material.map;
            child.material = material;
            child.material.needsUpdate = true;
          } // IF 'Base' Mesh

          if (child.name == "Eyeriris" || child.name == "Eyeliris") {
            child.renderOrder = 1;
          }

          child.material.transparent = true;
        } // IF child.material
      }); // objects.traverse (material)

      let bbox = new THREE.Box3();
      bbox.setFromObject(objects);
      let bbdim = new THREE.Vector3();
      bbox.getSize(bbdim);

      let dimArr = [bbdim.x, bbdim.y, bbdim.z];
      let maxLen = Math.max.apply(null, dimArr);

      IMAGES[taskscreen][classlabel].OBJECTS[obj].intrinsicMeshBoundingBox =
        dimArr;
      IMAGES[taskscreen][classlabel].OBJECTS[obj].intrinsicMeshMaxDim = maxLen;

      /**
       * Previous scenefile has sizeInches and positionInches
       * which is transformed to THREEJS units.
       * Future scenefile will only have sizeTHREEJS and positionTHREEJS
       */

      if (
        IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS === undefined
      ) {
        let objSize = IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeInches;
        IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS =
          rescaleArrayInchestoTHREEJS(objSize, ENV.THREEJStoInches);
      }

      if (
        IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS ===
        undefined
      ) {
        IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS = {};
        for (let key in IMAGES[taskscreen][classlabel].OBJECTS[obj]
          .positionInches) {
          IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS[key] =
            rescaleArrayInchestoTHREEJS(
              IMAGES[taskscreen][classlabel].OBJECTS[obj].positionInches[key],
              ENV.THREEJStoInches
            );
        }
      }

      objects.name = classlabel + obj;
      scene[taskscreen].add(objects);
      // stores delta (Target mesh-origin mesh); same length as morphTarget
      IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTargetDelta = [];

      // stores multiplier that is multiplied to the morphTargetvertdelta
      IMAGES[taskscreen][classlabel].OBJECTS[obj].morphMultiplier = [];

      // add boxhelper for each object
      let box = new THREE.BoxHelper(objects, 0xff0000);
      box.name = `${obj}_${taskscreen}_${classlabel}_boxhelper`;
      box.material.needsUpdate = true;
      scene[taskscreen].add(box);

      // Expand movie frames if object latent variables vary over time

      if (taskscreen == "Sample" || taskscreen == "Test") {
        for (let i = 0; i < IMAGES[taskscreen][classlabel].nimages; i++) {
          let durationMS = chooseArrayElement(
            IMAGES[taskscreen][classlabel].durationMS,
            i,
            0
          );

          for (let key in IMAGES[taskscreen][classlabel].OBJECTS[obj]
            .positionTHREEJS) {
            if (
              IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS[
                key
              ] !== undefined &&
              Array.isArray(
                IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS[
                  key
                ][i]
              )
            ) {
              IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS[key][
                i
              ] = interpParam_frames(
                IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS[
                  key
                ][i],
                "continuous",
                durationMS,
                framerate
              );
              FLAGS.movieper[taskscreen][classlabel][i] =
                IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS[
                  key
                ][i].length;
            }
          } // FOR Object.position.{x, y, z}

          for (let key in IMAGES[taskscreen][classlabel].OBJECTS[obj]
            .rotationDegrees) {
            if (
              IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees[
                key
              ] !== undefined &&
              Array.isArray(
                IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees[
                  key
                ][i]
              )
            ) {
              IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees[key][
                i
              ] = interpParam_frames(
                IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees[
                  key
                ][i],
                "continuous",
                durationMS,
                framerate
              );
              FLAGS.movieper[taskscreen][classlabel][i] =
                IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees[
                  key
                ][i].length;
            }
          } // FOR Object.rotation.{x, y, z}

          if (
            IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS !==
              undefined &&
            Array.isArray(
              IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS[i]
            )
          ) {
            IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS[i] =
              interpParam_frames(
                IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS[i],
                "continuous",
                durationMS,
                framerate
              );
            FLAGS.movieper[taskscreen][classlabel][i] =
              IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS[i].length;
          } // IF isArray Object.size

          if (
            IMAGES[taskscreen][classlabel].OBJECTS[obj].visible !== undefined &&
            Array.isArray(
              IMAGES[taskscreen][classlabel].OBJECTS[obj].visible[i]
            )
          ) {
            IMAGES[taskscreen][classlabel].OBJECTS[obj].visible[i] =
              interpParam_frames(
                IMAGES[taskscreen][classlabel].OBJECTS[obj].visible[i],
                "binary",
                durationMS,
                framerate
              );
            FLAGS.movieper[taskscreen][classlabel][i] =
              IMAGES[taskscreen][classlabel].OBJECTS[obj].visible[i].length;
          } //IF isArray Object.visible

          if (
            IMAGES[taskscreen][classlabel].OBJECTS[obj].material.opacity !==
              undefined &&
            Array.isArray(
              IMAGES[taskscreen][classlabel].OBJECTS[obj].material.opacity[i]
            )
          ) {
            IMAGES[taskscreen][classlabel].OBJECTS[obj].material.opacity[i] =
              interpParam_frames(
                IMAGES[taskscreen][classlabel].OBJECTS[obj].material.opacity[i],
                "continuous",
                durationMS,
                framerate
              );
            FLAGS.movieper[taskscreen][classlabel][i] =
              IMAGES[taskscreen][classlabel].OBJECTS[obj].material.opacity[
                i
              ].length;
          } //IF isArray Object.opacity

          // ∆mesh for morphing

          if (
            IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTarget !==
            undefined
          ) {
            IMAGES[taskscreen][classlabel].OBJECTS[obj].originmesh = {};

            for (let m = 0; m < meshpartnames.length; m++) {
              IMAGES[taskscreen][classlabel].OBJECTS[obj].originmesh[
                meshpartnames[m]
              ] = {
                position: [],
                normal: [],
              };
              IMAGES[taskscreen][classlabel].OBJECTS[obj].originmesh[
                meshpartnames[m]
              ].position = math.matrix(
                Array.from(
                  objects.getObjectByName(meshpartnames[m]).geometry.attributes
                    .position.array
                )
              );

              if (meshpartnames[m] == "Base") {
                IMAGES[taskscreen][classlabel].OBJECTS[obj].originmesh[
                  meshpartnames[m]
                ].normal = math.matrix(
                  Array.from(
                    objects.getObjectByName(meshpartnames[m]).geometry
                      .attributes.normal.array
                  )
                );
              } else {
                IMAGES[taskscreen][classlabel].OBJECTS[obj].originmesh[
                  meshpartnames[m]
                ].normal = [];
              }
            } // FOR m meshes, store original mesh vertices to reset on next trial

            if (
              Array.isArray(
                IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTarget[i]
              )
            ) {
              /**
               * change morphTarget string to an array of appropriate integers
               * For example, morphTarget[i] = ['neptune', 'neptune'] means
               * that original object will reach neptune at durationMS / 2
               * and stay neptune until durationMS ==> morphTime = [0, 1, 1]
               *
               * if morphTarget[i] = ['neptune', 'elias', 'elias'] it means
               * that the original object will reach neptune at durationMS / 3,
               * elias at durationMS * 2 / 3, and stay as elias until
               * durationMS ==> morphTime = [0, 1, 2, 2]
               */

              let morphTime = [0];
              for (
                let j = 0;
                j <
                IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTarget[i]
                  .length;
                j++
              ) {
                if (
                  j == 0 &&
                  IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTarget[i][
                    j
                  ] == obj
                ) {
                  morphTime.push(j);
                } else if (
                  j != 0 &&
                  IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTarget[i][
                    j
                  ] ==
                    IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTarget[i][
                      j - 1
                    ]
                ) {
                  morphTime.push(morphTime[j]);
                } else {
                  morphTime.push(morphTime[j] + 1);
                }
              }

              let morphTargetIdx = math.setDistinct(morphTime);
              morphTime = interpParam_frames(
                morphTime,
                "continuous",
                durationMS,
                framerate
              );
              FLAGS.movieper[taskscreen][classlabel][i] = morphTime.length;
              IMAGES[taskscreen][classlabel].OBJECTS[obj].morphMultiplier[i] =
                [];

              for (let j = 0; j < morphTargetIdx.length - 1; j++) {
                // maybe morphTargetIdx.length not length - 1
                IMAGES[taskscreen][classlabel].OBJECTS[obj].morphMultiplier[i][
                  j
                ] = [];
                let arr = math.zeros(morphTime.length)._data;
                let idx = [];

                for (let k = 0; k < morphTime.length; k++) {
                  if (
                    j == 0 &&
                    morphTime[k] >= morphTargetIdx[j] &&
                    morphTime[k] <= morphTargetIdx[j + 1]
                  ) {
                    arr[k] = morphTime[k];
                    idx.push(k);
                  } else if (
                    j != 0 &&
                    morphTime[k] > morphTargetIdx[j] &&
                    morphTime[k] <= morphTargetIdx[j + 1]
                  ) {
                    arr[k] = morphTime[k] - j;
                    idx.push(k);
                  }
                }

                if (idx[idx.length - 1] < arr.length - 1) {
                  arr = math.subset(
                    arr,
                    math.index(range(idx[idx.length - 1], arr.length - 1, 1)),
                    Array(arr.length - idx[idx.length - 1]).fill(
                      arr[idx[idx.length - 1]]
                    )
                  );
                }
                IMAGES[taskscreen][classlabel].OBJECTS[obj].morphMultiplier[i][
                  j
                ] = arr;
              }

              IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTargetDelta[i] =
                [];
              for (
                let j = 0;
                j <
                IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTarget[i]
                  .length;
                j++
              ) {
                let morphTargetDelta = {};
                let morphOriginName;

                if (j == 0) {
                  morphOriginName = obj;
                } else {
                  morphOriginName =
                    IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTarget[i][
                      j - 1
                    ];
                }

                let morphTargetName =
                  IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTarget[i][j];

                if (morphTargetName != morphOriginName) {
                  let morphOrigin =
                    OBJECTS[taskscreen][classlabel].meshes[morphOriginName]
                      .scene;
                  let morphTarget =
                    OBJECTS[taskscreen][classlabel].meshes[morphTargetName]
                      .scene;

                  for (let m = 0; m < meshpartnames.length; m++) {
                    morphTargetDelta[meshpartnames[m]] = {
                      position: [],
                      normal: [],
                    };

                    let morphTargetVert = math.matrix(
                      Array.from(
                        morphTarget.getObjectByName(meshpartnames[m]).geometry
                          .attributes.position.array
                      )
                    );
                    let morphOriginVert = math.matrix(
                      Array.from(
                        morphOrigin.getObjectByName(meshpartnames[m]).geometry
                          .attributes.position.array
                      )
                    );

                    if (
                      meshpartnames[m] == "Base" &&
                      IMAGES[taskscreen][classlabel].OBJECTS[obj]
                        .baseVertexInd !== undefined &&
                      IMAGES[taskscreen][classlabel].OBJECTS[obj]
                        .baseVertexInd != []
                    ) {
                      let objectOriginVert = objects.getObjectByName(
                        meshpartnames[m]
                      ).geometry.attributes.position.array;

                      let objectOriginVertIdx =
                        IMAGES[taskscreen][classlabel].OBJECTS[obj]
                          .baseVertexInd;

                      let morphTargetVertIdx =
                        IMAGES[taskscreen][classlabel].OBJECTS[morphTargetname]
                          .baseVertexInd;
                      let morphOriginVertIdx =
                        IMAGES[taskscreen][classlabel].OBJECTS[morphOriginname]
                          .baseVertexInd;

                      morphTargetVertIdx = morphTargetVertIdx
                        .map((num) => {
                          return [...[num * 3 - 3, num * 3 - 2, num * 3 - 1]];
                        })
                        .flat();

                      morphOriginVertIdx = morphOriginVertIdx
                        .map((num) => {
                          return [...[num * 3 - 3, num * 3 - 2, num * 3 - 1]];
                        })
                        .flat();

                      objectOriginVertIdx = objectOriginVertIdx
                        .map((num) => {
                          return [...[num * 3 - 3, num * 3 - 2, num * 3 - 1]];
                        })
                        .flat();

                      morphTargetVert = morphTargetVert.subset(
                        math.index(morphTargetVertIdx)
                      );

                      morphOriginVert = morphOriginVert.subset(
                        math.index(morphOriginVertIdx)
                      );

                      let objectOriginVertDelta = math.zeros(
                        objectOriginVert.length
                      );

                      objectOriginVertDelta.subset(
                        math.index(objectOriginVertIdx),
                        math.subtract(morphTargetVert, morphOriginVert)._data
                      );

                      morphTargetDelta[meshpartnames[m]].position =
                        objectOriginVertDelta;

                      // normals
                      let morphTargetNormal = math.matrix(
                        Array.from(
                          morphTarget.getObjectByName(meshpartnames[m]).geometry
                            .attributes.normal.array
                        )
                      );

                      let morphOriginNormal = math.matrix(
                        Array.from(
                          morphOrigin.getObjectByName(meshpartnames[m]).geometry
                            .attributes.normal.array
                        )
                      );

                      let objectOriginNormal = objects.getObjectByName(
                        meshpartnames[m]
                      ).geometry.attributes.normal.array;

                      morphTargetNormal = morphTargetNormal.subset(
                        math.index(morphTargetVertIdx)
                      );

                      morphOriginNormal = morphOriginNormal.subset(
                        math.index(morphOriginVertIdx)
                      );

                      let objectOriginNormalDelta = math.zeros(
                        objectOriginNormal.length
                      );

                      objectOriginNormalDelta.subset(
                        math.index(objectOriginVertIdx),
                        math.subtract(morphTargetNormal, morphOriginNormal)
                          ._data
                      );

                      morphTargetDelta[meshpartnames[m]].normal =
                        objectOriginNormalDelta;
                      /**
                       * IF only morph specific vertices of Base, only move
                       * appleface portion of the mesh (Base mesh will have
                       * different number of vertices)
                       */
                    } else {
                      morphTargetDelta[meshpartnames[m]].position =
                        math.subtract(morphTargetVert, morphOriginVert);
                      morphTargetDelta[meshpartnames[m]].normal = [];
                    } // ELSE morph all vertices
                  } // FOR m meshparts

                  IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTargetDelta[
                    i
                  ].push(morphTargetDelta);
                } // FOR j morphTargets
              } // IF morphTarget isArray
            } // IF morphTarget exists
          } // FOR i images
        } // IF Sample
      } // FOR obj objects
    } // FOR obj objects

    /**
     * 2D FILTERS for all objects on the scene
     * available filters:
     * blur(), brightness(), contrast(),
     * grayscale(), hue-rotate(), invert(),
     * opacity(), saturate(), sepia()
     * reference: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
     */

    if (IMAGES[taskscreen][classlabel].OBJECTFILTERS !== undefined) {
      if (taskscreen == "Sample" || taskscreen == "Test") {
        for (let i = 0; i < IMAGES[taskscreen][classlabel].nimages; i++) {
          for (let key in IMAGES[taskscreen][classlabel].OBJECTFILTERS) {
            if (
              IMAGES[taskscreen][classlabel].OBJECTFILTERS[key] !== undefined &&
              Array.isArray(
                IMAGES[taskscreen][classlabel].OBJECTFILTERS[key][i]
              )
            ) {
              IMAGES[taskscreen][classlabel].OBJECTFILTERS[key][i] =
                interpParam_frames(
                  IMAGES[taskscreen][classlabel].OBJECTFILTERS[key][i],
                  "continuous",
                  durationMS,
                  framerate
                );

              FLAGS.movieper[taskscreen][classlabel][i] =
                IMAGES[taskscreen][classlabel].OBJECTFILTERS[key][i].length;
            }
          } // FOR key in OBJECTFILTERS
        } // FOR n images
      } // IF Sample or Test
    } // IF OBJECTFILTERS exist

    //BACKGROUND 2D IMAGE
    if (taskscreen == "Sample" || taskscreen == "Test") {
      var boxGeometry = new THREE.BoxGeometry(1, 1, 1);

      /**
       * set MeshPhysicalTexture if materials other than BasicMaterial is provided
       * cubeBackground is now affected by lighting
       */

      let materialArray = [];

      if (
        IMAGES[taskscreen][classlabel].IMAGES.material !== undefined &&
        IMAGES[taskscreen][classlabel].IMAGES.material.type !=
          "MeshBasicMaterial"
      ) {
        for (let i = 0; i < 6; i++) {
          materialArray.push(
            new THREE.MeshPhysicalMaterial({
              map: new THREE.Texture(),
              color: "",
            })
          );
        }
      } else {
        for (let i = 0; i < 6; i++) {
          materialArray.push(
            new THREE.MeshBasicMaterial({
              map: new THREE.Texture(),
              color: "",
            })
          );
        }
      }

      transparentFace = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        side: THREE.BackSide,
      });

      let backgroundCube = new THREE.Mesh(boxGeometry, materialArray);
      backgroundCube.name = "backgroundCube" + classlabel;
      backgroundCube.material.needsUpdate = true;

      scene[taskscreen].add(backgroundCube);

      let box = new THREE.BoxHelper(backgroundCube, 0xff0000);
      box.name = backgroundCube.name + "boxhelper";
      box.material.needsUpdate = true;
      scene[taskscreen].add(box);

      if (IMAGES[taskscreen][classlabel].IMAGES.sizeTHREEJS === undefined) {
        IMAGES[taskscreen][classlabel].IMAGES.sizeTHREEJS =
          rescaleArrayInchestoTHREEJS(
            [IMAGES[taskscreen][classlabel].IMAGES.sizeInches],
            ENV.THREEJStoInches
          );
      }

      for (let i = 0; i < IMAGES[taskscreen][classlabel].nimages; i++) {
        // IF background image idx isArray
        let imgIdx;
        if (!Array.isArray(IMAGES[taskscreen][classlabel].IMAGES.imageidx[i])) {
          imgIdx = [
            IMAGES[taskscreen][classlabel].IMAGES.imageidx[i],
            IMAGES[taskscreen][classlabel].IMAGES.imageidx[i],
          ];
        } else {
          // ELSE isArray
          imgIdx = IMAGES[taskscreen][classlabel].IMAGES.imageidx[i];
        }

        let durationMS = chooseArrayElement(
          IMAGES[taskscreen][classlabel].durationMS,
          i,
          0
        );

        IMAGES[taskscreen][classlabel].IMAGES.imageidx[i] = interpParam_frames(
          imgIdx,
          "binary",
          durationMS,
          framerate
        );

        for (
          let j = 0;
          j < IMAGES[taskscreen][classlabel].IMAGES.imageidx[i].length;
          j++
        ) {
          if (IMAGES[taskscreen][classlabel].IMAGES.imageidx[i][j] !== "") {
            IMAGES[taskscreen][classlabel].IMAGES.imageidx[i][j] = Math.round(
              IMAGES[taskscreen][classlabel].IMAGES.imageidx[i][j]
            );
          }
        } // FOR j img indices, round

        if (
          !IMAGES[taskscreen][classlabel].IMAGES.imageidx[i].every(
            (val, i, arr) => val === arr[0]
          )
        ) {
          FLAGS.movieper[taskscreen][classlabel][i] =
            IMAGES[taskscreen][classlabel].IMAGES.imageidx[i].length;
        }

        if (IMAGES[taskscreen][classlabel].IMAGES.visible !== undefined) {
          // IF IMAGES.visible isArray
          if (Array.isArray(IMAGES[taskscreen][classlabel].IMAGES.visible[i])) {
            IMAGES[taskscreen][classlabel].IMAGES.visible[i] = interpParam_frames(
              IMAGES[taskscreen][classlabel].IMAGES.visible[i],
              "binary",
              durationMS,
              framerate
            );
          }
        } else {
          // ELSE IMAGES.visible exists
          IMAGES[taskscreen][classlabel].IMAGES.visible = [1];
        }

        /**
         * 2D Filters
         * available filters:
         * blur(), brightness(), contrast(),
         * grayscale(), hue-rotate(), invert(),
         * opacity(), saturate(), sepia()
         * reference: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
         */

        if (IMAGES[taskscreen][classlabel].IMAGEFILTERS !== undefined) {
          for (let key in IMAGES[taskscreen][classlabel].IMAGEFILTERS) {
            if (
              IMAGES[taskscreen][classlabel].IMAGEFILTERS[key] !== undefined &&
              Array.isArray(IMAGES[taskscreen][classlabel].IMAGEFILTERS[key][i])
            ) {
              IMAGES[taskscreen][classlabel].IMAGEFILTERS[key][i] = interpParam_frames(
                IMAGES[taskscreen][classlabel].IMAGEFILTERS[key][i],
                "continuous",
                durationMS,
                framerate
              );

              FLAGS.movieper[taskscreen][classlabel][i] =
                IMAGES[taskscreen][classlabel].IMAGEFILTERS[key][i].length;
            } // IF IMAGEFILTERS[key][i] isArray
          } // FOR each filter in IMAGEFILTERS
        } // IF background image filter exists
      } // FOR n images
    } //IF  Sample
  } //FOR classlabels

  //==== GridCenters in 3JS (==> POSSIBLE CAMERA OFFSETS FOR SAMPLE,TEST,CHOICE "ROOMS")
  IMAGEMETA[taskscreen + "XGridCenterTHREEJS"] = [];
  IMAGEMETA[taskscreen + "YGridCenterTHREEJS"] = [];

  // FOR each grid index
  for (let gridIdx = 0; gridIdx < ENV.XGridCenter.length; gridIdx++) {
    let funcreturn = toTHREEJSOffset(
      ENV.XGridCenter[gridIdx],
      ENV.YGridCenter[gridIdx],
      taskscreen
    );
    IMAGEMETA[taskscreen + "XGridCenterTHREEJS"][gridIdx] = funcreturn[0];
    IMAGEMETA[taskscreen + "YGridCenterTHREEJS"][gridIdx] = funcreturn[1];
  }
} //FUNCTION addToScene(taskscreen)

function updateSingleFrame3D(
  taskscreen,
  classlabels,
  index,
  movieframe,
  gridindex,
  cubeTexture
) {
  //==== TURN OFF ALL ITEMS
  for (let sceneElem in scene[taskscreen]["children"]) {
    scene[taskscreen]["children"][sceneElem].visible = false;

    // REMOVE BoxHelper
    if (scene[taskscreen]["children"][sceneElem].type == "LineSegments") {
      scene[taskscreen].remove(scene[taskscreen]["children"][sceneElem]);
    }
  } // FOR sceneElements

  //==== TURN BACK ON THE CURRENT DISPLAY ITEMS
  var allBoundingBoxes = [];
  var crop = [];
  var allBoundingBoxCubes = [];
  if (typeof classlabels == "number") {
    classlabels = [classlabels];
  }
  for (var i = 0; i <= classlabels.length - 1; i++) {
    var classlabel = classlabels[i];
    allBoundingBoxes[classlabel] = [];
    crop[classlabel] = [];
    allBoundingBoxCubes[classlabel] = [];

    //==== crop
    if (IMAGES[taskscreen][classlabel].crop != undefined) {
      crop[classlabel].push(
        chooseArrayElement(IMAGES[taskscreen][classlabel].crop, index, 0)
      );
    } else {
      crop[classlabel].push(NaN);
    }

    //======= CAMERAS
    for (var cam in IMAGES[taskscreen][classlabel].CAMERAS) {
      var camera = scene[taskscreen].getObjectByName("cam" + classlabel);
      var nextvisible = chooseArrayElement(
        IMAGES[taskscreen][classlabel].CAMERAS[cam].visible,
        index,
        0
      );

      //CAMERA POSITION
      var nextcamPosition = [
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].CAMERAS[cam].position.x,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].CAMERAS[cam].position.y,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].CAMERAS[cam].position.z,
          index,
          0
        ),
      ];

      if (Number.isInteger(movieframe)) {
        nextcamPosition = [
          chooseArrayElement(
            nextcamPosition[0],
            movieframe,
            nextcamPosition[0].length - 1
          ),
          chooseArrayElement(
            nextcamPosition[1],
            movieframe,
            nextcamPosition[1].length - 1
          ),
          chooseArrayElement(
            nextcamPosition[2],
            movieframe,
            nextcamPosition[2].length - 1
          ),
        ];
      } //IF get movieframe

      //CAMERA TARGET
      var nextcamTarget = [
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.x,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.y,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].CAMERAS[cam].targetTHREEJS.z,
          index,
          0
        ),
      ];

      if (Number.isInteger(movieframe)) {
        nextcamTarget = [
          chooseArrayElement(
            nextcamTarget[0],
            movieframe,
            nextcamTarget[0].length - 1
          ),
          chooseArrayElement(
            nextcamTarget[1],
            movieframe,
            nextcamTarget[1].length - 1
          ),
          chooseArrayElement(
            nextcamTarget[2],
            movieframe,
            nextcamTarget[2].length - 1
          ),
        ];
      } //IF get movieframe

      if (nextvisible == 1) {
        camera.visible = true;
      } else {
        camera.visible = false;
      }
      updateCameraSingleFrame(camera, nextcamPosition, nextcamTarget);
    } //FOR cam CAMERAS

    //======= LIGHTS
    for (var lt in IMAGES[taskscreen][classlabel].LIGHTS) {
      var light = LIGHTS[taskscreen][classlabel][lt];

      //LIGHT POSITION
      var nextlightPosition = [
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].LIGHTS[lt].position.x,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].LIGHTS[lt].position.y,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].LIGHTS[lt].position.z,
          index,
          0
        ),
      ];
      if (Number.isInteger(movieframe)) {
        nextlightPosition = [
          chooseArrayElement(
            nextlightPosition[0],
            movieframe,
            nextlightPosition[0].length - 1
          ),
          chooseArrayElement(
            nextlightPosition[1],
            movieframe,
            nextlightPosition[1].length - 1
          ),
          chooseArrayElement(
            nextlightPosition[2],
            movieframe,
            nextlightPosition[2].length - 1
          ),
        ];
      } //IF get movieframe

      //LIGHT INTENSITY
      var nextintensity = chooseArrayElement(
        IMAGES[taskscreen][classlabel].LIGHTS[lt].intensity,
        index,
        0
      );
      if (Number.isInteger(movieframe)) {
        nextintensity = chooseArrayElement(
          nextintensity,
          movieframe,
          nextintensity.length - 1
        );
      } //IF get movieframe

      //LIGHT VISIBILITY
      var nextvisible = chooseArrayElement(
        IMAGES[taskscreen][classlabel].LIGHTS[lt].visible,
        index,
        0
      );
      if (Number.isInteger(movieframe)) {
        nextvisible = chooseArrayElement(
          nextvisible,
          movieframe,
          nextvisible.length - 1
        );
      } //IF get movieframe

      if (nextvisible == 1) {
        light.visible = true;
      } else {
        light.visible = false;
      } //IF visible

      updateLightSingleFrame(light, nextlightPosition, nextintensity);
    } //FOR lt lights

    //======= OBJECTS
    for (var obj in IMAGES[taskscreen][classlabel].OBJECTS) {
      var objects = OBJECTS[taskscreen][classlabel].meshes[obj].scene;
      var maxlength =
        IMAGES[taskscreen][classlabel].OBJECTS[obj].intrinsicMeshMaxDim;

      //OBJECT POSITION
      var nextobjPosition = [
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS.x,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS.y,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].OBJECTS[obj].positionTHREEJS.z,
          index,
          0
        ),
      ];

      if (Number.isInteger(movieframe)) {
        nextobjPosition = [
          chooseArrayElement(
            nextobjPosition[0],
            movieframe,
            nextobjPosition[0].length - 1
          ),
          chooseArrayElement(
            nextobjPosition[1],
            movieframe,
            nextobjPosition[1].length - 1
          ),
          chooseArrayElement(
            nextobjPosition[2],
            movieframe,
            nextobjPosition[2].length - 1
          ),
        ];
      } //IF get movieframe

      //OBJECT ROTATION
      var nextobjRotation = [
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees.x,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees.y,
          index,
          0
        ),
        chooseArrayElement(
          IMAGES[taskscreen][classlabel].OBJECTS[obj].rotationDegrees.z,
          index,
          0
        ),
      ];
      if (Number.isInteger(movieframe)) {
        nextobjRotation = [
          chooseArrayElement(
            nextobjRotation[0],
            movieframe,
            nextobjRotation[0].length - 1
          ),
          chooseArrayElement(
            nextobjRotation[1],
            movieframe,
            nextobjRotation[1].length - 1
          ),
          chooseArrayElement(
            nextobjRotation[2],
            movieframe,
            nextobjRotation[2].length - 1
          ),
        ];
      } //IF get movieframe

      //OBJECT SIZE
      var nextobjSize = chooseArrayElement(
        IMAGES[taskscreen][classlabel].OBJECTS[obj].sizeTHREEJS,
        index,
        0
      );
      if (Number.isInteger(movieframe)) {
        nextobjSize = chooseArrayElement(
          nextobjSize,
          movieframe,
          nextobjSize.length - 1
        );
      } //IF get movieframe

      nextobjSize = nextobjSize;
      //OBJECT VISIBILITY
      var nextvisible = chooseArrayElement(
        IMAGES[taskscreen][classlabel].OBJECTS[obj].visible,
        index,
        0
      );
      if (Number.isInteger(movieframe)) {
        nextvisible = chooseArrayElement(
          nextvisible,
          movieframe,
          nextvisible.length - 1
        );
      } //IF get movieframe

      //OPACITY
      var nexttransparent = chooseArrayElement(
        IMAGES[taskscreen][classlabel].OBJECTS[obj].material.opacity,
        index,
        0
      );
      if (Number.isInteger(movieframe)) {
        nexttransparent = chooseArrayElement(
          nexttransparent,
          movieframe,
          nexttransparent.length - 1
        );
      } //IF get movieframe

      //MORPH
      var morphDelta = chooseArrayElement(
        IMAGES[taskscreen][classlabel].OBJECTS[obj].morphTargetDelta,
        index,
        0
      );
      var morphMultiplier = chooseArrayElement(
        IMAGES[taskscreen][classlabel].OBJECTS[obj].morphMultiplier,
        index,
        0
      );

      var nextmorph = {};
      if (Number.isInteger(movieframe)) {
        //calculate delta for the current movieframe, add to the origin to get new vertices
        if (morphDelta != undefined) {
          var nextmorphDelta = morphDelta[0]; //need to get key values
          var meshpartnames = Object.keys(nextmorphDelta);

          var deltaMesh = {};
          for (var m = 0; m < meshpartnames.length; m++) {
            deltaMesh[meshpartnames[m]] = [];
            for (var j = 0; j < morphDelta.length; j++) {
              deltaMesh[meshpartnames[m]][j] = { position: [], normal: [] };
              var nextmorphDeltaVert = morphDelta[j][meshpartnames[m]].position;
              var nextmorphDeltaNormal = morphDelta[j][meshpartnames[m]].normal;
              var deltaMultiplier = chooseArrayElement(
                morphMultiplier[j],
                movieframe,
                morphMultiplier.length - 1
              );
              deltaMesh[meshpartnames[m]][j].position = math.multiply(
                nextmorphDeltaVert,
                deltaMultiplier
              );
              deltaMesh[meshpartnames[m]][j].normal = math.multiply(
                nextmorphDeltaNormal,
                deltaMultiplier
              );
            }
          }

          for (keys in deltaMesh) {
            nextmorph[keys] = { position: [], normal: [] };
            var originVert =
              IMAGES[taskscreen][classlabel].OBJECTS[obj].originmesh[keys]
                .position;
            var originNormal =
              IMAGES[taskscreen][classlabel].OBJECTS[obj].originmesh[keys]
                .normal;
            var d = math.zeros(deltaMesh[keys][0].position._data.length);
            for (var j = 0; j < deltaMesh[keys].length; j++) {
              d = math.add(deltaMesh[keys][j].position, d);
            } //FOR j
            nextmorph[keys].position = math.add(d, originVert);

            if (originNormal.length != 0) {
              var d = math.zeros(deltaMesh[keys][0].normal._data.length);
              for (var j = 0; j < deltaMesh[keys].length; j++) {
                d = math.add(deltaMesh[keys][j].normal, d);
              }
              nextmorph[keys].normal = math.add(d, originNormal);
            } else {
              nextmorph[keys].normal = [];
            }
          } //FOR keys
        } //IF
        else if (morphDelta == undefined && movieframe == 0) {
          nextmorph = IMAGES[taskscreen][classlabel].OBJECTS[obj].originmesh;
        }
      } //IF morph

      var camera = scene[taskscreen].getObjectByName("cam" + classlabel);

      if (nextvisible == 1) {
        objects.visible = true;
      } //IF visible
      else {
        objects.visible = false;
      } //ELSE !visible
      var scenecenterX = ENV.XGridCenter[gridindex];
      var scenecenterY = ENV.YGridCenter[gridindex];

      var box = scene[taskscreen].getObjectByName(
        obj + "_" + taskscreen + "_" + classlabel + "_" + "boxhelper"
      );
      var [objPosition, objSize, boundingBox] = updateObjectSingleFrame(
        taskscreen,
        objects,
        box,
        nextobjPosition,
        nextobjRotation,
        nextobjSize,
        nexttransparent,
        nextmorph,
        maxlength,
        camera,
        scenecenterX,
        scenecenterY
      );
      allBoundingBoxes[classlabel].push(boundingBox);
    } //FOR obj in scene

    //======== 3D CUBE BACKGROUND
    var nextimsize = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGES.sizeTHREEJS,
      index,
      0
    );

    if (Number.isInteger(movieframe)) {
      neximsize = chooseArrayElement(
        nextimsize,
        movieframe,
        nextimsize.length - 1
      );
    } //IF get movieframe

    var backgroundCube = scene[taskscreen].getObjectByName(
      "backgroundCube" + classlabel
    );
    //BACKGROUND VISIBILITY

    if (cubeTexture != undefined) {
      var nextvisible = chooseArrayElement(
        IMAGES[taskscreen][classlabel].IMAGES.visible,
        index,
        0
      );
      if (Number.isInteger(movieframe)) {
        nextvisible = chooseArrayElement(
          nextvisible,
          movieframe,
          nextvisible.length - 1
        );
      } //IF get movieframe
    } else {
      var nextvisible = 0;
    }

    if (nextvisible == 1) {
      backgroundCube.visible = true;
    } else {
      backgroundCube.visible = false;
    }
    boundingBoxCube = updateImageSingleFrame(
      taskscreen,
      backgroundCube,
      cubeTexture,
      nextimsize,
      camera,
      scenecenterX,
      scenecenterY
    );
    allBoundingBoxCubes[classlabel].push(boundingBoxCube);
  } //FOR classlabel in classlabels
  return [allBoundingBoxes, allBoundingBoxCubes, crop];
} //FUNCTION updateSingleFrame3D

function updateCameraSingleFrame(camera, cameraPosition, camTarget) {
  camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
  camera.lookAt(camTarget[0], camTarget[1], camTarget[2]);
  camera.updateMatrixWorld(true);
  camera.updateProjectionMatrix(); // FIX
} //FUNCTION updateCameraSingleFrame

function updateLightSingleFrame(light, lightPosition, lightIntensity) {
  light.position.set(lightPosition[0], lightPosition[1], lightPosition[2]);
  light.intensity = lightIntensity;
  //     console.log('3js: light position change')
  //     console.log(lightPosition)
} //FUNCTION updateLightSingleFrame

function updateObjectSingleFrame(
  taskscreen,
  objects,
  box,
  objPosition,
  objRotation,
  objSize,
  objOpacity,
  objMorph,
  maxlength,
  camera,
  scenecenterX,
  scenecenterY
) {
  // objects.matrixWorldNeedsUpdate = false
  // objects.matrixWorldNeedsUpdate = true

  //====MESH MORPH
  //update vertices if morph
  if (objMorph != undefined && Object.keys(objMorph).length > 0) {
    for (keys in objMorph) {
      objects
        .getObjectByName(keys)
        .geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(
            new Float32Array(objMorph[keys].position._data),
            3
          )
        );
      objects.getObjectByName(
        keys
      ).geometry.attributes.position.needsUpdate = true;
      if (objMorph[keys].normal.length != 0) {
        objects
          .getObjectByName(keys)
          .geometry.setAttribute(
            "normal",
            new THREE.BufferAttribute(
              new Float32Array(objMorph[keys].normal._data),
              3
            )
          );
      }
    }
  } //IF morph mesh

  //====ROTATION
  //rotate around the World Axis
  //before rotating set rotation to 0,0,0
  objects.rotation.set(0, 0, 0);
  //Object axis changes as object rotates
  var axis = new THREE.Vector3(1, 0, 0); //x-axis
  var angle = THREE.Math.degToRad(objRotation[0]);
  objects.rotateOnWorldAxis(axis, angle);

  var axis = new THREE.Vector3(0, 1, 0); //y-axis
  var angle = THREE.Math.degToRad(objRotation[1]);
  objects.rotateOnWorldAxis(axis, angle);

  var axis = new THREE.Vector3(0, 0, 1); //z-axis
  var angle = THREE.Math.degToRad(objRotation[2]);
  objects.rotateOnWorldAxis(axis, angle);

  //====TRANSLATION
  objects.position.set(objPosition[0], objPosition[1], objPosition[2]);

  //==== SCALE
  //set size from parameters file
  //make that the largest dimension of the 3d cube = 1 inch
  //measure the current inch
  //current scale = (1,1,1)
  //before scaling set scale to 1,1,1
  //set scale so that visible length is 1 inch.
  objects.scale.set(1, 1, 1);
  objects.scale.divideScalar(maxlength / objSize);
  objects.updateMatrixWorld();

  //==== OPACITY
  objects.traverse(function (child) {
    if (child.material != undefined) {
      child.material.opacity = objOpacity;
    }
  }); //object.traverse (material)

  //==== BOUNDING BOX
  box.update();
  if (FLAGS.savedata == 0) {
    box.visible = true; //show bounding boxes during practice
  } else if (FLAGS.savedata == 1) {
    box.visible = false;
    //         box.material.opacity = 0
    //         box.material.transparent = true //hide the bounding boxes during testing
  }

  // var bbox = new THREE.Box3();
  // bbox.setFromObject(objects);

  let vertices2 = [];
  let vertices = [
    new THREE.Vector3().fromBufferAttribute(
      box.geometry.attributes.position,
      0
    ),
    new THREE.Vector3().fromBufferAttribute(
      box.geometry.attributes.position,
      1
    ),
    new THREE.Vector3().fromBufferAttribute(
      box.geometry.attributes.position,
      2
    ),
    new THREE.Vector3().fromBufferAttribute(
      box.geometry.attributes.position,
      3
    ),
    new THREE.Vector3().fromBufferAttribute(
      box.geometry.attributes.position,
      4
    ),
    new THREE.Vector3().fromBufferAttribute(
      box.geometry.attributes.position,
      5
    ),
    new THREE.Vector3().fromBufferAttribute(
      box.geometry.attributes.position,
      6
    ),
    new THREE.Vector3().fromBufferAttribute(
      box.geometry.attributes.position,
      7
    ),
  ];

  vertices.forEach((vertex) => {
    vertex.project(camera);
    vertices2.push(new THREE.Vector2(vertex.x, vertex.y));
  });

  let minVec = vertices2[0].clone();
  let maxVec = vertices2[0].clone();

  for (let i = 0; i < vertices.length; i++) {
    minVec.min(vertices[i]);
    maxVec.max(vertices[i]);
  }

  minVec.x = ((minVec.x + 1) / 2) * renderer.getContext().canvas.width;
  minVec.y = ((-minVec.y + 1) / 2) * renderer.getContext().canvas.height;
  maxVec.x = ((maxVec.x + 1) / 2) * renderer.getContext().canvas.width;
  maxVec.y = ((-maxVec.y + 1) / 2) * renderer.getContext().canvas.height;

  // var twodcoord_max = toScreenPosition(bbox.max,camera)
  // var twodcoord_min = toScreenPosition(bbox.min,camera)

  // var boundingBox = {
  // 	"x": [twodcoord_min.x + (scenecenterX - renderer.domElement.width/2),
  //         	twodcoord_max.x + (scenecenterX - renderer.domElement.width/2)].sort(function(a, b){return a-b}),
  // 	"y": [twodcoord_max.y + CANVAS.offsettop + (scenecenterY - renderer.domElement.height/2),
  // 		twodcoord_min.y + CANVAS.offsettop + (scenecenterY - renderer.domElement.height/2)].sort(function(a, b){return a-b})
  // }

  let left = Math.round(
    scenecenterX / ENV.CanvasRatio -
      renderer.domElement.width / TASK.THREEJSRenderRatio / ENV.CanvasRatio / 2
  );

  let top = Math.round(
    scenecenterY / ENV.CanvasRatio -
      renderer.domElement.height / TASK.THREEJSRenderRatio / ENV.CanvasRatio / 2
  );

  let boundingBox = {
    x: [
      (minVec.x / TASK.THREEJSRenderRatio / ENV.CanvasRatio + left) *
        ENV.CanvasRatio,
      (maxVec.x / TASK.THREEJSRenderRatio / ENV.CanvasRatio + left) *
        ENV.CanvasRatio,
    ].sort((a, b) => {
      return a - b;
    }),
    y: [
      (maxVec.y / TASK.THREEJSRenderRatio / ENV.CanvasRatio + top) *
        ENV.CanvasRatio +
        CANVAS.offsettop,
      (minVec.y / TASK.THREEJSRenderRatio / ENV.CanvasRatio + top) *
        ENV.CanvasRatio +
        CANVAS.offsettop,
    ].sort((a, b) => {
      return a - b;
    }),
  };

  return [objPosition, objSize, boundingBox];
} //FUNCTION updateObjectSingleFrame

function updateImageSingleFrame(
  taskscreen,
  backgroundCube,
  cubeTexture,
  imsize,
  camera,
  scenecenterX,
  scenecenterY
) {
  // cubeTexture : ['zfront','zback','ytop','ybottom','xright','xleft']
  let textureOrder = [4, 5, 2, 3, 0, 1];

  if (cubeTexture != undefined) {
    textureOrder.map((t, idx) => {
      if (cubeTexture[t] != "" && cubeTexture[t] !== undefined) {
        cubeTexture[t].wrapT = THREE.ClampToEdgeWrapping;
        backgroundCube.material[idx].map = cubeTexture[t];
        backgroundCube.material[idx].side = THREE.BackSide;
      } else {
        backgroundCube.material[idx] = transparentFace;
      }
    });

    //backgroundCube size
    backgroundCube.scale.set(1, 1, 1);
    backgroundCube.scale.set(imsize, imsize, imsize);
    backgroundCube.position.set(0, 0, 0);
    backgroundCube.updateMatrixWorld();

    var bbox = new THREE.Box3();
    bbox.setFromObject(backgroundCube);

    // console.log('backgroundCube:', backgroundCube);
    // console.log('bbox:', bbox);

    let vertices2 = [];
    let vertices = [
      new THREE.Vector3().fromBufferAttribute(
        backgroundCube.geometry.attributes.position,
        0
      ),
      new THREE.Vector3().fromBufferAttribute(
        backgroundCube.geometry.attributes.position,
        1
      ),
      new THREE.Vector3().fromBufferAttribute(
        backgroundCube.geometry.attributes.position,
        2
      ),
      new THREE.Vector3().fromBufferAttribute(
        backgroundCube.geometry.attributes.position,
        3
      ),
      new THREE.Vector3().fromBufferAttribute(
        backgroundCube.geometry.attributes.position,
        4
      ),
      new THREE.Vector3().fromBufferAttribute(
        backgroundCube.geometry.attributes.position,
        5
      ),
      new THREE.Vector3().fromBufferAttribute(
        backgroundCube.geometry.attributes.position,
        6
      ),
      new THREE.Vector3().fromBufferAttribute(
        backgroundCube.geometry.attributes.position,
        7
      ),
    ];

    vertices.forEach((vertex) => {
      vertex.project(camera);
      vertices2.push(new THREE.Vector2(vertex.x, vertex.y));
    });

    let minVec = vertices2[0].clone();
    let maxVec = vertices2[0].clone();

    for (let i = 0; i < vertices.length; i++) {
      minVec.min(vertices[i]);
      maxVec.max(vertices[i]);
    }

    minVec.x = ((minVec.x + 1) / 2) * renderer.getContext().canvas.width;
    minVec.y = ((-minVec.y + 1) / 2) * renderer.getContext().canvas.height;
    maxVec.x = ((maxVec.x + 1) / 2) * renderer.getContext().canvas.width;
    maxVec.y = ((-maxVec.y + 1) / 2) * renderer.getContext().canvas.height;

    let left = Math.round(
      scenecenterX / ENV.CanvasRatio -
        renderer.domElement.width /
          TASK.THREEJSRenderRatio /
          ENV.CanvasRatio /
          2
    );

    let top = Math.round(
      scenecenterY / ENV.CanvasRatio -
        renderer.domElement.height /
          TASK.THREEJSRenderRatio /
          ENV.CanvasRatio /
          2
    );

    var boundingBoxCube = {
      x: [
        (minVec.x / TASK.THREEJSRenderRatio / ENV.CanvasRatio + left) *
          ENV.CanvasRatio,
        (maxVec.x / TASK.THREEJSRenderRatio / ENV.CanvasRatio + left) *
          ENV.CanvasRatio,
      ].sort((a, b) => {
        return a - b;
      }),
      y: [
        (maxVec.y / TASK.THREEJSRenderRatio / ENV.CanvasRatio + top) *
          ENV.CanvasRatio +
          CANVAS.offsettop,
        (minVec.y / TASK.THREEJSRenderRatio / ENV.CanvasRatio + top) *
          ENV.CanvasRatio +
          CANVAS.offsettop,
      ].sort((a, b) => {
        return a - b;
      }),
    };

    // var twodcoord_max = toScreenPosition(bbox.max,camera)
    // var twodcoord_min = toScreenPosition(bbox.min,camera)

    // var boundingBoxCube = {
    //     "x": [twodcoord_min.x + (scenecenterX - renderer.domElement.width/2),
    //             twodcoord_max.x + (scenecenterX - renderer.domElement.width/2)].sort(function(a, b){return a-b}),
    //     "y": [twodcoord_max.y + CANVAS.offsettop + (scenecenterY - renderer.domElement.height/2),
    //             twodcoord_min.y + CANVAS.offsettop + (scenecenterY - renderer.domElement.height/2)].sort(function(a, b){return a-b})
    // }
  }
  return boundingBoxCube;
}

function toScreenPosition(vector, camera) {
  var widthHalf = 0.5 * renderer.getContext().canvas.width;
  var heightHalf = 0.5 * renderer.getContext().canvas.height;

  vector.project(camera);

  vector.x = vector.x * widthHalf + widthHalf;
  vector.y = -(vector.y * heightHalf) + heightHalf;

  return {
    x: vector.x,
    y: vector.y,
  };
} //FUNCTION toScreenPosition(vector,camera)

function chooseArrayElement(x, idx, defaultIdx) {
  if (x !== undefined && x[idx] === undefined && x.length > 0) {
    return x[defaultIdx];
  } else if (x !== undefined && x.length === undefined) {
    return x;
  } else if (x === undefined) {
    return undefined;
  } else {
    return x[idx];
  }
} // FUNCTION chooseArrayElement

function rescaleArrayInchestoTHREEJS(sizeInchesArr, THREEJStoInches) {
  var sizeTHREEJS = [];
  for (var i = 0; i <= sizeInchesArr.length - 1; i++) {
    if (!Array.isArray(sizeInchesArr[i])) {
      sizeTHREEJS.push(sizeInchesArr[i] / THREEJStoInches);
    } else {
      sizeTHREEJS.push(
        rescaleArrayInchestoTHREEJS(sizeInchesArr[i], THREEJStoInches)
      );
    } //IF
  } //FOR i
  return sizeTHREEJS;
} //FUNCTION rescaleArrayInchestoTHREEJS

function toTHREEJSOffset(x, y, taskscreen) {
  var widthHalf = 0.5 * renderer.getContext().canvas.width;
  var heightHalf = 0.5 * renderer.getContext().canvas.height;

  var xdisp = x - widthHalf;
  var ydisp = heightHalf - y;

  return [
    xdisp / IMAGEMETA["THREEJStoPixels"],
    ydisp / IMAGEMETA["THREEJStoPixels"],
  ];
} //FUNCTION toTHREEJSOffset

function createMovieSeq_frames(taskscreen,offdurationMSpre,ondurationMS,offdurationMSpost,framerate){
  var nframes_movie = Math.round(ondurationMS*framerate/1000);
  var movie_sequence = Array(nframes_movie).fill(taskscreen);

  //--- Prepend SamplePRE
  var nframes_pre = Math.round(offdurationMSpre*framerate/1000);
  for (var f=0; f<=nframes_pre-1; f++){
    movie_sequence = ["Blank", movie_sequence].flat();
  }//FOR f

  //---- Postpend SampleOFF
  if (offdurationMSpost > 0) {
    var nframes_post = Math.round(offdurationMSpost*framerate/1000);
    for (var f=0; f<=nframes_post-1; f++){
      movie_sequence = [movie_sequence,"Blank"].flat();
    }//FOR f
  } //IF need to postpend a blank

  //---- Add frame time, framenum
  var movie_tsequence = []
  var movie_framenum = []
  var cnt = 0;
  for (var f=0; f<=movie_sequence.length-1; f++){
    movie_tsequence[f] = f * 1000/framerate;
    if ( movie_sequence[f] == "Blank"){
      movie_framenum[f] = -1;
    }
    else{
      movie_framenum[f] = cnt;
      cnt++
    }//ELSE
  }//FOR f

  return [movie_sequence, movie_tsequence, movie_framenum];
} //FUNCTION createMovieSeq_frames

function interpParam_frames(vec, type, durationMS, framerate) {
  var fseq = range(0,Math.round(durationMS*framerate/1000) - 1, 1);
  var tseq = []
  for (var f=0; f<=fseq.length-1; f++){
    tseq[f] = f * (1000 / framerate);
  }
  var vec_flattened = Array(fseq.length).fill("");

  if (vec.every((val) => val !== "")) {
    if (type == "binary") {
      vec[vec.length] = 0;
    } //pad to get correct # of segments for step variables
    var nseg = vec.length - 1;

    if (nseg <= 0) {
      vec_flattened = vec;
    } 
    else if (vec.length == fseq.length){
      vec_flattened = vec; //no interpolation
    } //ELSEIF user specified each frame in scene file
    else {
      for (var i = 0; i <= nseg; i++) {
        var p1 = [(i * durationMS) / nseg, vec[i]];
        var p2 = [((i + 1) * durationMS) / nseg, vec[i + 1]]; //line
        if (type == "binary") {
          p2 = [((i + 1) * durationMS) / nseg, vec[i]]; //constant
        } //ELSEIF binary

        //piecewise linear interpolation between two points in a segment
        var [slope, intercept] = findLinEqwithTwopts(p1, p2);
        tseq.forEach((t, j) => {
          if (t >= p1[0] && t <= p2[0]) {
            vec_flattened[j] = slope * t + intercept;
          } //IF time falls within segment
        }); //tseq.forEACH
      } //FOR i segments
    } //ELSE

    if (isNaN(vec_flattened[vec_flattened.length - 1])) {
      vec_flattened[vec_flattened.length - 1] = vec[vec.length - 1];
    }

    if (type == "binary") {
      vec_flattened[vec_flattened.length - 1] = vec[vec.length - 2];
    }
  }

  return vec_flattened;
} //FUNCTION interpParam_frames

function range(start, end, step = 1) {
  // Test that the first 3 arguments are finite numbers.
  const allNumbers = [start, end, step].every(Number.isFinite);

  // Throw an error if any of the first 3 arguments is not a finite number.
  if (!allNumbers) {
    throw new TypeError("range() expects only finite numbers as arguments.");
  }
  // The length is incremented by 1 after Math.floor().
  // This ensures that the end number is listed if it falls within the range.

  if (start == end) {
    return [start];
  } else {
    //start != end
    if (step != 0) {
      const length = Math.floor(Math.abs((end - start) / step)) + 1;
      return Array.from(Array(length), (x, index) => start + index * step);
    } else {
      return [start, end];
    }
  }
} //FUNCTION range

function findLinEqwithTwopts(P, Q) {
  // find a linear equation that goes through two points P, Q
  // returns slope and intercept

  var slope = (Q[1] - P[1]) / (Q[0] - P[0]);
  var intercept = (Q[0] * P[1] - Q[1] * P[0]) / (Q[0] - P[0]);

  return [slope, intercept];
} //FUNCTION findLinEqwithTwopts


//____________________LEGACY________________________
//____________________LEGACY________________________
//____________________LEGACY________________________
function interpParam_time(vec, type, durationMS, framerate) {
  var dur = durationMS / 1000; //convert to seconds
  var tseq = range(0, dur, Math.round(1000 / framerate) / 1000);
  var vec_flattened = Array(tseq.length).fill("");

  if (vec.every((val) => val !== "")) {
    if (type == "binary") {
      vec[vec.length] = 0;
    } //pad to get correct # of segments for step variables
    var nseg = vec.length - 1;

    if (nseg <= 0) {
      vec_flattened = vec;
    } else {
      for (var i = 0; i <= nseg; i++) {
        var p1 = [(i * dur) / nseg, vec[i]];
        var p2 = [((i + 1) * dur) / nseg, vec[i + 1]]; //line
        if (type == "binary") {
          p2 = [((i + 1) * dur) / nseg, vec[i]]; //constant
        } //ELSEIF binary
        var [slope, intercept] = findLinEqwithTwopts(p1, p2);

        tseq.forEach((t, j) => {
          if (t >= p1[0] && t <= p2[0]) {
            vec_flattened[j] = slope * t + intercept;
          } //IF time falls within segment
        }); //tseq.forEACH
      } //FOR i vals
    }
    //IF vec.length<2, return

    if (isNaN(vec_flattened[vec_flattened.length - 1])) {
      vec_flattened[vec_flattened.length - 1] = vec[vec.length - 1];
    }

    if (type == "binary") {
      vec_flattened[vec_flattened.length - 1] = vec[vec.length - 2];
    }
  }

  return vec_flattened;
} //FUNCTION interpParam_time

function createMovieSeq_time(taskscreen,offdurationMSpre,ondurationMS,offdurationMSpost,framerate){
  var movie_tseq = range(0, ondurationMS, Math.round(1000 / framerate)); //Off times for sample frame

  if (offdurationMSpost > 0) {
    //Postpend blank frame which starts at last Sample Frame OFF time
    movie_tseq[movie_tseq.length] =
      movie_tseq[movie_tseq.length - 1] + 1000 / framerate;
    movie_sequence = [
      Array(movie_tseq.length - 1).fill(taskscreen),
      "Blank",
    ].flat();

    //Add preceding SampleOFF (which is sampleframe0 ON) & Shift Sample frame OFF times by preceding SampleOFF [ON, OFF .... OFF ]
    movie_tsequence = movie_tseq.map(function (a) {
      return a + offdurationMSpre;
    });

    //Assign frame numbers, -1 for blank
    movie_framenum = range(0, movie_sequence.length - 2, 1);
    movie_framenum[movie_framenum.length] = -1;
  } //IF need to postpend a blank
  else if (offdurationMSpost <= 0) {
    movie_sequence = [Array(movie_tseq.length).fill(taskscreen)].flat();

    //Add preceding SampleOFF (which is sampleframe0 ON) & Shift Sample frame OFF times by preceding SampleOFF [ON, OFF .... OFF ]
    movie_tsequence = movie_tseq.map(function (a) { return a + offdurationMSpre; });
    movie_framenum = range(0, movie_sequence.length - 1, 1);
  } //ELSEIF no blank needed
  return [movie_sequence, movie_tsequence, movie_framenum];
} //FUNCTION createMovieSeq_time