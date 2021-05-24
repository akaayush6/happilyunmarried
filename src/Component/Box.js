import React, {Component} from "react";
import './Box.css'



export default class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }


    product() {
        let id = this.props.id
        this.props.getProduct(id)
    }

    render() {
        return (
            <div>
               <div className='card  mr-3 image-bg' style={{backgroundImage: "url(" + `${this.props.image}` + ")"}} onClick={this.product.bind(this)}>
                   <div className='card-body'>
                       <div className='product-name'  >{this.props.name}</div>
                   </div>
               </div>
            </div>
        );
    }

}
