function setPositionStyle(position) {
  var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-50%';
  var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-50%';
  var transformStyle = "transform: translate(calc(".concat(offsetX, "), calc(").concat(offsetY, "));");
  switch (position) {
    case 'top-left':
      return "top: 0; left: 0; ".concat(transformStyle);
    case 'top-center':
      return "top: 0; left: 50%; ".concat(transformStyle);
    case 'top-right':
      return "top: 0; left: 100%; ".concat(transformStyle);
    case 'left':
      return "top: 50%; left: 0; ".concat(transformStyle);
    case 'right':
      return "top: 50%; left: 100%; ".concat(transformStyle);
    case 'bottom-left':
      return "top: 100%; left: 0; ".concat(transformStyle);
    case 'bottom-center':
      return "top: 100%; left: 50%; ".concat(transformStyle);
    case 'bottom-right':
      return "top: 100%; left: 100%; ".concat(transformStyle);
    default:
      return "top: 0; left: 0; ".concat(transformStyle);
  }
}
function setBubbleStyle(type, position) {
  if (type !== 'bubble') return '';
  switch (position) {
    case 'top-left':
      return 'border-bottom-right-radius: 0;';
    case 'top-right':
      return 'border-bottom-left-radius: 0;';
    case 'bottom-left':
      return 'border-top-right-radius: 0;';
    case 'bottom-right':
      return 'border-top-left-radius: 0;';
    default:
      return '';
  }
}
function getOverCount(text) {
  var overCount = false;
  if (typeof text === 'number') {
    if (text >= 100) {
      overCount = true;
    }
  }
  return overCount;
}
export default {
  setPositionStyle: setPositionStyle,
  setBubbleStyle: setBubbleStyle,
  getOverCount: getOverCount
};