import AlertRemoveActivityConfirmation from '../components/AlertRemoveActivityConfirmation';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';

function ModalConfirmRemoveActivity(props: any) {
	const navigate = useNavigate();
	const removeActivity = () => {
		navigate('../activities')
	}

	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Ta bort aktivitet</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Är du säker på att du vill ta bort aktiviteten?</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide} variant={"secondary"}>Nej, avbryt</Button>
				<Button onClick={removeActivity} variant={"danger"}>Ja, ta bort aktiviteten</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ModalConfirmRemoveActivity;
