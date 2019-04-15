import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },

  isSmallDevice: width < 375,
};

export const rectangle14 = {
  width: 72.3,
  height: 0.8,
  borderRadius: 1,
  backgroundColor: "#393939"
};
