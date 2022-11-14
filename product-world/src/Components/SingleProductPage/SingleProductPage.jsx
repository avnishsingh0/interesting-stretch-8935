import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductsContext } from "../Context/ProductContext";
import AddToCart from "./AddToCart";
import "./SingleProducrPage.css";

const API = "https://nordstrom1.onrender.com/api/prduct";

const SingleProductPage = () => {
  // const [mainImage, setMainImage] = useState(imgs[0]);
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductsContext();
  // console.log(singleProduct[0]);
  //  console.log(getSingleProduct)
  const { id } = useParams();

  // const {
  //   id: alias,
  //   name,
  //   imgs
  // }= singleProduct[0]

  const [data, setData] = useState({});
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`).then((res) => {
      setData(res.data);
    }).catch((err)=>{
      console.log(err)
    })
  }, [id]);
console.log(data)
  return (
    <div>
      <div className="singlePageflex">
        <div>
          {singleProduct[0].imgs.map((curElm, index) => {
            return (
              <figure>
                <img
                  src={curElm}
                  // alt={curElm}
                  className="box-image--style"
                  key={index}
                  // onClick={() => setMainImage(curElm)}
                />
              </figure>
            );
          })}

          <div className="main-screen">
            <img className="imgSide" src={singleProduct[0].imgs[0]} />
          </div>
        </div>
        <div>
          <p className="name">{singleProduct[0].name}</p>
          <p className="company">{singleProduct[0].company}</p>
          <h4 className="price">{singleProduct[0].price}</h4>
          <del>
            <p className="price1">{singleProduct[0].price1} </p>
            <p className="price2">{singleProduct[0].price2}</p>
          </del>
          <h4 className="offer">{singleProduct[0].offer}</h4>
          <p className="description">{singleProduct[0].description}</p>

          {singleProduct[0].stock > 0 && (
            <AddToCart product={singleProduct[0]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
