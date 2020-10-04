import React from "react";
import clsx from "clsx";

const TDLElement = (props) => {
		const {index, prop : { name, mark, done }, removeMethod, doneElem, markElem} = props;

		const markTDLElem = () => markElem(index);
		const doneTDLElem = () => doneElem(index);
		const removeTDLElem = () => removeMethod(index);

		return (
			<div className="TDLElem">
				<span className={clsx(mark ? 'mark' : '', done ? 'done' : '')}>{name}</span>
				<button onClick={markTDLElem}>!</button>
				<button onClick={doneTDLElem}>✓</button>
				<button onClick={removeTDLElem}>X</button>
			</div>
		)
}


export default TDLElement;
