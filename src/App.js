import React,{useState} from 'react';
import './App.css';
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";


const appTitle = "To-do App";

const list = [
  {id: 1 ,title: "Test #1" , completed: false},
  {id: 2,title: "Test #2", completed: false},
  {id: 3, title: "Test #3", completed: false}
]



const App = () => {

  const [todoList, setTodoList] = useState(list);

  const addTodo = (item) => {
    setTodoList((oldList)=> {
      const updateList = [...oldList];
      updateList.unshift({title: item, completed: false, id: Math.random().toString() });
      return updateList;
    });
  } 

  const removeTodo = (id) => {
    setTodoList((oldList) => oldList.filter((item) => item.id !== id ));
  } 
  return (
    <div className="ui container center aligned">
      <Section>
        <h1 className="header">{appTitle}</h1>
      </Section>
      

      <Section>
        <Form addForm = {addTodo}/>
      </Section>

      <Section>
        <List remove={removeTodo} list = {todoList}/>
      </Section>
    </div>
  )
} 
export default App;
