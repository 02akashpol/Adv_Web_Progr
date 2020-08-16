/*

          
          <div style="display: flex;
          justify-content: start;
          ">

            <input type="checkbox"
            style="display: flex;
            justify-content: left;
            margin-top: 5px;">
            <label for="remeber me"
            style="padding: 0;
            margin-top: 5px;">remember me</label>
          </div>
          usernameFun()
          passwordFun()
          emailFun(
*/

function usernameFun() {

  let usernameInpt = document.querySelector("#usernameId").value;
  console.log(usernameInpt);

  let child1 = usernameInpt;

  let commentBox = document.querySelector("#commentBoxId");

  let newEle = document.querySelector("#commentBoxId").children[0].cloneNode(true)

  newEle.children[0].innerHTML = child1;

  commentBox.appendChild(newEle, commentBox.firstChild);

  document.querySelector("#usernameId").value = "";

}

function passwordFun() {

  let passwordInpt = document.querySelector("#passwordId").value;
  console.log(passwordInpt);

  let child2 = passwordInpt;
 
  let commentBox = document.querySelector("#commentBoxId");

  let newEle = document.querySelector("#commentBoxId").children[1].cloneNode(true)

  newEle.children[0].innerHTML = child2;

  commentBox.appendChild(newEle, commentBox.firstChild);

  document.querySelector("#passwordId").value = "";

}

function emailFun() {

  let emailInpt = document.querySelector("#emailId").value;
  console.log(emailInpt);

  let child3 = emailInpt;

  let commentBox = document.querySelector("#commentBoxId");

  let newEle = document.querySelector("#commentBoxId").children[2].cloneNode(true)

  newEle.children[0].innerHTML = child3;

  commentBox.appendChild(newEle, commentBox.firstChild);

  document.querySelector("#emailId").value = "";

}