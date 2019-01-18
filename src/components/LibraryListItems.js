import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { Spinner } from "./common";
import ListItem from "./ListItem";
import { selectLibrary } from "../actions";

class MultiSelectList extends React.PureComponent {
  _renderItem = ({ item }) => {
    let expended = this.props.selectedLibraryId === item.id;
    return (
      <ListItem
        key={item.id}
        selectLibrary={this.props.selectLibrary}
        expended={expended}
        library={item}
      />
    );
  };

  render() {
    if (this.props.libraries)
      return (
        <FlatList data={this.props.libraries} renderItem={this._renderItem} />
      );
    return <Spinner size="large" />;
  }
}

const mapStateToProps = state => {
  console.log("state>>>", state);

  return {
    libraries: state.libraries,
    selectedLibraryId: state.selectedLibraryId
  };
};

export default connect(
  mapStateToProps,
  { selectLibrary }
)(MultiSelectList);
