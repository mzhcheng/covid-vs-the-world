import React from 'react';
import virus_gif from '../images/virus.gif';

const Poster = props => (
  <div className="poster-body">
    <div className="title">
      <h1 className="corona">Coronavirus</h1>
      <h1 className="world">Vs. The World</h1>
    </div>
    <div className="content-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. 
      Lacus vestibulum sed arcu non odio euismod. Amet nisl suscipit adipiscing bibendum est. Suspendisse potenti nullam ac tortor 
      vitae purus faucibus. Urna id volutpat lacus laoreet non curabitur. Arcu bibendum at varius vel. Congue quisque egestas diam 
      in arcu. Purus non enim praesent elementum facilisis leo vel fringilla est.
    </div>
    <img className="virus-image" alt="virus" src={virus_gif} />
    { props.children }
  </div>
)

export default Poster;
