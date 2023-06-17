// import React from "react";
// import './collection-preview.styles.scss'  

// const CollectionPreview=({title,items})=>{
//     <div className="collection-preview">
//         <h1 className="title">{title.toUpperCase()}</h1>
//         <div className="preview">
//         {
//             items .map(item=>(
//                <div key={item.id}>{item.name}</div>
//             ))
//         }
//         </div>
//     </div>
// }
// export default CollectionPreview

import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
        .filter((item,idx)=>idx<4) 
        .map(({id,...restItemProps}) => (
          <CollectionItem key={id} {...restItemProps}> </CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
