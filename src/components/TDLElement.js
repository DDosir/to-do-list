import React from "react";

function TDLElement(props){
		const {index, prop : { name, mark, done }, removeMethod, doneElem, markElem} = props;
		let className = '';
		mark ? className +='mark ' : className += '';
		done ? className +='done ' : className += '';
		return (
			<div className="TDLElem">
				<span className={className} onClick={doneElem}>{name}</span>
				<button onClick={() => markElem(index)}>!</button>
				<button onClick={() => removeMethod(index)}>X</button>
			</div>
		)
}


export default TDLElement;
