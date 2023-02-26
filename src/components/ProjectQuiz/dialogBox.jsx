import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DialogBox(props) {
	const [modalShow, setModalShow] = useState(props.open);

	useEffect(() => {
		setModalShow(props.open);
	}, [props]);

	const handleClose = () => setModalShow(false);
	
  return (
		<Modal
			show={modalShow}
			onHide={handleClose}
			size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="text-center"
      animation={true}
			centered>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">Score</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					{props.totalTrue <= 5
						? `Unfortunately, you got ${props.totalTrue}/10`
						: props.totalTrue < 8
						? `Good, you got ${props.totalTrue}/10`
						: props.totalTrue < 10
						? `Great, you got ${props.totalTrue}/10`
						: `Perfect, you got 10/10`}
				</p>
			</Modal.Body>
			<Modal.Footer>
				<a href="/">
					<Button className="btn btn-secondary">Try quiz again</Button>
				</a>
				<Button onClick={handleClose}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}
