const colors = {
  branding: {
    lightGray: '#E9EAEB',
    steelGray: '#94969A',
    brick: '#E9EAEB',
    nero: '#252525'
  },
  static: {
    disabledText: '#767676',
    plainwhite: '#fff',
    shadow: '#888'
  },
  components: {
    link: '#0a84ae'
  }
}
const bodyColors = {
  primaryTextColor: '#111111',
  bodyBackgroundColor: colors.branding.brick
}
// TODO :Willa add elevation later

export default {
  ...bodyColors,
  ...colors
}
