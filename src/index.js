import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

const KEY = "AIzaSyAWA8-qnh0PbGHPTpkHsklZrQGCFe83QL0";
//Create a component which produces some HTML

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo : null
    };

    this.videoSearch('Master of puppets Rakshit');
}
    videoSearch(term) {
      YTSearch( {key : KEY, term : term}, (videos) => {
          this.setState({
            videos : videos,
            selectedVideo : videos[0]
          });
        });
    }

  render() {
      return (
        <div>
      <SearchBar onSearchTermChange = {(term) => (this.videoSearch(term))} />
      <VideoDetail video = {this.state.selectedVideo}/>
      <VideoList
        videos = {this.state.videos}
        onVideoSelect = { (selectedVideo) => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}

//Take this component's HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
