import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({props, onClickDone}) => (<ol className={styles.list}>
     {props.map((item, index) => (
     <li className={styles.item} key={item.value}>
          <input type="checkbox" className={styles.checkbox} id={`checkbox[${index}]`}/>
          <Item 
              value = {item.value} 
              isDone={item.isDone} 
              index={index} 
              id={item.id}
              onClickDone={onClickDone}
          />
          <button type="button" className={styles.button}>x</button>
     </li>))}
</ol>);

export default ItemList;
