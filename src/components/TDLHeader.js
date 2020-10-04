import React from "react";

const TDLHeader = ({getCount}) => {
	const [count, len] = getCount();
	return (
		<div>
			<h1>To Do List</h1>
			<span>Done: {count}, All: {len}</span>
		</div>
	)
}

export default TDLHeader;
