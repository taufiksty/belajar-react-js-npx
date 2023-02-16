import React from "react";

const Sidebar = (props) => {
	return (
		<div className={`sidebar ${props.isOpen ? "open" : ""}`}>
			<ul>
				<li>Isi</li>
				<li>Isi</li>
				<li>Isi</li>
			</ul>
		</div>
	);
};

export default Sidebar;
