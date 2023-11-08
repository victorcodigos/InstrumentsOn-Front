import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.scss";


function Search() {
    const [products, setProducts] = useState([]);
    const [tableProduct, setTableProduct] = useState([]);
    const [search, setSearch] = useState("");

    const apiGet = async () => {
        axios.get("http://localhost:3000/products/all")
            .then(res => {
                setProducts(res.data)
                setTableProduct(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const handleChange = e => {
        setSearch(e.target.value)
        getProduct(e.target.value);
    }


    const getProduct = (finishSearch) => {
        const resultSearch = tableProduct.filter((element) => {
            if (element.name.toString().toLowerCase().includes(finishSearch.toLowerCase())
                || element.id.toString().toLowerCase().includes(finishSearch.toLowerCase())
                || element.type.toString().toLowerCase().includes(finishSearch.toLowerCase())
                || element.price.toString().toLowerCase().includes(finishSearch.toLowerCase())

            ) {
                return element;
            }
        })
        setProducts(resultSearch)
    }

    useEffect(() => {
        apiGet();
    }, [])


    return (
        <div className="App">
            <div className="container-input">
                <p><br /><input className="form-control-inputBuscar" value={search} placeholder="search your product here 🔎" onChange={handleChange} /></p>
            </div>
            <div className="table-responsive">
                <table className="table-sm-table-bordered">
                    <thead>
                        <tr>
                            <th>ID | </th>
                            <th>NAME | </th>
                            <th>TYPE | </th>
                            <th>PRICE  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((products) => (
                                <tr key={products.id}>
                                    <td> {products.id}</td>
                                    <td> {products.name}</td>
                                    <td> {products.type}</td>
                                    <td> {products.price} €</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Search
