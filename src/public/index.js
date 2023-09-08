import "./style.css";

// Needed for Hot Module Replacement
if (typeof module.hot !== "undefined") {
  module.hot.accept(); // eslint-disable-line no-undef
}

export const copyCommand = (id) => {
  navigator.clipboard.writeText(id);
};
