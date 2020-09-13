import React from 'react'
import { connect } from 'react-redux';
import AllNews from '../components/News/news';


class NewsContainer extends React.Component {
    render(){
        return (
            <AllNews {...this.props} />
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        newsData: state.homeReducer.newsData
    }
}


export default connect(mapStateToProps, {})(NewsContainer)