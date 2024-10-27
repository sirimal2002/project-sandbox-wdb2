// import { Button } from "@/components/ui/button";
import CardEmpty from "../assets/images/empty_cart.png";
import Button, { ButtonCustom } from "../Components/UI/Button.jsx";
import ProductCard from "../Components/UI/ProductCard";
import Delete from "../assets/delete.svg";
import Arrow from "../assets/arrow_down.svg";

const mockupProduct = [
  {
    id: "dBt7jOQ9qnKvs8aWrxb5",
    name: "Abstratct Printed Scarf",
    skuCode: "A09004",
    permalink: "accessories-abstratct-printed-scarf",
    description: "Soft fabric, vibrant prints, versatile styling options.",
    price: 1990,
    promotionalPrice: 1990,
    categories: ["all-ladies", "ladies-accessories"],
    collection: "",
    ratings: 4.1,
    imageUrls: [
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FtrWAP3Q0eBJTUjhmP683-Gemini%20Generated%20(8).jpeg?alt=media&token=cf7b47de-a656-4608-98a7-96a6b0cc7a2c",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FgoquKCU3fvbDahQPM3Zw-Gemini%20Generated%20Image%20(5).jpeg?alt=media&token=04c0b4fb-e504-4eb5-bc58-b8f9378cf038",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FCDm0y5YKJNIYhEEqqrQ4-Gemini%20Generated%20Image%20(4).jpeg?alt=media&token=ae33d771-6728-410a-8477-076edb15d8eb",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2Fflx7yN8mj5Pc0LumhBzV-Gemini%20(1).jpeg?alt=media&token=c88231a0-346c-46fe-8eb0-52e61f0e15d1",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FWcplN7199exEqvwtmBjv-Gemini%20Generated%20Image%20(6).jpeg?alt=media&token=6f070a53-587a-4c9e-a212-9319074274c7",
    ],
  },
  {
    id: "6FYslqo6hFuvdIpffL9t",
    name: "Athletic Mesh Slip-On Sneakers",
    skuCode: "S09001",
    permalink: "shoes-athletic-mesh-slip-on-sneakers",
    description:
      "Breathable mesh, elasticized fit, perfect for workouts or casual wear.",
    price: 990,
    promotionalPrice: 990,
    categories: ["all-ladies", "ladies-shoes"],
    collection: "",
    ratings: 3.4,
    imageUrls: [
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F6FYslqo6hFuvdIpffL9t%2F_images%2F3mbrln243CBzwKICFivJ-Gemini%20Generated%20Image%20(15).jpeg?alt=media&token=bc6c2db4-b5b6-4f4b-994a-a20a5d184565",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F6FYslqo6hFuvdIpffL9t%2F_images%2Fqcsy2kpwoi1TgVjYEprr-Gemini%20Generated%20(19).jpeg?alt=media&token=8593f0f9-7e74-4cc0-a9e3-4d88e2178afd",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F6FYslqo6hFuvdIpffL9t%2F_images%2FSs193BUsh8qGB3xMIDdn-Gemini%20Generated%20(20).jpeg?alt=media&token=891c9a17-61fc-426b-9bc4-ae4473cd587b",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F6FYslqo6hFuvdIpffL9t%2F_images%2FiaIRhc8IROJSXMpPt0xL-Gemini%20Generated%20(1).jpeg?alt=media&token=45aa2ad1-8a8a-4c4d-8006-6ab58b58ac15",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F6FYslqo6hFuvdIpffL9t%2F_images%2FyWlHAWr26F68tathEghQ-Gemini%20Generated%20(21).jpeg?alt=media&token=dd6361bf-757c-41a8-be38-cef510347ee2",
    ],
  },
  {
    id: "1zhvksJ5VCf7s90bgypG",
    name: "Backpacks",
    skuCode: "A04005",
    permalink: "men-accessories-backpacks",
    description:
      "A compact and versatile backpack, perfect for everyday use or carrying light essentials. Daypacks typically range from 15 to 25 liters in capacity. ",
    price: 1490,
    promotionalPrice: 1490,
    categories: ["all-men", "men-accessories"],
    collection: "",
    ratings: 1.5,
    imageUrls: [
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F1zhvksJ5VCf7s90bgypG%2F_images%2FTXqLuweN9DMwWgwrxzUF-Gemini_Generated_Image%20(56).jpeg?alt=media&token=c5edc110-5752-4eda-9305-8a1b75f676b8",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F1zhvksJ5VCf7s90bgypG%2F_images%2FLgG3AbAvCeCMfAxaDJM6-Gemini_Generated_Image%20(54).jpeg?alt=media&token=7ef08268-032b-4971-9545-dc31fa3d48eb",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F1zhvksJ5VCf7s90bgypG%2F_images%2FFTIh8V64wMczYideLd7L-Gemini_Generated_Image%20(55).jpeg?alt=media&token=fcc924bd-d51c-4121-a0a4-0bc2bec28906",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F1zhvksJ5VCf7s90bgypG%2F_images%2FwJDBw7EjrPSl6FSgC34Q-Gemini_Generated_Image%20(57).jpeg?alt=media&token=5eb99635-5056-49b9-b0f4-b1c77efd4d5e",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2F1zhvksJ5VCf7s90bgypG%2F_images%2FErLe4UIlq6jWPjosdmU8-Gemini_Generated_Image%20(53).jpeg?alt=media&token=d14a06e7-7693-4464-a069-4bb6fcf0532e",
    ],
  },
  {
    id: "qK3cDSs3ndfVfqfnflOO",
    name: "Chelsea Boots",
    skuCode: "C02005",
    permalink: "shoes-chelsea-boots",
    description:
      "An elegant and practical boot style with elasticated side panels for easy on and off.  Suitable for colder weather and can be dressed up or down. ",
    price: 6900,
    promotionalPrice: 3450,
    categories: ["all-men", "men-shoes"],
    collection: "price-down",
    ratings: 3.8,
    imageUrls: [
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FqK3cDSs3ndfVfqfnflOO%2F_images%2FpbSN3PWcvDqDx8yTyWzu-Gemini_Generated_Image%20(3).jpeg?alt=media&token=a71aa635-e846-4432-bbcd-a429ad23d2dd",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FqK3cDSs3ndfVfqfnflOO%2F_images%2FLXd765wQxUzNoPN7aVOU-Gemini_Generated_Image%20(20).jpeg?alt=media&token=0d16dd67-a407-463c-acec-e6ea691f1980",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FqK3cDSs3ndfVfqfnflOO%2F_images%2FVmISVmwYX35Iti6oFTyc-Gemini_Generated_Image%20(18).jpeg?alt=media&token=9e5ed0d6-8ed4-4742-8d9d-606809c0a09d",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FqK3cDSs3ndfVfqfnflOO%2F_images%2FrjxafTdCJpPXTC98cotD-Gemini_Generated_Image%20(19).jpeg?alt=media&token=d7a7fd15-6dc3-4b5d-a85f-0f9d9398a3f8",
      "https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FqK3cDSs3ndfVfqfnflOO%2F_images%2F9ZpycISHflUpXtotm6wr-Gemini_Generated_Image%20(21).jpeg?alt=media&token=41ab6149-45d7-409d-af3c-3d9a3b60682e",
    ],
  },
];

