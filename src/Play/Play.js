import React, { Component } from 'react';
import './Play.css'
import Video from '../Video/Video';

class Play extends Component {
    state = {
        videoSearch: [],
    }

    //this is not right...need to use API; I have a key...there is a vide on free code camp
    fetchVideo(videoSearch) {
        const search = videoSearch
        const API_URL = 'https://www.youtube.com/results?search_query=' + search + '&page=&utm_source=opensearch'
        fetch(API_URL)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({ items: response.items, error: '' })
            })
            .catch(error => this.setState({ error: error.message }))

    }

    submitFormHandler(event) {
        event.preventDefault();
        this.fetchVideo(this.state.videoSearch);
    }

    inputChangeHandler(event) {
        const videoSearch = event.target.value;
        this.setState({ videoSearch });
    }

    render() {
        return (
            <div className='playSearch'>
                <header className="App-header">
                    <div className='text'>
                        <h1 >Music App</h1>
                        <h2> Play Your Favorite Video </h2>
                    </div>
                </header>
                <form>
                    <input
                        type="text"
                        placeholder="search"
                    />
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
                <Video />
            </div>
        )
    }
}

export default Play