import React , {Component}from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'
import './App.css'


//function component

// const App= ()=> {
//   return (
//     <div className = 'tc'>
//       <h1> My RobotFriends</h1>
//       <SearchBox />
//       <CardList  robots = {robots}/>   //cardlist receive an attribute(props)
//     </div>
//   );
// }

// export default App;


//classs component
class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: 'robots',
      searchField: ' '
    }
  }
  
  //create a fnc to get triggered whenever somthg is entered in SearchBox
  onSearchChange = (event) =>{

    // console.log(event.target.value)

    //set searchField to get value entered
    this.setState({searchField: event.target.value})

    
    // console.log(filterRobots)
  }

  render(){

    //filter robots
    const filterRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      < div className = 'tc'>
        <h1 className ='f1'>RobotFriends</h1>

        {/* pass attribute to searchbox */}
        <SearchBox   SearchChange = {this.onSearchChange}/>

        {/* <CardList  robots = {robots}/>   //cardlist receive an attribute(props) */}

        {/* robot passed as prop */}
        {/* <CardList robots = {robots}/> */}
        
        {/* now pass filterRobot instead of robots */}
        <CardList robots = {filterRobots}/>

      </div>
    );
  
  }
   
}

export default App;

