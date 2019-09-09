import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Block from './components/block';
import SmallBlock from './components/smallBlock';

function App() {
  return (
    <div>
      <header>

      </header>
      <Block title="Примеры работ">

      </Block>
      <Block title="Умею и практикую">

      </Block>
      <SmallBlock img="123" title="Другие навыки:">
        Список навыков
      </SmallBlock>
      <SmallBlock img="321" title="Напиши мне">
        Форма обратной связи
      </SmallBlock>
    </div>
  );
}

export default App;
