AFrame.registerComponent("a-ocean",{
defaultComponents:{
    ocean:{},
    rotation:{x:-90,y:0,z:0}
},
mappings:{
    width:'ocean.width',
    depth:'ocean.depth',
    density:'ocean.density',
amplitude:'ocean.amplitude',
'amplitude-variance':'ocean.amplitudeVariance',
speed:"ocean.speed",'speed-variance':'ocean.speedVariance',
color:'ocean-color',
opacity:'ocean.opacity'
}

})


AFRAME.registerComponent('ocean',{

schema:{
    width:{default:10,min:0},
    depth:{default:10,min:0},
    density:{default:10},

    // wave amplitude and variance
    amplitude:{default:0.1},
    amplitudeVariance:{default:0.3},

     // wave speed and variance
     speed:{default:0.1},
     speedVariance:{default:0.3},

    //  material
    color:{default:"#7ad2f7",type:'color'},
    opacity:{default:0.8}



}

})