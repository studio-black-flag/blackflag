import React from 'react'

const Page = ({children, className, hide, name, header, aside, footer, ...props}) => {
  if (hide) return null

  let c = (
    'Page'+
    (className?' '+className:'') +
    (name?' page-'+name:'') +
    (header?' with-header':'') +
    (aside?' with-aside':'') +
    (footer?' with-footer':'')
  )

  return (
    <div className={c} {...props}>
      {aside &&
        <aside className="page-aside">{aside}</aside>
      }
      {header &&
        <header className="page-header">{header}</header>
      }
      <main className="page-main">
        {children}
      </main>
      {footer &&
        <footer className="page-footer">{footer}</footer>
      }
    </div>
  );
};

export { Page };
