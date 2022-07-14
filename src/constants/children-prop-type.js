import PropTypes from 'prop-types';

const CHILDREN_PROP_TYPE = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
]);

export default CHILDREN_PROP_TYPE;
