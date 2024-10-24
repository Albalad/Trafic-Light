import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [roja, setRoja] = useState("");
	const [naranja, setNaranja] = useState("");
	const [verde, setVerde] = useState("");
	const encendidoRojo = () =>{
		setRoja(roja == "activaRoja" ? "" : "activaRoja")
		setNaranja("")
		setVerde("")
	}
	const encendidoNaranja = () =>{
		setNaranja(naranja == "activaNaranja" ? "" : "activaNaranja")
		setRoja("")
		setVerde("")
	}
	const encendidoVerde = () =>{
		setVerde(verde == "activaVerde" ? "" : "activaVerde")
		setRoja("")
		setNaranja("")
	}
	return (
		<>
			<div>
				<div className="luces">
					<div className={`luzRoja ${roja}`}><button className="luzRoja" onClick={() => {encendidoRojo()}}></button></div>
					<div className={`luzAmarilla ${naranja}`}><button className="luzAmarilla" onClick={() => {encendidoNaranja()}}></button></div>
					<div className={`luzVerde ${verde}`}><button className="luzVerde" onClick={() => {encendidoVerde()}}></button></div>
				</div>
			</div>
		</>
	);
};

export default Home;
