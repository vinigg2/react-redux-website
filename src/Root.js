import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { replace } from 'react-router-redux'
import { Flex } from 'rebass';


import '@scss/app.scss'

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <React.Fragment>
        <div id="main">
          <Flex
            className="container"
            height="100%"
            padding="30px 0"
          >
            {this.props.children}
          </Flex>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ router, auth }) => ({
  router,
  user: auth.user
});

export default withRouter(connect(mapStateToProps)(Root))
