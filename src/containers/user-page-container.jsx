import React from "react";
import { connect } from "react-redux";
import UserPage from "../components/UserPage/user-page";

class UserPageContainer extends React.Component {
    render() {
        return <UserPage {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.checkOutReducer.order
    };
};

export default connect(mapStateToProps, {})(UserPageContainer);
