import './style.css';

// Log message to console
logMessage('A very warm welcome to Expack!')
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}

const copyCommand = id => {
  navigator.clipboard.writeText(id);
}
