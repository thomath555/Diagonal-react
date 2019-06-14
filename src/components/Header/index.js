import React, { Component } from 'react';
import Back from '../../../src/assets/img/Back.png'
import Search from '../../../src/assets/img/search.png'
import { connect } from 'react-redux'
import {searchApi } from '../../store/actions/index'
import './style.css'

class AppHeader extends Component {
    state = {
      searchValue: '',
    }
    __onChangeHandler = (e) => {
      this.props.searchApi(e.target.value);
      this.setState({
        searchValue: e.target.value,
      });
    }
    __onClickHandler = () => {
      this.props.searchApi('');
      this.setState({
        searchValue: '',
      });
    }
    render() {
      const { searchValue } = this.state;
      return (
          <div className="app__header px-6 pb-12 flex items-end" id="header">
              <div className="app__header-back">
                  <img className="w-8 pb-2" onClick={this.__onClickHandler} src={Back} alt="back-btn"/>
              </div>
              <input className="px-8 font-normal text-4xl" type="text" placeholder="Search" value={searchValue} onChange={this.__onChangeHandler}/>
              <div className="app__header-search">
                  <img className="w-8 pb-2" src={Search} alt="search-btn"/>
              </div>
          </div>
      );
    }
}

const mapStateToProps = state => {
    return {
      dataSet : state.dataSet,
      searchValue: state.searchValue
    }
  }

  const mapDispactToProps = dispatch => {
    return {
      searchApi : (term) => dispatch(searchApi(term)),
    }
  }

export default connect(mapStateToProps,mapDispactToProps)(AppHeader);