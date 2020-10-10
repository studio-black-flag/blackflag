# Button
## Marcação
```jsx
<Button>Botão</Button>
```
## Tipos de ações
```jsx
<Button onClick={buttonHandler}>Botão onClick</Button>
<Button href="http://archive.org" target="_blank">Botão href</Button>
<Button to="/contact" link={Link}>Botão react-router-dom</Button>
```
> Para o **botão react-router-dom** funcionar, use o atributo **to** junto com o atributo **link** com o componente **Link** do **react-router-dom**, importando-o da seguinte maneira:
> ```js
> import { Link } from "react-router-dom";
> ```

## GTAG
Como o Google Analitycs é algo muito usado em nossos projetos, para facilitar, adicionamos o atributo **gtag** no componente **Button**, que chama o seguinte comando caso o atributo **gtag** tenha algum valor:
```js
if (window.gtag && gtag) {
  window.gtag('event', gtag)
}
```
Esse código verifica se existe a função do Google Analitycs no projeto (inserimos sempre no public/index.html) e chama o evento com o valor dado em **gtag**. Preferimos dessa maneira ao invés de inserir módulos de terceiros.

```html
<Button gtag="nome_do_evento_a_ser_registrado">Botão</Button>
```

## Comportamentos
### Loading
```jsx
<Button loading={true}>Botão</Button>
<Button loading="Carregando...">Botão</Button>
```
### Disabled
```jsx
<Button disabled={true}>Botão</Button>
```
