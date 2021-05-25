import { render } from '@testing-library/react';
import React,{useState,setState,useEffect,Component} from 'react'
import SleekCarousel from 'sleek-react-carousel'
import 'sleek-react-carousel/dist/index.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import './Category.css';
import Slider from "react-slick";
import Product from './Product';
import Box from './Component/Box'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const axios = require('axios');
const category_response=[];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

function Category() {

const [count, setCount] = useState([]);
const [id, setId] = useState();

  useEffect(() => {
   get()
},[]);
console.log(count)

function CateoryProduct(id){
    setId(id)

}

function dropdownSelect(e) {
    setId(e.target.value)
}

function get() {
    axios.get('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob')
    .then(res => {
        setCount(res.data.category_list)
        setId(res.data.category_list[0].category_id)
    
    });
}

return (
        <div>
            <div className='category-slide'>
           {count.map(post =>
           {return    <Box getProduct={CateoryProduct} id={post.category_id} name={post.category_name} image={post.category_image}/>
                }
            )}
    
        </div>

        <div><Product id={id}/></div> 
        <div className='w-50 ml-2'>
        <Select
                                            variant="outlined"
                                            autoWidth={true}
                                            name="category"
                                    
                                            onChange={e => dropdownSelect(e)}
                                            displayEmpty
                                    
                                            inputProps={{'aria-label': 'Without label', 'type': 'hidden'}}
                                        >
                                    
                                        {
                                            count.map(value => {
                                               return <MenuItem value={value.category_id}>{value.category_name}</MenuItem>
                                            })
                                        }
                                        </Select>
        </div>
        </div>
    
   
  );


}




export default Category
