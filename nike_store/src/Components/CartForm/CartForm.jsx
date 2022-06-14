import React from 'react'

const CartForm = ({purchaseOrder}) => {

    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget)
        event.preventDefault()

        let buyer = {
            user: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email')
        }

        purchaseOrder(buyer)


    }

    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Purchase Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <input name='name' className="form-control" type="text" placeholder="full name" aria-label="default input example" required />
                                <br />
                                <input name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="e-mail" required />
                                <br />
                                <input name='phone' type="number" className="form-control" id="inputAddress" placeholder="phone number" required />
                                <div className="form-text">We'll never share your data with anyone else.</div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Purchase</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            
        </>
    )
}

export default CartForm