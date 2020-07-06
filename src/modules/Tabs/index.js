import React, {useState} from 'react';

const Tab = ({children, className, hide, ...props}) => {
  if (hide) return null

	const {} = props

	let c =
		"Tab" +
		(className?' '+className:'')

	return (
		<a className={c} {...props}>
			{children}
		</a>
	)
};

const Tabs = ({children, className, hide, data, onChange, active, ...props}) => {
  if (hide) return null

	const [current, setCurrent] = useState(active || 0)

	const onTabClick = (index) => {
		setCurrent(index)
		onChange(index)
	}

	let c =
		"Tabs" +
		(className?' '+className:'')

	let total = 0
	return (
		<div className={c} {...props}>
			{data &&
				data.map((item, index) => {
					++total
					return (
						<Tab key={index} className={(index==current ? ' active' : '')} onClick={() => onTabClick(index)}>
							{item.children}
						</Tab>
					)
				})
			}
			{children &&
				React.Children.map(children, (child, i) => {
					let index = total + i
					let tab = React.cloneElement(child, { onClick: () => onTabClick(index), className: (index==current ? ' active' : '')})
					return (
						tab
					)
				})
			}
		</div>
	)
};

Tabs.tab = Tab
export { Tabs };
