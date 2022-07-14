
//boxes
AFRAME.registerComponent("boxes",{
    schema:{
      height:{type:"number",default:3},
      width:{type:"number",default:3},
      depth:{type:"number",default:3}
    },
    init:function(){
      for(var i=0;i<6;i++){
        var box = document.createElement("a-entity")
        var id = `box${i}`
        box.setAttribute("id",id)
        posX=Math.random()*30
        posY=Math.random()*30
        posZ=Math.random()*30-80
        position={x:posX,y:posY,z:posZ}
        console.log(position)
        box.setAttribute("position",position)
        box.setAttribute("geometry",{
          primitive:"sphere",
        })
        box.setAttribute("static-body",{})
        box.setAttribute("game-play", {
          elementId: `#${id}`,
        });
        console.log(box)
        var sceneEl=document.querySelector("#scene")
        sceneEl.appendChild(box)
        
      }
    }
  })