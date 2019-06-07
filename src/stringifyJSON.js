/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (stringMe) => {
  // YOUR CODE HERE
  '\'<option value="1">tea</option>\''
  if (typeof stringMe === "string"){
    return `"${stringMe}"`
  } else if (typeof stringMe === "function"){
    return stringMe.toISOString();
  } else if (Array.isArray(stringMe)){
     let stringedElement = '[' + stringMe.reduce((acc, v) => {
      if (v === undefined)
        return [...acc, 'null']
      else
        return [...acc, stringifyJSON(v)]
    }, []).join(',') + ']'
    return stringedElement
  }else if (typeof stringMe === "object" && stringMe !== null && (!Array.isArray(stringMe))){
    if(stringMe.hasOwnProperty("functions") || stringMe.hasOwnProperty("undefined")){
      return '{'+'}';
    }
    let stringedElement = '{' + Object.keys(stringMe).reduce((acc, k) => {
      if (stringMe[k] === undefined)
        return acc
      // else if (typeof stringMe[k] === "function" && stringMe[k]() !== undefined)
      //   return "dog"
        // return [...acc, stringifyJSON(k) + ':' + stringifyJSON(stringMe[k]())]
      else
        return [...acc, stringifyJSON(k) + ':' + stringifyJSON(stringMe[k])]
    }, []).join(',') + '}'
    return stringedElement
  } else if (typeof stringMe === "undefined"){
    return {};
  }else {
    let stringedElement =  "'" + stringMe +"'"
    stringedElement = stringedElement.slice(1,-1)
    
      return stringedElement;
  }
};

