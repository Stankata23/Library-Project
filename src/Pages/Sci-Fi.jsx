import React from 'react';
import GanreTemplate from './GanreTemplate';
import Sci_Fi_Background from '../Images/Sci_Fi_Background.jpg'

const SciFi = () => {
  return (
    <GanreTemplate title="Научна фантастика" background={Sci_Fi_Background}>
      <p>Бъдеще, технологии и далечни галактики те очакват тук.</p>
    </GanreTemplate>
  );
};

export default SciFi;
