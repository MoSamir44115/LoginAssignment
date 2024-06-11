let userNameInput = document.getElementById('uName')
let userEmailInput = document.getElementById('uEmail')
let userPassInput = document.getElementById('uPass')

let userDetails = []

//  REGSITERING AND PUSHING USER DETAILS FUN
let regest = document.getElementById('regest')

function regestAdding () {
  let userInfos = {
    name: userNameInput.value,
    email: userEmailInput.value,
    password: userPassInput.value
  }
  userDetails.push(userInfos)
  let setData = localStorage.setItem('User', JSON.stringify(userDetails))

  let sucMsg = document.getElementById('successMessege')
  sucMsg.classList.replace('d-none', 'd-block')
  clearItems()
}
signUp()
signIn()

// SUCCES MSG FUNCTION

function sucesMsg () {
  let sucMsg = document.getElementById('successMessege')
  sucMsg.classList.replace('d-block', 'd-none')
}

regest.addEventListener('click', regestAdding)

//  LOGIN FUNCTION WHICH WORKS WHEN LOGIN IS PRESSED AFTER WRITING EMAIL AND PASS
let login = document.getElementById('login')
function loginAdding () {
  resetErrorMessage()
  let userInfos = {
    name: userNameInput.value,
    email: userEmailInput.value,
    password: userPassInput.value
  }
  let y = localStorage.getItem('User')
  let x = JSON.parse(y)
  console.log(x)
  for (var i = 0; i < userDetails.length; i++) {
    if (
      x[i].email === userInfos.email &&
      x[i].password === userInfos.password
    ) {
      let mainPage = document.getElementById('mPage')
      let welcomePage = document.getElementById('welPage')
      mainPage.classList.replace('d-block', 'd-none')
      welcomePage.classList.replace('d-none', 'd-block')
      let box = `<h1 class="h2 text">Welcome ${x[i].name}</h1>`
      let tBox = document.getElementById('theBox')
      tBox.innerHTML = box
      break
    } else {
      let incorrectEmailPass = document.getElementById('wrngEmailPass')
      incorrectEmailPass.classList.replace('d-none', 'd-block')
    }
  }
  clearItems()
}

// RESETING THE INCCORET EMAIL OR PASS MSG AFTER SUCCES LOGIN AND LOGOUT
function resetErrorMessage () {
  let incorrectEmailPass = document.getElementById('wrngEmailPass')
  incorrectEmailPass.classList.replace('d-block', 'd-none')
}
login.addEventListener('click', loginAdding)

// LOGOUT FUNCTION
let logout = document.getElementById('btnLogout')
function logOut () {
  let mainPage = document.getElementById('mPage')
  let welcomePage = document.getElementById('welPage')
  mainPage.classList.replace('d-none', 'd-block')
  welcomePage.classList.replace('d-block', 'd-none')
}
logout.addEventListener('click', logOut)

// Clear Items
function clearItems () {
  userNameInput.value = ''
  userEmailInput.value = ''
  userPassInput.value = ''
}
// TOGGLING BETWEEN SINGUP AND SIGN IN , THE 2 BELOW FUNCTIONS
// clicking function for signup
function signUp () {
  let signUp = document.getElementById('signUp')
  signUp.addEventListener('click', appearName)
  signUp.addEventListener('click', logAndsignUp)
  signUp.addEventListener('click', paragraphsExchanges)
}
function appearName () {
  let nametitle = document.getElementById('uName')
  nametitle.classList.toggle('d-none')
}
function logAndsignUp () {
  let log = document.querySelector('.log')
  let signUpbtn = document.querySelector('.signup')
  log.classList.toggle('d-none')
  signUpbtn.classList.toggle('d-none')
}
function paragraphsExchanges () {
  let signupParagraph = document.querySelector('.donthaveacc')
  let signinParagraph = document.querySelector('.haveacc')
  signupParagraph.classList.toggle('d-none')
  signinParagraph.classList.toggle('d-none')
}
// clicking function for signin
function signIn () {
  let signIn = document.getElementById('signIn')
  signIn.addEventListener('click', appearName)
  signIn.addEventListener('click', logAndsignUp)
  signIn.addEventListener('click', paragraphsExchanges)
  signIn.addEventListener('click', sucesMsg)
}



// function Valid(ele){
// let uEmailregex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/gm;
// if(uEmailregex.test(ele.value)){
// console.log('match')

// }
// }

// function emailValidation(ele) {
//   let uEmailregex  =  /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/gm;
// }

// function passValidation(element) {
//   let uPassregex  =  /^\w\S{3,}$/gm

// }
// function wholeValidation(){
//   if(uEmailregex.test(ele.value)== true && uPassregex.test(element.value) == true )
//     {
//       console.log('match')
//       adding();
//

//   }else{
// console.log('noomatch')
// }}

// VALIDATION FUN

// function Validation(ele) {
//   let msg = document.getElementsByid("wrngEmailPass")[0];
//   let regex = {
//     uName: /^[\w\s\d]+$/gm,
//     uEmail: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/gm,
//     uPass: /^\w\S{3,}$/gm,
//   };
//   if (regex[ele.id].test(ele.value)) {
//     msg.classList.replace("d-block", "d-none");
//   } else {
//     msg.classList.replace("d-none", "d-block");

//   }
// }

// let userNameInput = document.getElementById("UName")
// let userEmailInput = document.getElementById("Mail")
// let userPassInput = document.getElementById("Pword")

// let userDetails = [];

// btn.onclick = function adding() {
//   let userInfos = {
//     email: userEmailInput.value,
//     password: userPassInput.value,
//   };
//   userDetails.push(userInfos);

//   console.log(userDetails)
// }}
