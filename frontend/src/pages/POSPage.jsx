import React, { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { ComponentToPrint } from "../components/ComponentToPrint";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import AddProduct from "../components/AddProduct";

function POSPage() {
  // component
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [array, setArray] = useState([]);
  const [barcode, setBarcode] = useState(""); // For handling scanned input

  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Token is missing");
      return;
    }

    setIsLoading(true);

    try {
      const result = await axios.get("http://127.0.0.1:8000/products", {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (result.status === 200) {
        setProducts(result.data);
        console.log("Full response object:", result);
        console.log("Result data ......", result.data);
      } else {
        console.error("Unexpected response status:", result.status);
        toast.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products");
    } finally {
      setIsLoading(false);
    }
  };

  const addProductToCart = async (product) => {
    // check if the adding product exist
    let findProductInCart = await cart.find((i) => {
      return i.id === product.id;
    });

    if (findProductInCart) {
      let newCart = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });

      setCart(newCart);
      toast.success(`Added ${newItem.name} to cart`);
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalAmount: product.price,
      };
      setCart([...cart, addingProduct]);
      toast.success(`Added ${product.name} to cart`);
    }
  };
  const RemoveProductToCart = async (product) => {
    // check if the adding product exist
    let findProductInCart = await cart.find((i) => {
      return i.id === product.id;
    });

    if (findProductInCart) {
      let newCart = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity - 1,
            totalAmount: cartItem.price * (cartItem.quantity - 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });

      setCart(newCart);
      toast(`Removed ${product.name} from cart`);
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        totalAmount: product.price,
      };
      setCart([...cart, addingProduct]);
      toast(`Removed ${product.name} from cart`);
    }
  };
  const ClearCart = async () => {
    setCart([]);
  };

  const removeProduct = async (product) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };

  const handleBarcodeInput = async (barcode) => {
    try {
      const token = localStorage.getItem("token");
      console.log(`Searching for product with barcode: ${barcode}`);
      const result = await axios.get(
        `http://localhost:8000/products?barcode=${barcode}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
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

  const componentRef = useRef();

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    handleReactToPrint();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach((icart) => {
      newTotalAmount = newTotalAmount + parseInt(icart.totalAmount);
    });
    setTotalAmount(newTotalAmount);
  }, [cart]);

  const clearCartAndSubmit = async () => {
    // Submit cart to the database
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://127.0.0.1:8000/create_order",
        {
          cart,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Cart submitted successfully:", response.data);
      ClearCart();
      toast.success("Order inserted successfully");
    } catch (error) {
      toast.error("An error occured");
      console.error("Error submitting cart:", error);
    }
  };

  console.log("cart item......", cart);
  // SEARCHABLE DATTALE===================================
  const columns = [
    {
      name: "Name",
      selector: function (row) {
        return row.name;
      },
      sortable: true,
    },

    {
      name: "Actions",
      selector: function (row) {
        return (
          <div>
            <button
              className="btn btn-primary me-2"
              onClick={() => addProductToCart(row)}
            >
              +
            </button>
            <button
              className="btn btn-danger"
              onClick={() => RemoveProductToCart(row)}
            >
              -
            </button>
          </div>
        );
      },
      sortable: true,
    },
  ];

  function handleFilter(event) {
    const newData = products.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setArray(newData);
  }

  // SEARCH LOGIC===================================
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredProducts);
    } else {
      setSuggestions([]);
    }
  };
  const handleSelect = (product) => {
    setSearchTerm(product.name);
    setSuggestions([]);
    addProductToCart(product);
  };
  return (
    <div className="row">
      {/* Left Side: Cart Area (8 Columns) */}
      <div className="col-lg-8">
        {/* Seacrch bar */}
        <div className="position-relative mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search product..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {suggestions.length > 0 && (
            <ul
              className="list-group position-absolute w-100 shadow"
              style={{ zIndex: 999 }}
            >
              {suggestions.map((product) => (
                <li
                  key={product.id}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleSelect(product)}
                  style={{ cursor: "pointer" }}
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Hidden Component for Print */}
        <div style={{ display: "none" }}>
          <ComponentToPrint
            cart={cart}
            totalAmount={totalAmount}
            ref={componentRef}
          />
        </div>

        {/* Cart Table */}
        <div className="table-responsive bg-dark">
          <table className="table table-responsive table-dark table-hover">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Price</td>
                <td>Qty</td>
                <td>Total</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((cartProduct, key) => (
                  <tr key={key}>
                    <td>{cartProduct.id}</td>
                    <td>{cartProduct.name}</td>
                    <td>{cartProduct.price}</td>
                    <td>{cartProduct.quantity}</td>
                    <td>{cartProduct.totalAmount}</td>
                    <td>
                      <div className="d-flex gap-1">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => addProductToCart(cartProduct)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => RemoveProductToCart(cartProduct)}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeProduct(cartProduct)}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No Item in Cart
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <h2 className="px-2 text-white">Total Amount: ${totalAmount}</h2>
        </div>

        {/* Payment Section */}
        <div className="mt-3">
          {totalAmount !== 0 ? (
            <button className="btn btn-primary" onClick={clearCartAndSubmit}>
              Pay Now
            </button>
          ) : (
            <p className="text-white">Please add a product to the cart</p>
          )}
        </div>
      </div>

      {/* Right Side: Extra Space (4 Columns) */}
      <div className="col-lg-4">
        <div className="bg-light p-3 rounded shadow-sm">
          <h4>Extra Section</h4>
          <p>
            This area can be used for customer info, promotions, or analytics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default POSPage;
