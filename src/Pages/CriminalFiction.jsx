import React from 'react';
import GanreTemplate from './GanreTemplate';
import Criminal_Background from '../Images/Criminal_Background.jpg'

const CriminalFiction = () => {
  return (
    <GanreTemplate title="Криминални" background={Criminal_Background}>
      <p>Открий загадки, престъпления и детективски истории.</p>
    </GanreTemplate>
  );
};

export default CriminalFiction;
