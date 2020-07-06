# Table

Existem duas maneiras de usar tabelas no Blackflag:
## Criando a marcação com as tags do componente
```jsx
<Table>
	<Table.head>
		<Table.r>
			<Table.h>
				ID
			</Table.h>
			<Table.h>
				Name
			</Table.h>
		</Table.r>
	</Table.head>
	<Table.body>
		<Table.r>
			<Table.d>
				ID content
			</Table.d>
			<Table.d>
				Name content
			</Table.d>
		</Table.r>
	</Table.body>
</Table>
```
## Passando um objeto
```jsx
<Table>
	<Table.head data={
		[
			{ children:[
				{children:'ID'},
				{children:'Name'}
			]}
		]
	} />

	<Table.body data={
		[
			{ children:[
				{children:'ID content'},
				{children:'Name content'}
			]}
		]
	} />
</Table>
```
**Sendo que em children é possível passar um componente também:**
```jsx
<Table>
	<Table.body data={
		[
			{ children:[
				{children:'Name content'},
				{children:<Button className="circle"><Icon name="edit" /></Button>}
			]}
		]
	} />
</Table>
```
**E é possível adicionar className nos elementos da tabela**
```jsx
<Table>
	<Table.body data={
		[
			{ children:[
				{children:'Name content', className:'bg-doc'},
				{children:<Button className="circle"><Icon name="edit" /></Button>, className:'flex-center'}
			]}
		]
	} />
</Table>
```
