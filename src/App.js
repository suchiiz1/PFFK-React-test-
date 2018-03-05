import React, { Component } from 'react';
import Header from './Header';

// สร้างcomponent
class App extends Component {
    render(){
      //var mystyle={
        //fontSize:30,
        //color:'#FF0000'
      //}
      return(
        //<div>
          //<h1 style={mystyle}> React toturial KleA </h1>
          //<h2>{50*50}</h2>
          //</div>
          <div>
              <Header/>
            </div>

      );
    }
  }

export default App;
