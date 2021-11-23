import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import {titleCase} from '../helpers';
import {Navigate} from 'react-router-dom';
export default class ItemCard extends Component {

    constructor() {
        super();
        this.state={
            clicked:false
        };
    }

    handleRenderItem=()=>{
        this.setState({clicked:true})
    }

    render() {
        return (
            <Col>
            {/* come back for single item */}
                {this.state.clicked ? <Navigate to={`/item/${this.props.item.id}`}/>:''}
                <Card style={{ width: '150px', height:'400px', marginBottom:"25px" }}>
                <Card.Img variant="top" style={{height:"100px", objectFit:"contain"}} alt={this.props.item.name+" image"}
                    src={this.props.item.img ?? 'https://res.cloudinary.com/cae67/image/upload/v1629310111/fakebook_shop/no-image_nkau78.png' } />
                <Card.Body>
                    <Card.Title>{titleCase(this.props.item.name) ?? "Generic Item"}</Card.Title>
                    <Card.Text>
                    {this.props.item.description ?? "Sorry No Description"}
                    </Card.Text>
                    <Card.Subtitle className="float-end">${this.props.item.price ?? '?.??'} </Card.Subtitle>
                    <br/>
                    <button style={{backgroundColor:"white", border:'none', color:'blue'}} onClick={()=>this.handleRenderItem()}>See More</button>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
                </Card>
            </Col>
        )
    }
}