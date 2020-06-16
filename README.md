# BlackFlag Theme
BlackFlag é um tema exclusivo para React JS

## Instalação

```bash
npm i blackflag
```

## Como usar

### Importando o JS

```javascript
import {Button, Field, Grid} from 'blackflag/'
```

### Usando um componente Importando

```jsx
<Button>Label do botão</Button>
```


### Propriedades do componente

```jsx
<Button className="primary">Label do botão primário</Button>
```

### Importando o scss
---

[doc/about.md](doc/about.md)













The sme-theme has over 30 components, but you can only import as many as you need into your page, as follows:
`import { Text, Title, Button, etc } from "sme-theme"`.
The list of available components is below.

After importing a component, use it as follows:
`<Component attribute={value}>{content}</Component>`

Each component has its own characteristics, such as specific attributes and some has no child content.

- Component example with content:
`<Text className="my-text" tag="span">{content}</Text>`

- Component example without content:
`<Image className="my-image" src="logo.svg"/>`

*The components were developed with minimal changes to the html tags and the tags proposed by ReactJS.*

### Importing the SCSS
To import scss into your project, use in your scss:
`@import "../node_modules/sme-theme/src/theme.scss";`

You can import the default theme or create your own in your application. Just follow the steps:
- Check which variables will be modified in: node_modules/sme-theme/src/vatiables.scss
- In the default application scss reset the variables, example:
`$ font-family: Montserrat! default;`
- Immediately after that, import the main theme scss: node_modules/sme-theme/src/theme.scss


## List of components:
Attributes are listed in square brackets: []
### Basics
- **Bg** [className, image, color, overlayerImage, overlayerColor]
- **Breadcrumb** [children, className, tag]
- **Button** [children, to, href, className, target, active, disabled, plugin, ga, loading, type, onClick, behaviour]
- **Card** [children, className]
- **Counter** [step, interval, max, activ, endValue, onComplete]
- **Divider** [children, className]
- **Form** [children, onSubmit, className]
- **Icon** [name, className]
- **Image** [src, className, alt]
- **Input** [id, children, type, mask, options, className, name, imageSrc, imageClass, buttonClass, buttonText, helpText, errorText, focus, after, plugin, disabled]
- **Progress** [className, progress]
- **Slide** [children, className]
- **Slider** [children, className]
- **Spinner** [children, className]
- **Status** [children, className, success, error]
- **Tab** [children, render, className]
- **Tabs** [children, className]
- **Text** [children, className, tag]
- **Title** [children, className, tag]
- **Video** [className, url]

### Layout
- **Cell** [children, size, className]
- **Collapse** [children, className, show]
- **Container** [children, className]
- **Grid** [children, className]
- **Page** [children, name, className, loading, footer, title, header]
- **Table** [children, className]
- **Template** [children, condition]
- **Wrap** [children, className]

### Modules
- **Alert** [children, className, title, type, iconName]
- **Menubar** [children, className, collapse, header]
- **Modal** [children, className]
- **Navbar** [children, className]
- **Pagination** [className, size, page, step]
- **Titlebar** [children, className]   
