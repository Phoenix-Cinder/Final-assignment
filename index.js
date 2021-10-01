const elemID = document.getElementById('right-col');
    

function changeBackground(color){
    elemID.style.backgroundColor = color;
}
  
const elemIDFont = document.getElementById('inv-area');

function changeFont(font){
    elemID.style.font = font;
}

const firstNameBlock = document.getElementById('firstNameBlock'), firstNameInput = document.getElementById('firstName')

  if ((firstNameInput.value).length === 0) {
    firstNameBlock.innerHTML = ''
  }

  firstNameInput.addEventListener('input', () {
    firstNameBlock.setAttribute('data-text', firstNameInput.value)

    firstNameBlock.innerHTML = firstNameBlock.getAttribute('data-text')

    if ((firstNameInput.value).length === 0) {
      firstNameBlock.innerHTML = ''
    }}