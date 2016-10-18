/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {
   Component
 } from 'react';
 import {
   ActionSheetIOS,
   ActivityIndicatorIOS,
   AppRegistry,
   ScrollView,
   StyleSheet,
   SwitchIOS,
   Text,
   View
 } from 'react-native';
 import {
   Cell,
   CustomCell,
   Section,
   TableView
 } from 'react-native-tableview-simple';


export default class reactapp extends Component {

  state = {
    text: ''
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.stage}>
        <TableView>
          <Section header="Week 1">
          <Cell onPress={this.showActionSheet} cellStyle="Subtitle" accessory="Checkmark" title="Sunday" detail="1"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Monday" detail="2"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Tuesday" detail="3"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Wednesday" detail="4"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Thursday" detail="5"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Friday" detail="6"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Saturday" detail="7"/>
          </Section>
          <Section header="Week 2">
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Sunday" detail="8"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Monday" detail="9"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Tuesday" detail="10"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Wednesday" detail="11"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Thursday" detail="12"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Friday" detail="13"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Saturday" detail="14"/>
          </Section>
          <Section header="Week 3">
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Sunday" detail="15"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Monday" detail="16"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Tuesday" detail="17"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Wednesday" detail="18"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Thursday" detail="19"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Friday" detail="20"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Saturday" detail="21"/>
          </Section>
          <Section header="Week 4">
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Sunday" detail="22"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Monday" detail="23"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Tuesday" detail="24"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Wednesday" detail="25"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Thursday" detail="26"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Friday" detail="27"/>
          <Cell cellStyle="Subtitle" accessory="Checkmark" title="Saturday" detail="28"/>
          </Section>
        </TableView>
      </ScrollView>
    );
  }

  showActionSheet = () => {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: this.props.url,
      message: 'message to go with the shared url',
      subject: 'a subject to go in the email heading',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    },
    (error) => alert(error),
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({text});
    });
  };

};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

AppRegistry.registerComponent('reactapp', () => reactapp);
