# Tabs
## Marcação
```jsx
<Tabs>
	<Tabs.tab>
		Tab label
	</Tabs.tab>
</Tabs>
```
---
O onChange do **Tabs** retorna o valor da posicão da **Tabs.tab** clicada.
```jsx
<Tabs onChange={onTabChange} active={currentTab}>
	<Tabs.tab>
		Tab 0
	</Tabs.tab>
	<Tabs.tab>
		Tab 1
	</Tabs.tab>
	<Tabs.tab>
		Tab 2
	</Tabs.tab>
</Tabs>
{currentTab === 0 && <h1>Content 0</h1>}
{currentTab === 1 && <h2>Content 1</h2>}
{currentTab === 2 && <h3>Content 2</h3>}
```
---
Também é possível passar as tabs por meio do atributo *data*
```jsx
<Tabs data ={[
	{children:'Tab 1'},
	{children:'Tab 2'},
	{children:'Tab 3'},
	{children:'Tab 4'},
	{children:<Icon name="edit" />}
]}/>

```
