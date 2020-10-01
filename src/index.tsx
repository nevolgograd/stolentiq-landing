import * as React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { Header } from 'components/Header/Header';
import { Portfolio } from 'components/Portfolio/Portfolio';
import { Fun } from 'components/Fun/Fun';
import {Contacts} from "components/Contacts/Contacts";
import { Main } from 'style/main';


const Root: React.FC = () => (
  <>
    <Normalize />
    <Main />

    <div id="wrapper">
      <Header alt='STOLENTIQ STUDIO'/>

      <Portfolio />

      <Fun />

      <Contacts />

    </div>
  </>
);

ReactDOM.render(<Root />, document.getElementById('root'));
