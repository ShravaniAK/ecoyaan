import React from "react";
import "./team.css";


function Team(props) {
	return (
        <div className="teams">

       
		<div className="card-container">
			<div className="hearder">
                <div className="imgg">

				<img src={props.avatar} alt={props.name} />
                </div>
			</div>
			<h1 className="bold-text">
				{props.name} 
			</h1>
			<h5 className="normal-text">{props.description}</h5>
			
		</div>
        </div>
	);
}

export default Team;