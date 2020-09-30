import React, {useState} from "react";

function TDLInput({addElem}){
	const [value, setValue] = useState('');

	return (
			<div className="TDLInput">
				<input value={value} onChange={event => setValue(event.target.value)}/>
				<button onClick={() => {
					value && addElem({name: value})
					setValue('')
				}}>Add</button>
			</div>
		)
}


export default TDLInput;
