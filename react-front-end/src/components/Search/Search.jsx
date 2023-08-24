import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.scss";

function Search() {
    const [product, setProduct] = useState([]);
    const [tableProduct, setProductName] = useState([]);
    const [search, setSearch] = useState("");

    const apiGet = async () => {
        axios.get("http://localhost:3000/products/all")
            .then(res => {
                setProduct(res.data)
                setProductName(res.data)
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
                || element.year.toString().toLowerCase().includes(finishSearch.toLowerCase())
                || element.price.toString().toLowerCase().includes(finishSearch.toLowerCase())

            ) {
                return element;
            }
        })
        setProduct(resultSearch)
    }


    useEffect(() => {
        apiGet();
    }, [])
    return (
        <div className="App">
            <div className="container-input">
                <p><br /><input className="form-control-inputBuscar" value={search} placeholder="search your product 🔎" onChange={handleChange} /></p>

            </div>
            <div className="table-responsive">
                <table className="table-sm-table-bordered">
                    <thead>
                        <tr>
                            <th>| ID | </th>
                            <th>| NAME | </th>
                            <th>| TYPE | </th>
                            <th>| PRICE | </th>
                            <th>| YEAR | </th>
                        </tr>
                    </thead>
                    <tbody>
                        {product &&
                            product.map((product) => (
                                <tr key={product.id}>
                                    <td> {product.id}</td>
                                    <td> {product.name}</td>
                                    <td> {product.type}</td>
                                    <td> {product.price}</td>
                                    <td> {product.year}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Search
