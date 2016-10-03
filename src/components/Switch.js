import React from 'react';
import styleSheetPropType from '../propTypes/StyleSheetPropType';
import ViewStylePropTypes from '../propTypes/ViewStylePropTypes';
import NativeMethodsMixin from '../mixins/NativeMethodsMixin';
import View from './View';
const stylePropType = styleSheetPropType(ViewStylePropTypes);

const { PropTypes } = React;

const Switch = React.createClass({
  propTypes: {
    ...View.propTypes,
    tintColor: PropTypes.string,
    thumbTintColor: PropTypes.string,
    onTintColor: PropTypes.string,
    disabled: PropTypes.bool,
    onValueChange: PropTypes.func,
    suppressHighlighting: PropTypes.bool,
    style: stylePropType,
    testID: PropTypes.string,
    value: PropTypes.bool,
  },
  mixins: [NativeMethodsMixin],

  render() {
    return null;
  },
});

module.exports = Switch;
