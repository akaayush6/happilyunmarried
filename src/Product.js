import React,{useEffect,useState} from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { StreetviewTwoTone } from '@material-ui/icons';

const axios = require('axios');


function Product(props) {
    const [count, setCount] = useState([]);
    const [view, setView] = useState(3);
    const [id, setId] = useState(props.id);

    useEffect(() => {
        console.log(id,props.id)
      axios.get(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${props.id}`)
  .then(res => {
      setCount(res.data.products)
      // console.log(res.data.category_list)
      // const cat_list = count.map((res.data.category_list))
      console.log(count)
  });
  },[props.id]);
  console.log(count)

  function viewMore(e, length) {
        setView(length)
  }
  
  return (
     <div className="product-desc">
          {
             count.slice(0, view).map(post =>{return(
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-3">
                                <div className="product-image">
                                    <img className='img-fluid' src={post.image_urls.x120}/>
                                </div>
                        </div>
                        {/* <div className="product-info"> */}
                            <div className='col-7'>
                                <div className="row">
                                    <p className='text-left'>{post.name}</p>
                                </div>
                                <div className="row">
                                    <span className=''>({post.weight}{post.weight_unit})</span>
                                </div>
                                <div className="row ">
                                    <span><strong>₹ {post.final_price}</strong><span className='prev-price'>₹{post.price}</span></span>
                                </div>
                                <div className="row" >
                                    {post.is_in_stock?<button className='in-stock'><span className="add-to-cart">ADD TO CART</span></button>:<button className='out-stock'><span className="out-of-stock">OUT OF STOCK</span></button>}
                                </div>
                            </div>
                        {/* </div> */}
                        <div className="col-2">
                            <div className="">
                                {post.rating?<span className='rating d-flex'>{post.rating}<StarIcon></StarIcon></span>:<span></span>}
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            
             )})
         }
         <div className='d-flex flex-row-reverse mr-2' onClick={e => viewMore(e, count.length)}>[+]View more</div>
         
        </div> 
    );
  
  
  }
  
  
  

export default Product
