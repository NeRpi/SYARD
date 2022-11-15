import React, { Component } from "react";
import { useParams } from "react-router-dom"

import axios from "../api/axios";
import { Image, Form } from "react-bootstrap";
import './Manga.css'

const MANGA_ITEM_URL = 'http://localhost:8000/api/manga/'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Manga extends Component {
    state = {
        manga: [],
        genres: []
    };

    componentDidMount() {
        this.getManga();
        this.getGenres();
    }

    getManga() {
        axios.get(MANGA_ITEM_URL + this.props.params.id).then(res => {
            this.setState({ manga: res.data });
        }).catch(err => { console.log(err); });
    }

    getGenres() {
        axios.get('http://localhost:8000/api/manga/genres').then(res => {
            this.setState({ genres: res.data });
        }).catch(err => { console.log(err); });
    }

    render() {
        let genresIdList = [1];
        let genresList = [{ id: 0, genre: '' }];
        if (this.state.manga?.genres !== undefined)
            genresIdList = this.state.manga?.genres;

        if (this.state.genres.length !== 0)
            genresList = this.state.genres;
        else
            genresIdList = [1];

        return (
            <Form>
                <div>
                    <h1>{this.state.manga.name}</h1>
                    <div className="manga-card">
                        <Image src={require("./1.jpg")} align="left" />
                        <div className="manga-information">
                            <div className="genres">
                                <h3>Жанры:  </h3>
                                <div className="genres-list">
                                    {genresIdList.map(genreId => <div className="genre">{genresList[genreId - 1].genre} {" "}</div>)}
                                </div>
                            </div>
                            <h3>Описание</h3>
                            <div className="manga-description">{this.state.manga.description}</div>
                        </div>
                    </div>
                </div>
            </Form>
        );
    }
};

export default withParams(Manga);