document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementsByName('uname')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('psw')[0].value;

    console.log('Nombre de usuario: ', username);
    console.log('Email: ', email);
    console.log('Contraseña: ', password);

    // Aquí puedes agregar el código para manejar los datos del formulario
});