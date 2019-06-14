import React, { Component } from 'react';
import { connect } from 'react-redux'
import {apiCall} from '../../store/actions/index'
import './style.css'

class AppContent extends Component {

    state = {
        dataSet : [],
        currentApiIndex: 1,
        searchDataSet: [],
        searchValue: '',
    }

    onImgError = (setName, movieIndex) => {
        const { dataSet, searchDataSet } = this.state;
        if (setName === 'search') {
          const movie = searchDataSet[movieIndex];
          movie['poster-image'] = 'placeholder_for_missing_posters.png';
          this.setState({
            searchDataSet,
          });
        } else {
          const movie = dataSet[movieIndex];
          movie['poster-image'] = 'placeholder_for_missing_posters.png';
          this.setState({
            dataSet,
          });
        }
      }

      componentDidMount() {
        const { currentApiIndex } = this.state;
        this.props.apiCall(currentApiIndex);
        const that = this;

        const content = document.getElementById("content")
        content.onscroll = function() {scrollFunction()}
          function scrollFunction() {
            if (content.scrollTop > 50 || content.scrollTop > 50) {
              document.getElementById("header").classList.add('gradient-header')
            } else {
              document.getElementById("header").classList.remove('gradient-header')
            }
            const { currentApiIndex } = that.state;
            var winScroll = content.scrollTop || content.scrollTop;
            var height = content.scrollHeight - content.clientHeight;
            var scrolled = (winScroll / height) * 100;
            if (scrolled >= 75 && currentApiIndex < 3) {
              that.setState({
                currentApiIndex: currentApiIndex + 1
              }, () => {
                that.props.apiCall(that.state.currentApiIndex);
              });
            }
          }
      }

      componentWillReceiveProps(nextProps) {
        this.setState({
          dataSet:nextProps.dataSet,
          searchDataSet: nextProps.searchDataSet,
          searchValue: nextProps.searchValue
        })
      }

    render() {
        const {dataSet, searchDataSet, searchValue} = this.state
        return (
            <div className="app__content p-6" id="content">
              {
                searchValue  ?
                searchDataSet.length ?
                searchDataSet.map( (movie,index) => (
                  <div key={index} className="movie-single pb-8">
                    <img src={`public/assets/img/poster/${movie['poster-image']}`} alt={`${movie['poster-image']}`} onError={() => {this.onImgError('search', index)}}/>
                    <p className="text-3xl text-gray-500 pt-2 font-light">{movie.name}</p>
                  </div>
                )):
                <p className="error text-center text-white text-3xl mt-16">Not found. Please try another movie !!!!</p> :
                dataSet && dataSet.length && dataSet.map( (movie,index) => (
                  <div key={index} className="movie-single pb-8">
                    <img src={`public/assets/img/poster/${movie['poster-image']}`} alt={`${movie['poster-image']}`} onError={() => {this.onImgError('full', index)}}/>
                    <p className="text-3xl text-gray-500 pt-2 font-light">{movie.name}</p>
                  </div>
                ))
              }
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      dataSet : state.dataSet,
      searchDataSet: state.searchDataSet,
      searchValue: state.searchValue,
    }
  }

  const mapDispactToProps = dispatch => {
    return {
      apiCall : (index) => dispatch(apiCall(index)),
    }
  }

export default connect(mapStateToProps,mapDispactToProps)(AppContent);