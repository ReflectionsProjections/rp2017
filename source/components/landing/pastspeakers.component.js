import React from 'react';

import styles from './pastspeakers.component.scss'

const PastSpeakers   = () => {
  return (
    <center className="thin past_speakers">
      <p>
        <b>Past speakers</b>
        <br />
        <a href="https://en.wikipedia.org/wiki/Steve_Wozniak">Steve <wbr /> Wozniak</a> • <a href="https://en.wikipedia.org/wiki/Jay_Freeman">Jay <wbr /> "Saurik" <wbr /> Freeman</a> • <a href="https://en.wikipedia.org/wiki/Max_Levchin">Max <wbr /> Levchin</a> • <a href="https://twitter.com/laura?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Laura <wbr /> Gomez</a> • <a href="https://en.wikipedia.org/wiki/Peter_Norvig">Peter <wbr /> Norvig</a> • <a href="https://acm.illinois.edu/conference" >More</a>
      </p>
    </center>
  );
};

export default PastSpeakers;