import './App.css'
import CounterScore from './component/CounterScore';
import CounterInc from './component/CounterInc';
import CounterDec from './component/CounterDec';
import TodoList from './component/TodoList';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';
import CourseDrop from './component/CourseDrop';

function App() {
  return (
    <>
      <div>
        <TodoList />
        <CourseForm />
        <CourseList />
        <CourseDrop />
        <CounterScore />
        <CounterInc />
        <CounterDec />
      </div>

    </>
  )
}

export default App
