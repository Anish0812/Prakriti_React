import React from 'react';

   const Home = ({ isAuthenticated }) => {
     return (
       <div>
         {isAuthenticated ? <p>Welcome to the home page!</p> : <p>Please log in.</p>}
       </div>
     );
   };

   export default Home;