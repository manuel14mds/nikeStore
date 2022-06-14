import React from 'react'

const CartFormOrderCode = ({orderCode}) => {
    return (
        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">NIKE STORE</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CartFormOrderCode
