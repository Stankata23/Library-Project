import React from 'react';
import GanreTemplate from './GanreTemplate';
import Romance_Background from '../Images/Romance_Background.jpg'

const Romance = () => {
  return (
    <GanreTemplate title="Романтика" background={Romance_Background}>
      <p>Истории за любов и страст, които стоплят сърцето.</p>
    </GanreTemplate>
  );
};

export default Romance;
