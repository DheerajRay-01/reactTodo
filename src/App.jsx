import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/form'
import TodoItems from './components/todoItems'
import { TodoProvider } from './context'

function App() {
  const [todo ,  setTodo] = useState([])

  const addTodo = (todo)=>{
    setTodo( prev => ([{id:Date.now(),...todo},...prev]))
  }
  const updateTodo = (id , todo)=>{
    setTodo(prevtodo => (prevtodo.map((eachTodo)=>(eachTodo.id == id ? todo : eachTodo))))
  }


  const deleteTodo = (id)=>{
    setTodo(prevtodo => prevtodo.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id)=>{
    setTodo(
      (prev) => (
        prev.map((todo)=>(
          todo.id === id ? {...todo, completed:!todo.completed} : todo
        ))
    )
    )
  }



  
return (
  <TodoProvider value={{todo,addTodo,deleteTodo,updateTodo,toggleComplete}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Form/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                        todo.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItems todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
  </TodoProvider>
  )
}

export default App