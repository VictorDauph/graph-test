// graph to build with reaflow
// https://openbase.com/categories/js/best-react-graph-libraries
// https://openbase.com/js/reaflow/tutorials
import {Canvas} from "reaflow"

const nodes = [
    {
      id: '1',
      text: '1',
    },
    {
      id: '2',
      text: '2',
      disabled:true //disabled remove the link
    },
    {
      id: '3',
      text: '3'
    },
    {
      id: '4',
      text: '4'
    },
    {
      id: '5',
      text: '5'
    },
  ];
  
  const edges = [
    {
      id: '1-3',
      from: '1',
      to: '3'
    },
    {
      id: '1-2',
      from: '1',
      to: '2',
    },
    {
      id: '2-4',
      from: '2',
      to: '4'
    },
    {
      id: '3-4',
      from: '3',
      to: '4'
    },
    {
      id: '3-5',
      from: '3',
      to: '5'
    },
  ];



  export default function Graph(){
    return(
      <div style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
      <Canvas
        direction="UP"
        pannable={false}
        readonly={true}
        nodes={nodes}
        edges={edges}
      />
    </div>
    )

  };