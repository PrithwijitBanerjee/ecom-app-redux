import React, { useEffect, useState } from 'react'
import { fetchProductsAsync, statusData } from '../Stores/productSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCart } from '../Stores/cartSlice';
const Home = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(4);
  const sampleProducts = useSelector(state => {
    // console.log('Redux Data:', state?.productInfo?.productsData);
    return state?.productInfo?.productsData
  });
  const loadingInfo = useSelector(state => state?.productInfo?.status);
  useEffect(() => {

    //Async operation..................
    dispatch(fetchProductsAsync());

  }, []);

  if (loadingInfo === statusData?.ERROR) {
    console.log('...Something Went Wrong with API...');
    return <h1>...Something Went Wrong...</h1>;
  }
  if (loadingInfo === statusData?.LOADING) {
    return <h1>Loading....</h1>
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          {
            sampleProducts.slice(0, limit).map((sampleItem, index) => {
              return <>
                <div className='col-10 col-md-3' key={index.toString()}>
                  <div className="card" style={{ width: '18rem', margin: '30px', boxShadow: '30px 30px 50px', height: '550px' }}>
                    <img src={sampleItem?.images[0]} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{sampleItem.title}</h5>
                      <p className="card-text">{sampleItem?.description}</p>
                      <button className='btn btn-success' style={{marginRight:'20px'}} onClick={()=>dispatch(addCart(sampleItem))}>Add to Cart</button>
                      <Link to={`/moreProduct/${sampleItem?.id}`} className="btn btn-primary">View More</Link>
                    </div>
                  </div>
                </div>

              </>

            })
          }
          <div className='container-fluid text-center'>
            <button className='btn btn-outline-primary' style={{margin:'20px',width:'900px'}} onClick={() => setLimit(limit + 4)}>Load More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home