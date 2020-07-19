import React, {useState, useEffect} from 'react';
import { useScrollBoost } from 'react-scrollbooster'

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

  const [viewport, scrollbooster] = useScrollBoost({
    // direction: 'horizontal',
    // friction: 0.2,
    // scrollMode: 'native',
    scrollMode: 'transform', // use CSS 'transform' property
    direction: 'horizontal', // allow only horizontal scrolling
    emulateScroll: true, // scroll on wheel events
    // onClick: (state, event, isTouchDevice) => {
    //   // prevent default link event
    //   const isLink = event.target.nodeName.toLowerCase() === 'link';
    //   if (isLink) {
    //     event.preventDefault();
    //   }
    // }
  });

	const [current, setCurrent] = useState(active || 0)

	const onTabClick = (index) => {
		setCurrent(index)
    if (onChange) {
      onChange(index)
    }
	}

	let c =
		"Tabs" +
		(className?' '+className:'')

	let total = 0
  const children2 = React.Children.toArray(children).filter((child, i) => {
    return typeof child.props.children == 'object';
  });

	return (
		<div className={c} {...props} ref={viewport}>
  		<div>
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
  				children2.map((item, index) => {
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
