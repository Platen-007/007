
(function () {
    // Verificar si ya se ha seleccionado un script antes de mostrar el menÃº
    var scriptSeleccionado = localStorage.getItem('scriptSeleccionado');

    if (!scriptSeleccionado) {
        document.documentElement.style.overflow = 'hidden'; // Bloquear el scroll
        document.body.innerHTML = ''; // Limpiar la pÃ¡gina

        function cargarScript(url) {
            localStorage.setItem('scriptSeleccionado', url); // Guardar la selecciÃ³n
            location.reload(); // Recargar la pÃ¡gina automÃ¡ticamente
        }

        function crearMenu() {
            var menu = document.createElement('div');
            menu.id = 'menu-container';
            menu.innerHTML = `
                <div class="fixed-background">
                    <div class="background-image"></div>
                    <img src="https://i.imgur.com/XDSCMg7.png" class="logo" alt="Logo">
                    <button id="opcion1" class="menu-button">Pakistan</button>
                    <button id="opcion2" class="menu-button">Turkey</button>
                </div>
            `;
            document.body.appendChild(menu);

            document.getElementById('opcion1').addEventListener('click', function () {
                cargarScript('https://platen-007.github.io/007/js/game_pk.js');
            });

            document.getElementById('opcion2').addEventListener('click', function () {
                cargarScript('https://platen-007.github.io/007/js/game_tr.js'); // Reemplaza con la URL real del otro script
            });


            var estilos = document.createElement('style');
            estilos.innerHTML = `
                .fixed-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: black;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 99999;
                    transition: opacity 0.5s ease-out;
                }

                .background-image {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: url('https://i.imgur.com/6maUSYJ.png') no-repeat center center/cover;
                    background-size: cover;
                    background-position: center;
                    opacity: 0.3;
                    filter: blur(5px) opacity(1.5);
                }

                .logo {
                    width: 200px;
                    animation: pulse 4s infinite;
                    margin-bottom: 50px;
                    z-index: 100000;
                }

                @keyframes pulse {
                    0% { transform: scale(1.2); opacity: 1; }
                    50% { transform: scale(1.3); opacity: 0.8; }
                    100% { transform: scale(1.2); opacity: 1; }
                }

                .menu-button {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                    font-size: 18px;
                    padding: 10px 20px;
                    border: 2px solid white;
                    border-radius: 5px;
                    margin: 10px;
                    cursor: pointer;
                    z-index: 100000;
                    transition: all 0.3s ease-in-out;
                }

                .menu-button:hover {
                    background-color: white;
                    color: black;
                }
            `;
            document.head.appendChild(estilos);
        }

        crearMenu();
    } else {
        // Si ya se seleccionÃ³ un script, cargarlo directamente
        var script = document.createElement('script');
        script.src = scriptSeleccionado + '?v=' + new Date().getTime();
        document.head.appendChild(script);
    }
})();
