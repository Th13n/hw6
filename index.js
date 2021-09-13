const button1 = document.getElementById('button');
button1.style.height = '20px'
button1.style.width = '60px'
function printInfor() {
  const userName = document.getElementById('name');
  const userAge = document.getElementById('age');
  const userBirthday = document.getElementById('birthday');
  const color1 = document.getElementById('color');
  const para = document.getElementById('p');
  para.innerHTML = `<p> Họ và tên: ${userName.value}</p> <p>Tuổi: ${userAge.value}</p> <p>Ngày/tháng/năm sinh: ${userBirthday.value}</p>`;
  para.style.color = color1.value
  userAge.value = ''
  userName.value = ''
  userBirthday.value = ''
}

button1.onclick = printInfor;
