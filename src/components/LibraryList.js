import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import { Spinner } from "./common";

class LibraryList extends Component {
  state = { dataSource: false };

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  renderRow(library) {
    return <ListItem key={library.id} library={library} />;
  }

  render() {
    if (this.props.libraries)
      return (
        <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
      );
    return <Spinner />;
  }
}

function mapStateToProps(state) {
  return {
    libraries: state.libraries
  };
}

export default connect(mapStateToProps)(LibraryList);
