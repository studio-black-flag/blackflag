# Container

Container servem pra demilitar uma largura máxima para o conteúdo.
## Marcação
```jsx
<Container className="bg-doc">
  Conteúdo
</Container>
```

## Max widths
max-xs, max-sm, max-md, max-lg, max-xl
```jsx
<Container className="bg-doc max-sm">
  Conteúdo
</Container>
```

## Variáveis SCSS
```scss
$container-max-widths: (
  xs: 320px,
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px
) !default;
$container-padding-x: 2rem!default;
```
