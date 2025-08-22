import React from 'react';
import GanreTemplate from "./GanreTemplate"
import Horror_Background from '../Images/Horror_Background.jpg'

export default function Horror() {

    return (
        <GanreTemplate title="Хорър" background={Horror_Background}>
            <p>Тук ще намериш истории, които ще накарат кръвта ти да застине.</p>
        </GanreTemplate>
    );
}