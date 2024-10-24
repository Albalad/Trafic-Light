import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [roja, setRoja] = useState("");
    
	const [naranja, setNaranja] = useState("");

	const [verde, setVerde] = useState("");

	const [oculto, setOculto] =useState("oculto");

	const encendidoRojo = () => {
		setRoja(roja == "activaRoja" ? "" : "activaRoja")
		setNaranja("")
		setVerde("")
	}

	const encendidoNaranja = () => {
		setNaranja(naranja == "activaNaranja" ? "" : "activaNaranja")
		setRoja("")
		setVerde("")
	}

	const encendidoVerde = () => {
		setVerde(verde == "activaVerde" ? "" : "activaVerde")
		setRoja("")
		setNaranja("")
	}

	const intercambio = () => {
		if (roja == "" && naranja == "" && verde == "") {
			setRoja("activaRoja")
		}
		if (roja == "activaRoja") {
			setRoja("")
			setNaranja("activaNaranja")
		}
		if (naranja == "activaNaranja") {
			setNaranja("")
			setVerde("activaVerde")
		}
		if (verde == "activaVerde") {
			setVerde("")
		}
	}

	const hazOculto = () => {
		setOculto(oculto == "oculto" ? "" : "oculto")
		setRoja("")
		setNaranja("")
		setVerde("")
	}

	return (
		<div>
			<div>
				<div className="paloSemaforo"></div>
				<div className="luces">
					<div className={`luzRoja ${roja}`}><button className="luzRoja" onClick={() => { encendidoRojo() }}></button></div>
					<div className={`luzAmarilla ${naranja}`}><button className="luzAmarilla" onClick={() => { encendidoNaranja() }}></button></div>
					<div className={`luzVerde ${verde}`}><button className="luzVerde" onClick={() => { encendidoVerde() }}></button></div>
					<div className={`${oculto} morado`}><button className="morado"></button></div>
				</div>
			</div>
			<div className="botonCambio">
				<button className="cambioDeLuz" onClick={() => intercambio()}>Cambia las luces</button>
			</div>
			<div className="botonCambio">
				<button className="añadeMorado" onClick={() => hazOculto()}>Añade/Quita una luz morada</button>
			</div>
		</div>
	);
};

export default Home;
