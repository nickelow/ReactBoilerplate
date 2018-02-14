import React from 'react';
import reactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './dist/styles.css';

class App extends React.Component {
  constructor(props){
  	super(props)
  }
  render(){
  	return(
      <div>Hello Worldv</div>
  	)
  }
}

reactDOM.render(<App/>, document.getElementById('app'));