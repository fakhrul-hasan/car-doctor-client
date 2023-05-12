import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions items-center">
          <p className="text-left text-orange-600">Price: {price}</p>
          <Link to={`/checkout/${_id}`}>
            <FaArrowRight className="text-orange-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
