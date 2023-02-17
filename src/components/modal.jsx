import { React } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import image from '../assets/image1.jpg';
function FoodModal (props) {
    const { food, description, price, image } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <img src={image} alt="" width="100%" />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{food}</h4>
                <p>{description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    );

}


export default FoodModal;