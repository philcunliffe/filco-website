import * as React from 'react';
import { navigate } from 'gatsby';
import slugify from '@sindresorhus/slugify';

const Highlight = ({ title, coverUrl }) => {
  return (
    <div className='highlight-card' onClick={() => navigate(`/garden/${slugify(title)}`)}>
      <img src={coverUrl} />
      <h3>{title}</h3>
    </div>
  )
}

export default Highlight;
