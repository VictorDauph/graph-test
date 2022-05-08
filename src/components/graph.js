// graph to build with reaflow
// https://openbase.com/categories/js/best-react-graph-libraries
// https://openbase.com/js/reaflow/tutorials
import {Canvas,Node} from "reaflow"

const nodes = [
    {
      id: '1',
      text: 'Trance initiation',
      className:"active"
    },
    {
      id: '2',
      text: 'Reward',
      className:"active"
    },
    {
      id: '3',
      text: 'Deeper training',
      className:"active"
    },
    {
      id: '4',
      text: 'Obedient Boy',
      disabled:true, //disabled remove the link
      className:"disabled"

    },
    {
      id: '5',
      text: 'Humility',
      disabled:true, //disabled remove the link
      className:"disabled"
    },
  ];
  
  const edges = [
    {
      id: '1-3',
      from: '1',
      to: '3',
      disabled:true
    },
    {
      id: '1-2',
      from: '1',
      to: '2',
      disabled:true
    },
    {
      id: '3-4',
      from: '3',
      to: '4',
      disabled:true
    },
    {
      id: '3-5',
      from: '3',
      to: '5',
      disabled:true
    },
  ];

  let playing=false
  var audio = new Audio();
  audio.src="https://res.cloudinary.com/drd4nkpfz/video/upload/v1651971847/sampleMusic/sampleMusic_pbnylz.mp3"

  function handleClick(port){
    console.log("node ",port.id," clicked")

    if (playing == false){
      audio.play();
      playing=true
    }
    else if(playing == true){
      audio.pause();
      playing=false
    }
  
  }

  export default function Graph(){
    //the canvas must be contained in a div with a fixed position
    return(
      <div id="container" > 
      <Canvas
        direction="UP"
        pannable={false}
        readonly={true}
        nodes={nodes}
        node={<Node onClick={(event,port)=>handleClick(port)}  />}
        edges={edges}
      />
    </div>
    )

  };