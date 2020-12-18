/* This component is used to render the list of all users using the API URL*/

import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
         
        };
      }
    
      componentDidMount() {
        
        var apiURL = "https://jsonplaceholder.typicode.com/users";
        fetch(`${apiURL}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
              console.log(JSON.stringify(result))
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }



/* This function will return the Initial Letters as Capital letter
 for each Words in a string of words*/

getInitials = (fullName) => {
    
    var initials = "";
    var splitName = fullName.split(' ');
    for (var i = 0; i < splitName.length; i++) {
        if(splitName[i] !=="Mrs." && splitName[i] !=="Mr." && splitName[i] !=="Ms."){
        initials = initials+splitName[i].charAt(0).toUpperCase();
    }
     }
     return initials;
  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="parentDiv">
        
<header>
  <h2>Users</h2>
</header>

<section>
  <nav>
  
 </nav>
  
  <article>
  <div className="flex-container">
    {items.map(item => {

    var initials = this.getInitials(item.name);
   
    return(
       
  <div key={item.id}> 
  <Link to={{
  pathname: '/userInfo',
  state: {
    prevRoute: "/users",
    userDetails: item
  }
}}>
  <p id="leftElement" data-letters={initials}></p>
  <div id="rightElement">
  <div>{item.name} </div> <div> {item.email} </div>
  </div>
  </Link>
  </div>
  
) })}

</div>

    </article>
</section>

<footer>
  <p></p>
</footer>



</div>
     
      );
    }
  }
}

