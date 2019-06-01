/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/
const getElementsByClassName = (className) => {
  const results = [];
  var g = new RegExp(className, g);

  function traverse(node = document.body) {
    if (g.test(node.className)) {
      results.push(node);
    }

    for (let i = 0; i < node.childNodes.length; i++) {
      traverse(node.childNodes[i]);
    }
  }

  traverse();
  return results;
}