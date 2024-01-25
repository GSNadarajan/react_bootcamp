const ProductList = () => {
    const [Products, setProducts] = useState([]);
     useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
       
        return () => {

        };
    }, [input]);

    return<div className="products">{
        Products.map
    }</div>
}