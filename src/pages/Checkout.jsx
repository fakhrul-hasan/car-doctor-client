import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price, _id } = service;
  const {user} = useContext(AuthContext);

  const handleBookService=event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
        customerName: name,
        date,
        email,
        service: _id
    }
    console.log(order);
  }
  return (
    <div>
      <h2 className="text-3xl text-center">Book Service: {title}</h2>
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleBookService}>
              <div className="card-body w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Customer Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Booking Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Due Amount</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={'$'+price}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-2 col-span-2">
                  <input
                    className="btn btn-block bg-orange-600"
                    type="submit"
                    value="Order Confirm"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
