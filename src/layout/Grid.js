import React from 'react'

const Grid = function({children, className, hide, columns, ...props}){
  if (hide) return null

  let c =
    'Grid'+
    (columns?' grid-'+columns:'') +
    (className?' '+className:'')

  return (
    <div className={c} {...props}>{children}</div>
  );
};

const cell = function({children, className, hide, ...props}) {
  if (hide) return null

  let c = 'Cell' + (className? ' '+className:'')
  return (
    <div className={c} {...props}>{children}</div>
  );
};

Grid.cell = cell
export { Grid };
