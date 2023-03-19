import logo from './logo.svg';
import '.././App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Header } from 'components';


class App extends React.Component {
  render(){

      return (
              <Header/>
      );
  }
}

export default App;
