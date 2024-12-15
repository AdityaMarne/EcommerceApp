import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async() => {
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/products/');
                setProducts(response.data);
            }catch(error){
                console.error('Error fetching products :',error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px' }}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;