export default (propName, { make }) => (props) => (props[propName] ? `${make}: ${props[propName]};` : '');

