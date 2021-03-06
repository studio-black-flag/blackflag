# SCSS

## Variables
```scss
// OPACITY
$opacities: (
  overlay:     0.8,
  disabled:    0.2,
  ui:          0.14
);

// FONT
$font-family: 'Montserrat', sans-serif !default;
$font-size: 16px !default;

// CONTAINER
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px
) !default;
$container-padding-x: 2rem!default;

// BREAKPOINTS
$breakpoints: (
  xs: 320px,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
) !default;

// SPACES
$space: 1rem !default;
$spaces:(
  0: 0,
  1:  $space * .25,
  2:  $space * .5,
  3:  $space,
  4:  $space * 1.5,
  5:  $space * 3
)!default;

// GRID
$grid-gap: 10px !default;
$grid-columns: 12 !default;
$grid-rows: 10 !default;

// COLORS
$color-dark:              #333 !default;
$color-light:             #fff !default;
$color-primary:           #5F2EFF !default;
$color-error:             #FF5345 !default;
$color-success:           #0AB253 !default;

$colors: (
  'dark':               $color-dark,
  'light':              $color-light,
  'primary':            $color-primary,
  'error':              $color-error,
  'success':            $color-success
)!default;
```
