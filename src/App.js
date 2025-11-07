

import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddInput from './AddInput';
import Contentmain from './Contentmain';
import Search from './Search';
import { useState } from 'react';




function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todolist')))

    const addItem = (item) => {
      const id = items.length ? items[items.length -1].id+1 : 1;
      const addNewItem = {
        id, checked: false, item
      }
      const listItems = [...items, addNewItem];
      setItems(listItems);
      localStorage.setItem('todolist', JSON.stringify(listItems));
    }

  const handleCheck = (id) => {
    const listItems = items.map((item) => (
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
    setItems(listItems)
    localStorage.setItem('todolist', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => (
      item.id !== id
    ))
    setItems(listItems)
    localStorage.setItem('todolist', JSON.stringify(listItems))

  }

  const [newItems, setNewItems] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(newItems)
    setNewItems('')
    
  }



  return (
    <div className="App">
      <Header />
      <Content/>
      <AddInput
        newItems = {newItems}
        setNewItems = {setNewItems}
        handleSubmit = {handleSubmit}
      />
      <Search />
      <Contentmain
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer 
      length = {items<0 ? 0 : items.length}/>

    </div>
  );

}

export default App;
