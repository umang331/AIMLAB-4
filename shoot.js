AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet();
  },
  shootBullet: function () {
    window.addEventListener("click", (e) => {

        var bullet = document.createElement("a-entity");

        bullet.setAttribute("id","bullet")

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });

        bullet.setAttribute("material", "color", "black");

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //set the velocity and it's direction
        bullet.setAttribute("velocity", direction.multiplyScalar(-70));
        bullet.setAttribute("dynamic-body",{
          shape:"sphere",
          mass:"0"
        })
        bullet.addEventListener("collide",this.removeBuleet)
        //bullet.addEventListener("collide",this.reAppear)

        var scene = document.querySelector("#scene");

        scene.appendChild(bullet);
      
    });
  },
  
  removeBuleet:function(e){
    console.log("lol")
    var element = e.detail.target.el//bullet
    var elementHit = e.detail.body.el//target
    console.log(elementHit.id)
    if(elementHit.id.includes("box")){
      elementHit.setAttribute("material",{
        opacity:1,
        transparent:false
      })
      var impulse = new CANNON.Vec3(-2,2,1)
      var worldPoint = new CANNON.Vec3().copy(elementHit.getAttribute("position"))
      elementHit.body.applyImpulse(impulse,worldPoint)
      element.removeEventListener("collide",this.shoot)
      var target = document.querySelector("#targets")
      var count = target.getAttribute("text").value
      var currentTargets = parseInt(count)
      currentTargets += (1)
      target.setAttribute("text",{value:currentTargets}) 

      var score = document.querySelector("#Score")
      var count_score = score.getAttribute("text").value
      var currentTargets = parseInt(count_score)
      currentTargets += (10)
      score.setAttribute("text",{value:currentTargets}) 
      

      var scene = document.querySelector("#scene");
      scene.removeChild(element)
      scene.removeChild(elementHit)
          
    }
  },
  reAppear:function(){
      console.log("nice")
      var box = document.createElement("a-entity")
      box.setAttribute("id","box")
      posX=Math.random()*20
      posY=Math.random()*20
      posZ=Math.random()*20-80
      position={x:posX,y:posY,z:posZ}
      box.setAttribute("position",position)
      box.setAttribute("geometry",{
        primitive:"sphere",
        raius:5
      })
      box.setAttribute("material",{
        src:"./images/boxtexture1.jpg",
      })
      box.setAttribute("static-body",{})
      var sceneEl=document.querySelector("#scene")
      sceneEl.appendChild(box)
    }

    
});


