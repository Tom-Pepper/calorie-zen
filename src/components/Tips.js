import React, { useState, useEffect } from 'react';
import './Tips.css';

function Tips() {
  useEffect(() => {
    fetch('https://api.nomoreparties.co/todays-tips-rus').then((res) => {
      return res.json();
    }).then((res) => {
      setList(Object.values(res));  
    })
  }, []);
  const [list, setList] = useState();
  return (
    <div className="tips">
      <ul className="tips__list">
      {list &&  
        /* используйте тут метод map для создания списка */
      }
      </ul>
    </div>
  );
}

export default Tips;