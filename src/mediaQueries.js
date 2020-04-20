// Responsive Website using flex/Grid(Cover Responsable endpoints for 1440px,768px, 320px).
const breaks = {
  large: '1440px',
  medium: '768px',
  small: '320px'
}

const less = {
  lessThanLarge: `(max-width: ${breaks.large})`,
  lessThanMedium: `(max-width: ${breaks.medium})`,
  lessThanSmall: `(max-width: ${breaks.small})`
}

const great = {
  greaterThanLarge: `(min-width: ${breaks.large})`,
  greaterThanMedium: `(min-width: ${breaks.medium})`,
  greaterThanSmall: `(min-width: ${breaks.small})`
}

const createBetween = (start, stop) =>
  `${great[`greaterThan${start}`]} and ${less[`lessThan${stop}`]}`

const between = {
  betweenSmallMedium: createBetween('Small', 'Medium'),
  betweenMediumLarge: createBetween('Medium', 'Large')
}

export default { ...less, ...great, ...between }
