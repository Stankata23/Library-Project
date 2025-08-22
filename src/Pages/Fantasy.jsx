import React from 'react';
import GanreTemplate from './GanreTemplate';
import Fantasy_Background from '../Images/Fantasy_Background.jpg'

const Fantasy = () => {
  return (
    <GanreTemplate title="Фентъзи" background={Fantasy_Background}>
      <p>Тук ще намериш магии, дракони и приключения!</p>
    </GanreTemplate>
  );
};

export default Fantasy;
