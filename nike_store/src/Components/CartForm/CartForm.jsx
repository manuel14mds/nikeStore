import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CartForm = ({ purchaseOrder, handleClose, handleShowOrder }) => {

    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget)
        event.preventDefault()

        let buyer = {
            user: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            emailVal: formData.get('emailVal')
        }
        if(buyer.email === buyer.emailVal){
            purchaseOrder(buyer)
            handleShowOrder()
        }else{
            console.log('wfwetgwegergergr')
        }


    }

    return (

        <>
            <Modal.Header closeButton>
                <Modal.Title>Purchase Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <input name='name' className="form-control" type="text" placeholder="full name" aria-label="default input example" required />
                    <br />
                    <input name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="e-mail" required />
                    <br />
                    <input name='emailVal' type="email" className="form-control" id="exampleFormControlInput1" placeholder="e-mail" required />
                    <br />
                    <input name='phone' type="number" className="form-control" id="inputAddress" placeholder="phone number" required />
                    <div className="form-text">We'll never share your data with anyone else.</div>

                    <Modal.Footer>
                        <Button type="button" className="btn btn-danger" variant="secondary" onClick={handleClose}>Close</Button>
                        <Button type="submit" className="btn btn-dark" variant="primary" >Purchase</Button>
                    </Modal.Footer>
                    
                </form>
            </Modal.Body>

        </>
    )
}

export default CartForm
