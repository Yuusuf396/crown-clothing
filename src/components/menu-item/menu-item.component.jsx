// import React from 'react'
// import { withRouter } from 'react-router-dom';
 
// import './menu-item.style.scss'

// function MenuItem({title,id,imageUrl,size,linkUrl,match}) {
  
//   return (
//     <div  className={`${size} menu-item`} id={id} onClick={()=>history.push(`${match.url}${linkUrl}`)}>

//       <div className='background-image'  
//       style={{
//         backgroundImage:`url(${imageUrl})`
//     }}/>
//         <div className='content'>
//             <h1 className='title'>{title.toUpperCase()}</h1>
//             <span className='subtitle'>SHOP NOW</span>
//         </div>
//     </div> 
//   )
// }

// export default MenuItem


import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import './menu-item.style.scss';

function MenuItem({ title, id, imageUrl, size, linkUrl,}) {
  const navigate = useNavigate();
  const { url } = useLocation();
  console.log(useLocation)
  const { id: matchId } = useParams();

  return (
    <div
      className={`${size} menu-item`}
      id={id}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
