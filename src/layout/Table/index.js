import React from 'react'

const Table = function({className, children, hide, ...props}){
  if (hide) return null

  let c =
    'Table'+
    (className?' '+className:'')
  return (
    <div className={c} {...props}>
      <table>
        {children}
      </table>
    </div>
  );
};

// THEAD
const head = function({children, data, hide, ...props}) {
  if (hide) return null

  return (
    <thead {...props}>
    {data &&
      data.map(({children, ...row}, rowIndex) => {
        return (
          <tr key={rowIndex} {...row}>
          {
            children.map(({children, ...item}, itemIndex) => {
              return (
                <th key={itemIndex} {...item}>
                  {children}
                </th>
              )
            })
          }
          </tr>
        )
      })
    }
    {children && children}
    </thead>
  );
};

// TBODY
const body = function({children, data, hide, ...props}) {
  if (hide) return null

  return (
    <tbody {...props}>
    {data &&
      data.map(({children, ...row}, rowIndex) => {
        return (
          <tr key={rowIndex} {...row}>
          {
            children.map(({children, ...item}, itemIndex) => {
              return (
                <td key={itemIndex} {...item}>
                  {children}
                </td>
              )
            })
          }
          </tr>
        )
      })
    }
    {children && children}
    </tbody>
  );
};

// TR
const r = function({children, hide, ...props}) {
  if (hide) return null
  return (
    <tr {...props}>{children}</tr>
  );
};

// TH
const h = function({children, hide, ...props}) {
  if (hide) return null
  return (
    <th {...props}>{children}</th>
  );
};

// TD
const d = function({children, hide, ...props}) {
  if (hide) return null
  return (
    <td {...props}>{children}</td>
  );
};

Table.head = head
Table.body = body
Table.r = r
Table.h = h
Table.d = d

export { Table };
