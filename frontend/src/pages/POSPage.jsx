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

  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Token is missing");
      return;
    }

    setIsLoading(true);

    try {
      const result = await axios.get("http://159.223.232.167:8000/products", {
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

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="text-end">
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Filter by name"
          />
          <button onClick={() => setArray(products)}>Reset Filter</button>
        </div>
        <DataTable
          title="Products"
          columns={columns}
          data={array}
          pagination
          striped
          highlightOnHover
          selectableRows
        />
        <AddProduct />
      </div>
      {/* <div className="col-lg-8">
        {isLoading ? (
          "Loading"
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.name}
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>${product.price}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => addProductToCart(product)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => RemoveProductToCart(product)}
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div> */}

      <div className="col-lg-6">
        <div style={{ display: "none" }}>
          <ComponentToPrint
            cart={cart}
            totalAmount={totalAmount}
            ref={componentRef}
          />
        </div>
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
              {cart
                ? cart.map((cartProduct, key) => (
                    <tr key={key}>
                      <td>{cartProduct.id}</td>
                      <td>{cartProduct.name}</td>
                      <td>{cartProduct.price}</td>
                      <td>{cartProduct.quantity}</td>
                      <td>{cartProduct.totalAmount}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeProduct(cartProduct)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                : "No Item in Cart"}
            </tbody>
          </table>
          <h2 className="px-2 text-white">Total Amount: ${totalAmount}</h2>
        </div>

        <div className="mt-3">
          {totalAmount !== 0 ? (
            <div>
              <button className="btn btn-primary" onClick={clearCartAndSubmit}>
                Pay Now
              </button>
            </div>
          ) : (
            "Please add a product to the cart"
          )}
        </div>
      </div>
    </div>
  );
}

export default POSPage;
