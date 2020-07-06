# Page
Organiza os elementos principais da página.
- header
- main
- aside
- footer

## Marcação
```jsx
<Page className="bg-doc">
  Conteúdo (main)
</Page>
```
## header, aside e *footer*
```jsx
<Page
	className="bg-doc"
	aside= {<div className="bg-doc">Aside</div>}
	header= {<div className="bg-doc">Header</div>}
	footer= {<div className="bg-doc">Footer</div>}
>
  Main
</Page>
```
