import React from 'react'
import { connect } from 'react-redux';
import CurrentNews from '../components/News/current-news';


class CurrentNewsContainer extends React.Component {
    render(){
        return (
            <CurrentNews {...this.props} />
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        newsData: state.homeReducer.newsData
    }
}


export default connect(mapStateToProps, {})(CurrentNewsContainer)