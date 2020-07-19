# Typography

## Headings
```jsx
<h1>Titulo H1</h1>
<h2>Titulo H2</h2>
<h3>Titulo H3</h3>
<h4>Titulo H4</h4>
<h5>Titulo H5</h5>
<h6>Titulo H6</h6>
```
Os títulos ajustam seu tamanho dependendo do *breackpoint*, abaixo a escala dos títulos pra cada *breackpoint*:
```scss
$font-scales: (
  xs: 1.16,
  sm: 1.2,
  md: 1.23,
  lg: 1.26,
  xl: 1.3,
) !default;
```
A ordem de grandeza dos tiítulos é a seguinte.
```scss
$h6-size: $font-size;
$h5-size: $h6-size * $scale;
$h4-size: $h5-size * $scale;
$h3-size: $h4-size * $scale;
$h2-size: $h3-size * $scale;
$h1-size: $h2-size * $scale;
```
\*Lembrando que todas essas variáveis podem ser editadas em cada projeto separado
