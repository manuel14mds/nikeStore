import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CartFormOrderCode = ({orderCode, handleCloseOrder}) => {
    return (
        <>
            <Modal.Header closeButton>
            <Modal.Title>NIKE STORE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body">
                    <p className='bg-$teal-400' style={{ backgroundColor: "#49e372" }}>successful purchase</p>
                    <br />
                    {
                        orderCode === '' ?
                            <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        :
                            <p>Order code: {orderCode}</p>
                    }
                </div>

                <Modal.Footer>
                    <Button type="button" className="btn btn-danger" variant="secondary" onClick={handleCloseOrder}>Close</Button>
                </Modal.Footer>
            </Modal.Body>
        </>
    )
}

export default CartFormOrderCode
