import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onClickDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

// import './index.css'

// const TodoItem = props => {
//   const {todoDetails, deleteTodo} = props
//   const {id, title} = todoDetails

//   const onClickDelete = () => {
//     deleteTodo(id)
//   }

//   return (
//     <li className="todo-item">
//       <p className="title">{title}</p>
//       <button type="button" className="delete-btn" onClick={onClickDelete}>
//         Delete
//       </button>
//     </li>
//   )
// }

// export default TodoItem
