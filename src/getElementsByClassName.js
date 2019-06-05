/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (className) => {
  var results = [];
   function getClass(nodeList){
     var childList = Array.from(nodeList.children); //.children
    // var childList = nodeList.children;
     childList.forEach( function(node) {
      // for (let node of childList){
    //     (node)=>{
    //       if (node.classList && node.classList.contains(className)){
    //         results.push(node)
    //     }
    //   }
     //1st level body check
      // **Here, only include the element if Array#every is true,
      // **where you give Array#every a function that does your
      // classList.contains on the name for that iteration
      if(node.classList  &&  node.classList.contains(className)){
        results.push(node);
      }

      //has children, recurse
      if(node.children) {
        getClass(node);
      }
      else {
        getClass(node);
      }
      });
   }
   getClass(document);//.body
   return results;
  
  // YOUR CODE HERE
  // let htmlStrings = []

  // if(/*targetClassname === className*/){
  //   htmlStrings.push(/*element*/)
  // } else if (/*node type = text*/){
  //   return
  // }

  // getElementsByClassName(targetClassname)
  // return htmlStrings
};
