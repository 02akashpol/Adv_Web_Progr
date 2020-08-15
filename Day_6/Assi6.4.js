let commentFun = function (commentBtn) {
  
  // Access the inputElement
  let inputEle = commentBtn.parentElement.parentElement.children[1].children[0].value;
  //console.log(commentVar);

  // access the commentBox
  let commentBox = commentBtn.parentElement.parentElement.parentElement.children[2]
  //console.log(commentBox);

  // Cloning or Copying of commentBox for newElement
  let newEle =  commentBox.children[0].cloneNode(true);

  // Replacing value of commentBox with inputEle
  newEle.children[0].innerHTML = inputEle;

  // Clearing the typed comment
  commentBtn.parentElement.parentElement.children[1].children[0].value = "";

  // Adding the new inputEle before previous comment 
  commentBox.insertBefore(newEle, commentBox.firstChild);

};

let likeFun = function (likeBtn) {

  //Access the likeBtn
  let likeVar = likeBtn.children[0].innerHTML;

  // To convert the string value into INT
  let likeCounter = parseInt(likeVar);

  // Increament the counter value
  likeCounter++;

  // To chnage the like counter
  likeBtn.children[0].innerHTML = likeCounter;

};

let deleteFun = function (deleteBtn) {

  // To Access the commentBox
  let deleteVar = deleteBtn.parentElement.parentElement;

  // To Remove the specific comment 
  deleteBtn.parentElement.parentElement.remove();

}