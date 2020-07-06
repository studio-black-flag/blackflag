# Grid

Grids servem pra organizar o conteúdo em linhas e colunas.
O grid da Blackflag utiliza a propriedade css `display:grid;`, que permite posicionar livremente uma célula dentro de uma grid.

## Marcação
```jsx
<Grid>
	<Grid.cell className="cell-6 bg-doc">
		Texto
	</Grid.cell>
	<Grid.cell className="cell-6 bg-doc">
		Texto
	</Grid.cell>
</Grid>
```
## Células
> {n} é um número de 1 a 12

> {_breakpoint} é opcional

- cell-{n}{_breakpoint}
- cell-start-{n}{_breakpoint}
- cell-end-{n}{_breakpoint}

Exemplos:
- **cell-6** tem largura de 50% da Grid
- **cell-start-3** inicia a celula na coluna 3
- **cell-end-7** termina a celula na coluna 7
- **cell-4_md** ativa a celula 4 a partir da largura da tela *md*

## Variáveis SCSS
```scss
$grid-gap: 10px !default;
$grid-columns: 12 !default;
$grid-rows: 10 !default;
```
