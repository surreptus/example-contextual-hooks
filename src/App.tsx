import * as React from "react";
import "./styles.css";

import { NavManager } from './support/use-nav'
import { Nav, Actions } from './components'

export default function App() {
  return (
    <div className='app'>
      <NavManager>
        <Nav />

        <div className='body'>
          <h1>Example Code</h1>

          <Actions />
        </div>
      </NavManager>
    </div>
  );
}
