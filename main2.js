let bt = document.querySelector('.bt')
let bt2 = document.querySelector('.bt2')

bt.addEventListener('click', function () {
  let nome = document.querySelector('.user').value;
  let password = document.querySelector('.senha').value;

  let user = JSON.parse(localStorage.getItem('user') || '[]');

  let tem;
  let nao;
  user.forEach((el) => {
    let userdigitado = document.querySelector('.user').value;
    let jsonuser = el.login

    if (jsonuser.includes(userdigitado)) {
      tem = jsonuser.includes(userdigitado)
      return true;
    } else {
      nao = jsonuser.includes(userdigitado)
      return false;
    }
  })

  if (tem == true) {

  } else if (nao == false) {
    user.push({
      login: nome,
      senha: password
    })
  }
  localStorage.setItem('user', JSON.stringify(user));
})

bt2.addEventListener('click', function () {

  let user2 = document.querySelector('.user2').value;
  let password2 = document.querySelector('.senha2').value;

  let local = localStorage.getItem('usersave')
  let object = JSON.parse(local)
  object.forEach(e => {
    if (user2 == e.login && password2 == e.senha) {
      console.log('ja tem este usuario')
    } else {
      console.log('acesse a pagina e cadastra est usuario')
    }
  })

});

