import React, {useState} from "react";

const TDLInput = ({addElem}) => {
	const [value, setValue] = useState('');

	const changeValue = event => setValue(event.target.value);

	return (
			<div className="TDLInput">
				<input value={value} onChange={changeValue}/>
				<button onClick={() => {
					value.trim() && addElem({name: value});
					setValue('');
				}}>Add</button>
			</div>
		)
}


export default TDLInput;
