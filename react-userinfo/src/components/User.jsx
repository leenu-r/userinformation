/* This component is used to render the list of all users using the API URL*/

import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
var apiURL = "https://jsonplaceholder.typicode.com/users";


export default function User () {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);

  async function fetchUserInfo()
{
  await fetch(`${apiURL}`)
  .then(res => res.json())
  .then(
    (result) => {
      setIsLoaded(true);
      setItems(result);
      console.log(JSON.stringify(result))
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
  )

}
  useEffect(() => fetchUserInfo());

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else if(items === null) {
      return <div>Loading...</div>;
    }
    else{
      return (
        <div className="parentDiv">
        
<header>
  <h2>Users</h2>
</header>
<section>
  <nav></nav>
  <article>
  <div className="flex-container">
    {
    (items !==null && items.length > 0) ? 
    
      items.map(item => {
  var initials = getInitialLetters(item.name); 
    return(
       <div key={item.id}> 
  <Link to={{ pathname: '/userInfo',
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
  
) })
 : <div> No users available.</div>
    
  }

</div></article>
</section>

<footer>
  <p></p>
</footer>

</div>
     
      );
    }
  
}
/* This function will return the Initial Letters as Capital letter
 for each Words in a string of words*/

 function getInitialLetters(fullName) {
  var initials = "";
  var splitName = fullName.split(' ');
  for (var i = 0; i < splitName.length; i++) {
      if(splitName[i] !=="Mrs." && splitName[i] !=="Mr." && splitName[i] !=="Ms."){
      initials = initials+splitName[i].charAt(0).toUpperCase();
  }
   }
   return initials;
}

