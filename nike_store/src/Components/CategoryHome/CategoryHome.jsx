import { NavLink } from 'react-router-dom'

import './CategoryHome.css'

const CategoryHome = () => {
    const men = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/41eba202-36c9-40b7-8c5f-36693d2cda37/dri-fit-sudadera-con-capucha-de-entrenamiento-con-cremallera-completa-FLB8MX.png'
    const women = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8b6da35e-cd59-4906-b22b-9c2bafa3d838/dri-fit-one-luxe-camiseta-de-manga-corta-de-ajuste-estandar-retorcida-bn1rT8.png'
    const children = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3dd272b4-c209-4c11-b046-fa707dfa9317/vestido-wM7VVR.png'
    const clothing = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e1e675bb-03ac-4f06-89c2-e948966882d1/dri-fit-alate-minimalist-sujetador-deportivo-de-sujecion-ligera-con-almohadilla-b45Ktf.png'
    const shoe = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d1517f84-fc40-4a9c-a028-ca8fa0ed3fe0/air-max-terrascape-plus-zapatillas-ppK6P9.png'
    const accessory = 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/38439d65-5957-456c-a427-95399777aa7c/gym-club-bolsa-de-entrenamiento-5Cqp1z.png'
    return (

        <div className="category">
            <div className="card" >
                <img src={men} className="card-img-top" alt="MEN" />
                <div className="card-body">
                    <h5 className="card-title">Men</h5>
                    <NavLink to='/itemListCont/men' className="btn btn-dark">See more</NavLink>
                </div>
            </div>
            <div className="card" >
                <img src={women} className="card-img-top" alt="WOMEN" />
                <div className="card-body">
                    <h5 className="card-title">Women</h5>
                    <NavLink to='/itemListCont/women' className="btn btn-dark">See more</NavLink>
                </div>
            </div>
            <div className="card" >
                <img src={children} className="card-img-top" alt="Children" />
                <div className="card-body">
                    <h5 className="card-title">Children</h5>
                    <NavLink to='/itemListCont/children' className="btn btn-dark">See more</NavLink>
                </div>
            </div>

            <div className="card" >
                <img src={shoe} className="card-img-top" alt="Shoe" />
                <div className="card-body">
                    <h5 className="card-title">Shoes</h5>
                    <NavLink to='/itemListCont/shoes' className="btn btn-dark">See more</NavLink>
                </div>
            </div>
            
            <div className="card" >
                <img src={clothing} className="card-img-top" alt="Clothing" />
                <div className="card-body">
                    <h5 className="card-title">Clothing</h5>
                    <NavLink to='/itemListCont/clothing' className="btn btn-dark">See more</NavLink>
                </div>
            </div>
            <div className="card" >
                <img src={accessory} className="card-img-top" alt="Accessories" />
                <div className="card-body">
                    <h5 className="card-title">Accessories</h5>
                    <NavLink to='/itemListCont/accessory' className="btn btn-dark">See more</NavLink>
                </div>
            </div>
        </div>


    )
}

export default CategoryHome
