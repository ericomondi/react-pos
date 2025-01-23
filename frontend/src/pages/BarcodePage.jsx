import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { ComponentToPrint } from "../components/ComponentToPrint";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import AddProduct from "../components/AddProduct";

function BarcodePage() {
  // State management
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [array, setArray] = useState([]);
  const [barcode, setBarcode] = useState(""); // For handling scanned input

  const fetchProducts = async () => {
    setIsLoading(true);

    try {
      const result = await axios.get("http://localhost:8000/products");
      setProducts(result.data);
      setArray(result.data); // Initialize the filterable array
      console.log("Fetched products:", result.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products");
    } finally {
      setIsLoading(false);
    }
  };

  const addProductToCart = (product) => {
    let findProductInCart = cart.find((i) => i.id === product.id);

    if (findProductInCart) {
      let newCart = cart.map((cartItem) =>
        cartItem.id === product.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalAmount: cartItem.price * (cartItem.quantity + 1),
            }
          : cartItem
      );
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1, totalAmount: product.price },
      ]);
    }
    toast.success(`Added ${product.name} to cart`);
  };

  const handleBarcodeInput = async (barcode) => {
    try {
      console.log(`Searching for product with barcode: ${barcode}`);
      const result = await axios.get(
        `http://localhost:8000/products?barcode=${barcode}`
      );

      if (result.data.length > 0) {
        console.log("Product found:", result.data[0]);
        addProductToCart(result.data[0]); // Add the product to the cart
        toast.success("Product added to cart!");
      } else {
        toast.error("Product not found!");
      }
    } catch (error) {
      console.error("Error handling barcode input:", error);
      toast.error("Error handling barcode input");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let newTotalAmount = cart.reduce(
      (total, item) => total + item.totalAmount,
      0
    );
    setTotalAmount(newTotalAmount);
  }, [cart]);

  return (
    <div className="row">
      <div className="col-lg-6">
        {/* Barcode Input */}
        <div className="mb-3">
          <label htmlFor="barcodeInput" className="form-label">
            Scan Barcode:
          </label>
          <input
            id="barcodeInput"
            type="text"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)} // Update state on change
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleBarcodeInput(barcode); // Pass the current barcode value
                setBarcode(""); // Clear the input field
              }
            }}
            className="form-control"
            placeholder="Scan barcode here"
          />
        </div>

        {/* Filter and Product List */}
        <div className="text-end">
          <input
            type="text"
            onChange={(e) => {
              const filter = e.target.value.toLowerCase();
              setArray(
                products.filter((product) =>
                  product.name.toLowerCase().includes(filter)
                )
              );
            }}
            placeholder="Filter by name"
          />
          <button onClick={() => setArray(products)}>Reset Filter</button>
        </div>
        <DataTable
          title="Products"
          columns={[
            { name: "Name", selector: (row) => row.name, sortable: true },
            {
              name: "Actions",
              selector: (row) => (
                <div>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => addProductToCart(row)}
                  >
                    +
                  </button>
                </div>
              ),
              sortable: true,
            },
          ]}
          data={array}
          pagination
          striped
          highlightOnHover
          selectableRows
        />
      </div>

      <div className="col-lg-6">
        {/* Cart Details */}
        <div className="table-responsive bg-dark">
          <table className="table table-dark">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Price</td>
                <td>Qty</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="px-2 text-white">Total Amount: ${totalAmount}</h2>
        </div>
      </div>
    </div>
  );
}

export default BarcodePage;
