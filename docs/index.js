import about from '../README.md'

import button from '../src/controls/Button/README.md'
import field from '../src/controls/Field/README.md'

import container from '../src/layout/Container/README.md'
import grid from '../src/layout/Grid/README.md'
import page from '../src/layout/Page/README.md'
import table from '../src/layout/Table/README.md'

import icon from '../src/media/Icon/README.md'
import image from '../src/media/Image/README.md'

import modal from '../src/modules/Modal/README.md'
import tabs from '../src/modules/Tabs/README.md'

import jsUtils from '../src/utils/js/README.md'
import cssUtils from '../src/utils/css/README.md'

import scss from '../src/scss/README.md'

export default [
	{label:'About', path:'/', data:about},
	{label:'SCSS', path:'/scss', data:scss},
	{label:'Components', menu:[
		{label:'Button', path:'/components/controls/button', data:button},
		{label:'Field', path:'/components/controls/field', data:field},
		{divider:true},
		{label:'Container', path:'/components/layout/container', data:container},
		{label:'Grid', path:'/components/layout/grid', data:grid},
		{label:'Page', path:'/components/layout/page', data:page},
		{label:'Table', path:'/components/layout/table', data:table},
		{divider:true},
		{label:'Icon', path:'/components/media/icon', data:icon},
		{label:'Image', path:'/components/media/image', data:image},
		{divider:true},
		{label:'Modal', path:'/components/modules/modal', data:modal},
		{label:'Tabs', path:'/components/modules/tabs', data:tabs},

	]},
	{label:'Utilities', menu: [
	{label:'CSS', path:'/css-utils', data:cssUtils},
	{label:'JS', path:'/js-utils', data:jsUtils},
	]},
]
