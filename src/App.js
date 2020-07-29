import React from 'react';
import './App.less';
import {RouterPage} from  './router/index.js'
import axios from "axios";
axios.defaults.headers.common['Authorization'] = 'Bearer y3BpjcSJlpfrhNsBtPRwXopCnx67lKIG5CVx0rweLOBO00GR4cq6aROrANfs';

class App extends React.Component {
  render() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Noto+Sans+TC:wght@300&display=swap" rel="stylesheet"/>

            <RouterPage />
        </>

    )
  }
}



export default App;
