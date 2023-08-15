function makeFunc() {
    let greeting = 'Welcome';
    function displayName(userName) {
      console.log(`${greeting} ${userName} `);
    }
    return displayName;
  }
  
  makeFunc()("ahmed"); //function currying
  