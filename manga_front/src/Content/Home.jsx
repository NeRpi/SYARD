import React, { Component } from "react";
import axios from 'axios'

import Card from 'react-bootstrap/Card';
import './Home.css'

import { Link } from "react-router-dom";

class Home extends Component {
    state = {
        mangas: []
    };


    componentDidMount() {
        this.getMangas();
    }

    getMangas() {
        axios
            .get('http://localhost:8000/api/manga').then(res => {
                this.setState({ mangas: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="posts-list">
                {this.state.mangas.map(item =>
                    <Card as={Link} to={{ pathname: `/mangas/${item.id}` }}>
                        <Card.Img variant="top" src={require("./1.jpg")} />
                        <Card.Body>
                            <Card.Title>{item.price} р.</Card.Title>
                            <Card.Text>{item.name.slice(0, 40)}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}


export default Home;