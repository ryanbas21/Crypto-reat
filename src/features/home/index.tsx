import * as React from 'react';
import { connect } from 'react-redux';
import { RootState, Dispatch } from '../../globals';

interface HomeProps {}
interface HomeState {}

const mapStateToProps = (state: RootState) => {};
const mapDispatchToProps = (dispatch: Dispatch) => {};

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        <div> Home Component </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
