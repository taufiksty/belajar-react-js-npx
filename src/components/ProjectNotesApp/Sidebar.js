import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar(props) {
	const noteElements = props.notes.map((note) => (
		<div key={note.id}>
			<div
				className={`title ${
					note.id === props.currentNote.id ? "selected-note" : ""
				}`}
				onClick={() => props.setCurrentNoteId(note.id)}>
				<h4 className="text-snippet">
					{note.body.split("/n")[0].replace(/[#"*`~>-]/g, " ")}
					<button
						className="delete-btn"
						onClick={(event) => props.deleteNote(event, note.id)}
						style={
							note.id === props.currentNote.id
								? { display: "inline" }
								: { display: "none" }
						}>
						<FontAwesomeIcon
							icon={faTrash}
							className="trash-icon"
						/>
					</button>
				</h4>
			</div>
		</div>
	));

	return (
		<section className="pane sidebar">
			<div className="sidebar--header">
				<h3>Notes</h3>
				<button
					className="new-note"
					onClick={props.newNote}>
					+
				</button>
			</div>
			{noteElements}
		</section>
	);
}
