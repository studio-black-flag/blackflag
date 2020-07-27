import React, {useState, useEffect, useRef} from 'react';
// import { useScrollBoost } from 'react-scrollbooster'

const Tab = ({children, className, active, hide, ...props}) => {
  if (hide) return null

	let c =
		"Tab" +
		(className?' '+className:'') +
		(active?' active':'')

	return (
		<a className={c} {...props}>
			{children}
		</a>
	)
};

const Tabs = ({children, className, hide, data, onChange, active, ...props}) => {
  if (hide) return null

  const tabs = useRef()
  const inner = useRef()

	const [current, setCurrent] = useState(active || 0)

	const onTabClick = (index) => {
		goToTab(index)
    if (onChange) {
      onChange(index)
    }
	}

  useEffect(() => {
		setCurrent(active)
  }, [active])

  useEffect(() => {
		goToTab(current)
  }, [current])

  const goToTab = (index) => {
    let tab = inner.current.children[index]
		setCurrent(index)
    tabs.current.scrollTo({
      left: tab.offsetLeft - (tabs.current.offsetWidth/2) + (tab.offsetWidth / 2),
      behavior: 'smooth',
    });
  }

	let c =
		"Tabs" +
		(className?' '+className:'')

	let total = 0
  const childrenArray = React.Children.toArray(children)

	return (
		<div className={c} {...props} ref={tabs}>
  		<div ref={inner}>
  			{data &&
  				data.map(({children, className, ...item}, index) => {
  					++total
  					return (
  						<Tab key={index} {...item} className={(className?className:'') + (index==current ? ' active' : '')} onClick={() => onTabClick(index)}>
  							{children}
  						</Tab>
  					)
  				})
  			}
  			{children &&
  				childrenArray.map((item, index) => {
            let tab = React.cloneElement(item, { onClick: () => onTabClick(index), active: (index==current ? true : false)})
            return (
              tab
            )
  				})
  			}
  		</div>
		</div>
	)
};

Tabs.tab = Tab
export { Tabs };
