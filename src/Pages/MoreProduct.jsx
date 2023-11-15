import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProductAsync, statusData } from '../Stores/singleProductSlice';
const MoreProduct = () => {
  const { product, status } = useSelector(state => state?.particularProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  const img = product?.images;
  useEffect(() => {
    //Async Operation Starts ....................................

    dispatch(fetchSingleProductAsync(id));

    //Async Operation Ends.......................................
  }, []);

  if (status === statusData?.LOADING) {
    return <h1>Loading...</h1>;
  }
  if (status === statusData?.ERROR) {
    return <h1>...Something Went Wrong...</h1>;
  }

  // setTimeout(()=>{
  //     window.location.reload();
  // },2000);

  return (
    <>
      <div className="card" style={{ width: '30rem', margin: '0px auto 20px auto', boxShadow: '30px 30px 50px', height: '720px' }}>


        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-touch="true" data-interval="true">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval={1000}>
              <img src={img[0]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item"  data-interval={1000}>
              <img src={img[1]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item"  data-interval={1000}>
              <img src={img[2]} className="d-block w-100" alt="..." />
            </div>
          </div>
          {/* <div id="carouselExampleControlsNoTouching" className="carousel slide" data-touch="false" data-interval="true">
            <div className="carousel-inner">
              {
                img?.map((item, index) => {
                  return (
                    <>
                      <div className="carousel-item active" key={index}>
                        <img src={item} className="d-block w-100" alt="..." />
                      </div>
                    </>
                  )
                })
              }
            </div> */}

            <button className="carousel-control-prev" type="button" data-target="#carouselExampleControlsNoTouching" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControlsNoTouching" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </button>
          </div>


          <div className="card-body">
            <h5 className="card-title">{product?.id}</h5>
            <h5 className="card-title">Price: ${product?.price}</h5>
            <h5 className="card-title">Created At: {product?.creationAt}</h5>
            <h5 className="card-title">Updated At: {product?.updatedAt}</h5>
            <p className="card-text">{product?.description}</p>
          </div>
        </div>
      </>
      )
}

      export default MoreProduct