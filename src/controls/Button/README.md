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
> Para o **botão react-router-dom**, use o atributo **to** junto com o atributo **link** com o componente **Link** do **react-router-dom** com o valor:
```js
import { Link } from "react-router-dom";
```

## GTAG
Como o Google Analitycs é algo muito usado em nossos projetos, pra facilitar adicionamos o atributo **gtag** nos botões, que chama o seguinte comando, caso o atributo **gtag** tenha algum valor:
```js
if (window.gtag && gtag) {
  window.gtag('event', gtag)
}
```
Esse código verifica se exista a função do Google Analitycs no projeto (inserimos sempre no public/index.html) e chama o evento com o valor dado em **gtag**
```html
<Button gtag="nome_do_evento_a_ser_registrado">Botão</Button>
```

## Cores
```jsx
<Button>Botão</Button><br/>
<Button className="primary">Botão</Button><br/>
<Button className="success">Botão</Button><br/>
<Button className="error">Botão</Button><br/>
<Button className="dark">Botão</Button><br/>
<Button className="light">Botão</Button><br/>
```

## SCSS
