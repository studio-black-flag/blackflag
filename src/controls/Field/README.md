# Field
Fiels são os campos de formulários agrupados num só componente pra facilitar a utilização.
Esse componente gera o seguinte html, onde os três pontinhos são o tipo do campo:
```html
<div class=" Field-...">
	<label class="field-label">Label do Campo</label>
	<input type="...">
</div>
```
## Marcação
Se não definir **type**, o padrão é **text**
```jsx
<Field>Label do Campo de texto</Field>
```
Resultado no HTML:
```html
<div class=" Field-text">
	<label class="field-label">Label do Campo</label>
	<input type="text">
</div>
```
## Atributos
### onChange
```js
const fieldHandler = e => { alert(e.target.value) }
```
```jsx
<Field onChange={fieldHandler}>Nome do Campo</Field>
```
### maxLength
```jsx
<Field maxLength={200}>Nome do Campo</Field>
```

## Types
O tipo do campo de formulário
### Select
```jsx
<Field.select options={[{value:1,label:'Option 1'}, {value:2,label:'Option 2'}]}>Select</Field.select>
```
### File
```jsx
<Field type="file">File</Field>
```
###### Multiple max 5
```jsx
<Field multiple type="file" max={5}>File Multiple</Field>
```
### Textarea
```jsx
<Field type="textarea" rows="6">Textarea</Field>
```
### Switch
```jsx
<Field type="switch">Switch</Field>
```
### Checkbox
```jsx
<Field type="checkbox">Checkbox</Field>
```
### Radio
```jsx
<Field type="radio" name="radio">Radio 1</Field>
<Field type="radio" name="radio">Radio 2</Field>
<Field type="radio" name="radio">Radio 3</Field>
```
