import React, { useEffect, useState } from "react";
import Sidebar from "../components/ProjectNotesApp/Sidebar";
import Editor from "../components/ProjectNotesApp/Editor";
import "../style/ProjectNotesApp.css";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
	const isJSON = (str) => {
		try {
			JSON.parse(str);
		} catch (error) {
			return false;
		}
		return true;
	};

	const getItemLocalStorage = () => {
		const check = localStorage.getItem("notes");
		if (check && isJSON(check)) {
			return JSON.parse(check);
		}
	};

	const [notes, setNotes] = useState(
		getItemLocalStorage ? [] : getItemLocalStorage
	);
	const [currentNoteId, setCurrentNoteId] = useState(
		notes[0] ? notes[0].id : ""
	);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const createNewNote = () => {
		const newNote = {
			id: nanoid(),
			body: "# Type your markdown note's title here",
		};
		setNotes((prevNotes) => [newNote, ...prevNotes]);
		setCurrentNoteId(newNote.id);
	};

	const updateNote = (text) => {
		setNotes((oldNotes) => {
			let newNotes = [];

			for (let i = 0; i < oldNotes.length; i++) {
				if (oldNotes[i].id === currentNoteId) {
					newNotes.unshift({ ...oldNotes[i], body: text });
				} else {
					newNotes.push(oldNotes[i]);
				}
			}
			return newNotes;
		});

		// This is not re-arrange the array updated
		// setNotes((oldNotes) => {
		// 	oldNotes.map((oldNote) =>
		// 		oldNote.id === currentNoteId ? { ...oldNote, body: text } : oldNote
		// 	);
		// });
	};

	const deleteNote = (event, noteId) => {
		event.stopPropagation();
		setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
	};

	const findCurrentNote = () =>
		notes.find((note) => note.id === currentNoteId) || notes[0];

	return (
		<main>
			{notes.length > 0 ? (
				<Split
					sizes={[30, 70]}
					direction="horizontal"
					className="split">
					<Sidebar
						notes={notes}
						currentNote={findCurrentNote()}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
						deleteNote={deleteNote}
					/>
					{currentNoteId && notes.length > 0 && (
						<Editor
							currentNote={findCurrentNote()}
							updateNote={updateNote}
						/>
					)}
				</Split>
			) : (
				<div className="no-notes">
					<h1>You have no notes</h1>
					<button
						className="first-note"
						onClick={createNewNote}>
						Create Note
					</button>
				</div>
			)}
		</main>
	);
}
