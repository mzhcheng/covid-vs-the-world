import React from 'react';

import Overlay from './Overlay';
import Popup from './Popup';
import Lorem from './poster-fragments/Lorem';
import Fade from '../utils/Fade';

const Poster = ({ popupContent }) => (
  <div className="poster-body">
    <Lorem />
    <Fade show={!!popupContent}>
      <Overlay />
      <Popup>
      </Popup>
    </Fade>
  </div>
)

export default Poster;
