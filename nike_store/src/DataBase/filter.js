//recibe un Id producto y me retorna el objeto producto
function findProduct(itemId){
    let product = {}
    fetch('../../assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                
                product=data.find(item => item.id === itemId)
                console.log('product of findProduct'+product)
            })
            .catch((err)=> console.log(err))
            console.log(product)

            
}
