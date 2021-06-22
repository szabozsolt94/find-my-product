const Products = ({ data }) => {
    return (
        <div className='product-container'>
            {data.map((element, index) =>
                <div key={index} className='product' id={`Product- ${index}`}>
                    <h3>{element.title}</h3>
                    <p>{element.description}</p>
                    <p><b>Price:</b> {element.price}$</p>
                    <p><b>Rating:</b> {element.rating}</p>
                </div>)}
        </div>
    )
}

export default Products