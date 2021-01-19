import React from 'react';
import './Tips.css';

function Tips() {
  return (
    <div className="tips">
      <p>В скором времени пользователи смогут увидеть здесь подсказки!</p>
      <ul className="tips__list">
        <li className="tips__item">подсказка 1</li>
        <li className="tips__item">подсказка 2</li>
        <li className="tips__item">подсказка 3</li>
      </ul>
    </div>
  );
}

export default Tips;