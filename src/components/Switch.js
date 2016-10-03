/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Text/Text.js
 */
import React from 'react';
import styleSheetPropType from '../propTypes/StyleSheetPropType';
import TextStylePropTypes from '../propTypes/TextStylePropTypes';
import NativeMethodsMixin from '../mixins/NativeMethodsMixin';
import View from './View';
const stylePropType = styleSheetPropType(TextStylePropTypes);

const Text = React.createClass({
  propTypes: {
    ...View.propTypes,
    tintColor: React.PropTypes.string,
    thumbTintColor: React.PropTypes.string,
    onTintColor: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onValueChange: React.PropTypes.func,
    suppressHighlighting: React.PropTypes.bool,
    style: stylePropType,
    testID: React.PropTypes.string,
    value: React.PropTypes.bool,
  },
  mixins: [NativeMethodsMixin],

  render() {
    return null;
  },
});

module.exports = Switch;
