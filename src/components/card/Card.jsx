import React from 'react';
import './Card.scss'


export default function KCard({children,title,footer,shadow ='always',...props}) {
  
  return(
    <div className={'k-card-' + shadow } {...props}>
       {title && <div className='k-card-header'>{title}</div>}
      <div className='k-card-body'>{children}</div>
      {footer && <div className='k-card-footer'>{footer}</div>}
    </div>
  )
}