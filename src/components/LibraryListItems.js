import React from "react";
import ListItem from "./ListItem";

class MultiSelectList extends React.PureComponent {
  state = { selected: null };

  _keyExtractor = (item, index) => item.id;

  _onPressItem = id => {
    // updater functions are preferred for transactional updates
    this.setState({ selected: id });
  };

  _renderItem = ({ item }) => (
    <ListItem id={item.id} onPressItem={this._onPressItem} title={item.title} />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
