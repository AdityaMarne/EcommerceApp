import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`);
                setProduct(response.data);
            }catch (error) {
                console.error('Error fetching product:', error);
            }
        }
    }, [id]);

    if(!product) return <p>Loading...</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;