const VariantSection = ({ children, isEmpty }) => {
  return (
    <div
      className={`flex flex-col xxl:w-[944px] xl:w-[712px]  md:w-2/3  bg-white ${
        isEmpty ? "xxl:h-[838px] xl:h-[725px]" : "h-full space-y-6"
      }`}
    >
      <p className="text-h6Bold mt-6 ml-6 mb-6 w-fit">Items</p>
      {children}
    </div>
  );
};

function CartEmpty() {
  return (
    <>
      {/* item cart empty part */}
      <div className="flex flex-col justify-center items-center text-center space-y-6">
        <div>
          <img
            src={CardEmpty}
            alt="Empty Cart"
            className="mx-auto w-[403px] h-[403px]"
          />
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <h1 className="text-h4Bold ">Your cart is empty</h1>
          <p className="text-subHeading ">
            Looks like you have not added anything to your cart.
            <br />
            Go ahead & explore top categories.
          </p>
        </div>
        <div>
          <Button text="Continue shopping"></Button>
        </div>
      </div>
    </>
  );
}

function CartSummary() {
  return (
    <div className="xxl:w-[616px] xxl:h-[464px] xl:w-[440px] xl:h-[464px] bg-white w-full md:w-1/3">
      <div className="flex flex-col mx-6 my-6 space-y-10">
        {/* detail */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex justify-between h-[44px]">
            <span className="text-h6Bold">Summary</span>
            <span className="text-subHeading  text-black-700">0 items</span>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex justify-between">
              <span className="text-bodyText text-black-500">No item</span>
              <span className="text-bodyText  text-black-500">0.00</span>
            </div>
            <div className="flex flex-col justify-center border-t border-t-black-300 border-b border-b-black-300 h-[104px]">
              <div className="flex flex-col h-[56px] justify-between">
                <div className="flex justify-between ">
                  <span className="text-bodyText text-black-500">Subtotal</span>
                  <span className="text-bodyText  text-black-500">0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-bodyText text-black-500">
                    Shipping fee
                  </span>
                  <span className="text-bodyText  text-black-500">0.00</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-bodyText text-black-500">Total</span>
              <span className="text-bodyText  text-black-500">0.00</span>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="flex flex-col h-[124px] justify-between">
          <Button text="Check out"></Button>
          <ButtonCustom text="Continue shopping"></ButtonCustom>
        </div>
      </div>
    </div>
  );
}

// function CartItem({ name, image, color, size, quantity, price }) {
//   return (
//     <div className="flex items-center space-x-4 py-6 ">
//       <img src={image} alt={name} className="w-[162px] h-[162px] " />
//       <div className="flex flex-col justify-between h-[162px] w-full">
//         <div className="flex justify-between items-start mb-10  md:flex-row md:items-center">
//           <h3 className="text-h6Bold">{name}</h3>
//           <button className="text-gray-400 hover:text-gray-600">
//             <img src={Delete} alt="Delete" className="w-[40px] h-[40px]" />
//           </button>
//         </div>
//         <div className="space-y-4 md:w-1/2 md:space-y-0 md:flex md:items-center md:justify-between">
//           <div className="md:w-1/3">
//             <p className="text-sm text-gray-500 mb-1">Color</p>
//             <SelectBox value={color} />
//           </div>
//           <div className="flex space-x-4 md:w-2/3 md:justify-end">
//             <div className="flex-1 md:w-1/3">
//               <p className="text-sm text-gray-500 mb-1">Size</p>
//               <SelectBox value={size} />
//             </div>
//             <div className="flex-1 md:w-1/3">
//               <p className="text-sm text-gray-500 mb-1">Qty.</p>
//               <SelectBox value={quantity.toString()} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SelectBox({ value }) {
//   return (
//     <div className="relative">
//       <select className="appearance-none border w-[102px] h-[54px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8">
//         <option>{value}</option>
//       </select>
//       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//         <img src={Arrow} className="h-4 w-4" />
//       </div>
//     </div>
//   );
// }

function SelectBox({ type, name, items }) {
  return (
    <div className="relative">
      <select
        id={`${type}-${name}`}
        // defaultValue={defaultColor}
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <img src={Arrow} className="h-4 w-4" />
      </div>
    </div>
  );
}

function CartItem({
  image,
  name,
  colors,
  sizes,
  defaultColor,
  defaultSize,
  defaultQuantity,
  price,
}) {
  return (
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center">
      <img
        src={image}
        alt={name}
        width={100}
        height={100}
        className=" mb-4 sm:mb-0 sm:mr-6 w-full sm:w-auto sm:h-32 object-cover"
      />
      <div className="flex-grow space-y-2 w-full">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{name}</h3>
          <button className="text-gray-500 hover:text-red-500 p-1">
            <img src={Delete} alt="Delete" className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 w-full sm:w-auto">
            {/* color */}
            <div className="col-span-3 sm:col-span-1 md:col-span-1">
              <label
                htmlFor={`color-${name}`}
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Color
              </label>
              <SelectBox type="color" name={name} items={colors} />
            </div>
            {/* size */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1">
              <label
                htmlFor={`size-${name}`}
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Size
              </label>
              <SelectBox type="size" name={name} items={sizes} />
            </div>
            {/* qty */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1">
              <label
                htmlFor={`quantity-${name}`}
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Qty.
              </label>
              <SelectBox type="quantity" name={name} items={[1, 2, 3, 4, 5]} />
            </div>
          </div>
          <div className="flex justify-end sm:justify-start items-center">
            <span className="font-semibold text-lg">
              THB {price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SummaryPage() {
  const isEmpty = false;
  return (
    <>
      <div className="bg-black-50 pb-24">
        <div className="container mx-auto  min-h-screen">
          <h1 className="text-h5Bold py-[41px] px-6 text-left">My cart</h1>
          <div className="flex flex-col md:flex-row  gap-8 ">
            <VariantSection>
              {isEmpty ? (
                <CartEmpty />
              ) : (
                <div className="grid grid-cols-1 divide-y px-6">
                  <CartItem
                    image="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FtrWAP3Q0eBJTUjhmP683-Gemini%20Generated%20(8).jpeg?alt=media&token=cf7b47de-a656-4608-98a7-96a6b0cc7a2c"
                    name="Reyon Long Sleeve Shirt"
                    colors={["Blue", "Red", "Green"]}
                    sizes={["S", "M", "L", "XL"]}
                    defaultColor="Blue"
                    defaultSize="M"
                    defaultQuantity={2}
                    price={2000.0}
                  />
                  <CartItem
                    image="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FtrWAP3Q0eBJTUjhmP683-Gemini%20Generated%20(8).jpeg?alt=media&token=cf7b47de-a656-4608-98a7-96a6b0cc7a2c"
                    name="Flexi Move Sneaker"
                    colors={["Trio", "Black", "White"]}
                    sizes={["38", "39", "40", "41", "42"]}
                    defaultColor="Trio"
                    defaultSize="40"
                    defaultQuantity={1}
                    price={17000.0}
                  />
                </div>
              )}
            </VariantSection>

            <CartSummary />
          </div>

          {/* Featured Products */}
          <div className="my-24">
            <p className="text-h5Bold">People also like these</p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-10">
              {mockupProduct.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  image={product.imageUrls[0]}
                  rating={product.ratings}
                  price={product.price}
                  promotionPrice={product.promotionalPrice}
                  isPromotion={product.promotionalPrice < product.price}
                  permalink={product.permalink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
