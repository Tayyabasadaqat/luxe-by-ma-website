import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);


  // =========================
  // CHECK ADMIN LOGIN
  // =========================

  useEffect(() => {

    const adminLoggedIn =
      sessionStorage.getItem("adminLoggedIn");

    if (adminLoggedIn !== "true") {
      navigate("/admin-login");
    }

  }, [navigate]);


  // =========================
  // LOAD ADMIN DATA
  // =========================

  useEffect(() => {

    const adminLoggedIn =
      sessionStorage.getItem("adminLoggedIn");

    if (adminLoggedIn !== "true") {
      return;
    }

    loadData();

  }, []);


  const loadData = () => {

    // ORDERS

    axios
      .get("http://localhost:5000/api/admin/orders")
      .then((res) => {

        setOrders(res.data);

      })
      .catch((err) => {

        console.log("Orders Error:", err);

      });


    // USERS

    axios
      .get("http://localhost:5000/api/admin/users")
      .then((res) => {

        setUsers(res.data);

      })
      .catch((err) => {

        console.log("Users Error:", err);

      });


    // CONTACT MESSAGES

    axios
      .get("http://localhost:5000/api/admin/messages")
      .then((res) => {

        setMessages(res.data);

      })
      .catch((err) => {

        console.log("Messages Error:", err);

      });

  };


  // =========================
  // UPDATE ORDER STATUS
  // =========================

  const updateStatus = (id, status) => {

    axios
      .put(
        `http://localhost:5000/api/admin/orders/${id}/status`,
        {
          status: status
        }
      )
      .then(() => {

        setOrders((previousOrders) =>

          previousOrders.map((order) =>

            order.id === id
              ? {
                  ...order,
                  status: status
                }
              : order

          )

        );

      })
      .catch((err) => {

        console.log("Status Update Error:", err);

      });

  };


  // =========================
  // ADMIN LOGOUT
  // =========================

  const handleLogout = () => {

    sessionStorage.removeItem("adminLoggedIn");

    navigate("/admin-login");

  };


  // =========================
  // TOTAL SALES
  // =========================

  const totalSales = orders.reduce(
    (total, order) =>
      total + Number(order.total || 0),
    0
  );


  return (
    <MainLayout>

      {/* =========================
          HEADER
      ========================= */}

      <section className="bg-black text-white px-6 md:px-8 py-14 md:py-16">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
                Luxe by M.A
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold mt-3">
                Admin Dashboard
              </h1>

              <p className="text-gray-400 mt-4">
                Manage your store, customers and orders.
              </p>

            </div>


            <button
              onClick={handleLogout}
              className="bg-white text-black px-7 py-3 rounded-full hover:bg-[#B08D57] hover:text-white transition w-fit"
            >
              Admin Logout
            </button>

          </div>

        </div>

      </section>


      {/* =========================
          DASHBOARD
      ========================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">


        {/* =========================
            STATISTICS
        ========================= */}

        <div className="grid md:grid-cols-3 gap-6 mb-12">


          {/* ORDERS */}

          <div className="bg-gray-50 rounded-3xl p-8">

            <p className="text-gray-500">
              Total Orders
            </p>

            <h2 className="text-4xl font-semibold mt-3">
              {orders.length}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              All customer orders
            </p>

          </div>


          {/* USERS */}

          <div className="bg-gray-50 rounded-3xl p-8">

            <p className="text-gray-500">
              Customers
            </p>

            <h2 className="text-4xl font-semibold mt-3">
              {users.length}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Registered customers
            </p>

          </div>


          {/* SALES */}

          <div className="bg-gray-50 rounded-3xl p-8">

            <p className="text-gray-500">
              Total Sales
            </p>

            <h2 className="text-4xl font-semibold mt-3">
              PKR {totalSales.toLocaleString()}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Total order value
            </p>

          </div>

        </div>


        {/* =========================
            ORDERS
        ========================= */}

        <div className="bg-white border rounded-3xl p-6 md:p-8 mb-12">

          <h2 className="text-2xl font-semibold mb-8">
            Recent Orders
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[800px]">

              <thead>

                <tr className="border-b text-left">

                  <th className="py-4">
                    Order
                  </th>

                  <th className="py-4">
                    Customer
                  </th>

                  <th className="py-4">
                    Total
                  </th>

                  <th className="py-4">
                    Payment
                  </th>

                  <th className="py-4">
                    Status
                  </th>

                </tr>

              </thead>


              <tbody>

                {orders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-b last:border-0"
                  >

                    {/* ORDER NUMBER */}

                    <td className="py-5 font-semibold">

                      LX-{order.id}

                    </td>


                    {/* CUSTOMER */}

                    <td className="py-5">

                      <p className="font-medium">
                        {order.full_name || "Customer"}
                      </p>

                      <p className="text-sm text-gray-500">
                        {order.email || "No email"}
                      </p>

                    </td>


                    {/* TOTAL */}

                    <td className="py-5">

                      PKR{" "}

                      {Number(
                        order.total || 0
                      ).toLocaleString()}

                    </td>


                    {/* PAYMENT */}

                    <td className="py-5">

                      {order.payment_method || "Cash on Delivery"}

                    </td>


                    {/* STATUS */}

                    <td className="py-5">

                      <select
                        value={
                          order.status || "Pending"
                        }
                        onChange={(e) =>
                          updateStatus(
                            order.id,
                            e.target.value
                          )
                        }
                        className="border border-gray-300 rounded-full px-4 py-2 bg-white outline-none"
                      >

                        <option value="Pending">
                          Pending
                        </option>

                        <option value="Processing">
                          Processing
                        </option>

                        <option value="Shipped">
                          Shipped
                        </option>

                        <option value="Delivered">
                          Delivered
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>

                      </select>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>


            {orders.length === 0 && (

              <p className="text-center text-gray-500 py-10">
                No orders yet.
              </p>

            )}

          </div>

        </div>


        {/* =========================
            CUSTOMERS
        ========================= */}

        <div className="bg-white border rounded-3xl p-6 md:p-8 mb-12">

          <h2 className="text-2xl font-semibold mb-8">
            Customers
          </h2>

          <div className="space-y-4">

            {users.map((user) => (

              <div
                key={user.id}
                className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 bg-gray-50 rounded-2xl px-6 py-5"
              >

                <div>

                  <p className="font-semibold">
                    {user.full_name || "Customer"}
                  </p>

                  <p className="text-gray-500">
                    {user.email}
                  </p>

                </div>

                <span className="text-sm text-gray-400">
                  User #{user.id}
                </span>

              </div>

            ))}


            {users.length === 0 && (

              <p className="text-center text-gray-500 py-8">
                No customers found.
              </p>

            )}

          </div>

        </div>


        {/* =========================
            CONTACT MESSAGES
        ========================= */}

        <div className="bg-white border rounded-3xl p-6 md:p-8">

          <h2 className="text-2xl font-semibold mb-8">
            Contact Messages
          </h2>

          <div className="space-y-5">

            {messages.map((message) => (

              <div
                key={message.id}
                className="bg-gray-50 rounded-2xl p-6"
              >

                <div className="flex flex-col md:flex-row md:justify-between gap-2">

                  <h3 className="font-semibold">
                    {message.subject || "Contact Message"}
                  </h3>

                  <span className="text-sm text-gray-400">
                    #{message.id}
                  </span>

                </div>


                <p className="text-gray-500 mt-2">

                  {message.full_name || "Guest"}

                  {" — "}

                  {message.email || "No email"}

                </p>


                <p className="mt-4 leading-7">
                  {message.message}
                </p>

              </div>

            ))}


            {messages.length === 0 && (

              <p className="text-center text-gray-500 py-8">
                No contact messages.
              </p>

            )}

          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default Admin;