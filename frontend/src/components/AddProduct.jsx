import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState();
  const [price, setPrice] = useState();
  const [stockQuantity, setStockQuantity] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [barcode, setBarcode] = useState();

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const formContent = {
      name: name,
      cost: cost,
      price: price,
      stock_quantity: stockQuantity,
      img_url: imgUrl,
      barcode: barcode
    };

    try {
      const token = localStorage.getItem("token");
      const apiUrl = "http://127.0.0.1:8000/products";
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Product added successfully!");
      console.log("Done.", response.data);
    } catch (error) {
      toast.error("An error occurred while adding the product.");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Product</h2>
      <form onSubmit={handleProductSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productCost">Product Cost</label>
          <input
            type="number"
            className="form-control"
            id="productCost"
            placeholder="Enter product cost"
            value={cost}
            onChange={(e) => setCost(e.target.valueAsNumber)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.valueAsNumber)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stockQuantity">Stock Quantity</label>
          <input
            type="number"
            className="form-control"
            id="stockQuantity"
            placeholder="Enter the stock quantity"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.valueAsNumber)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="barcode">Barcode</label>
          <input
            type="number"
            className="form-control"
            id="barcode"
            placeholder="Enter barcode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.valueAsNumber)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pictureUrl">Picture URL</label>
          <input
            type="text"
            className="form-control"
            id="pictureUrl"
            placeholder="Enter product link"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
