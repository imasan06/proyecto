<script>
        let asistencia = [
            { nombre: 'Juan Perez', presente: true },
            { nombre: 'Maria Lopez', presente: false },
        ];

        let tablaDiv = document.getElementById('tabla');
        let formAsistencia = document.getElementById('formAsistencia');

        function actualizarTabla() {
            tablaDiv.innerHTML = '<table><tr><th>Nombre</th><th>Presente</th></tr>';

            for (let estudiante of asistencia) {
                tablaDiv.innerHTML += <tr><td>${estudiante.nombre}</td><td>${estudiante.presente ? 'Sí' : 'No'}</td></tr>;
            }

            tablaDiv.innerHTML += '</table>';
        }

        formAsistencia.onsubmit = function(e) {
            e.preventDefault();
            let nombre = document.getElementById('nombre').value;
            let presente = document.getElementById('presente').value === 'true';
            asistencia.push({ nombre: nombre, presente: presente });
            actualizarTabla();
        }

        actualizarTabla();
</script>