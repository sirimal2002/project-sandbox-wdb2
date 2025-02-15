/* eslint-disable react/prop-types */
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

function ProductCard({
  name,
  description,
  image,
  rating,
  price,
  permalink,
  promotionPrice,
  isPromotion = false,
}) {
  const percentDiscount = Math.round(((price - promotionPrice) / price) * 100);

  return (
    <div className="flex flex-col relative">
      <Link
        to={`/product/${permalink}`}
        className="mb-4 aspect-[1/1] w-full overflow-hidden"
      >
        <img
          src={image}
          alt={name}
          className=" w-full h-full object-cover hover:scale-105 transition-transform duration-30"
        />
      </Link>
      <Link to={`/product/${permalink}`}>
        <h6 className="text-h6Bold truncate mb-2 hover:underline">{name}</h6>
      </Link>

      <p className="text-bodyText text-black-700 truncate mb-2">
        {description}
      </p>
      <div className="mb-2">
        <Ratings rating={rating} />
      </div>
      <div className="flex justify-end items-center gap-4">
        {isPromotion ? (
          <div className="text-black-700 text-sm font-semibold">
            <del>{price?.toLocaleString()}</del>
          </div>
        ) : null}
        <div
          className={`text-h6Bold ${
            isPromotion ? "text-danger" : "text-black-900"
          }`}
        >
          THB {promotionPrice?.toLocaleString()}
        </div>
      </div>

      {/* discount */}
      {percentDiscount > 0 ? (
        <div className="absolute top-6 right-0 percent-discount">
          - {percentDiscount}%
        </div>
      ) : null}
    </div>
  );
}

export default ProductCard;
