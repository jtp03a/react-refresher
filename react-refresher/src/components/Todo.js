function Todo(props) {
    const deleteTodo = () => {
        
    }
    
    return (
        <div className="card">
          <h2>{props.title}</h2>
          <div className="actions">
            <button onClick={deleteTodo} className="btn">Delete</button>
          </div>
        </div>
    )
}

export default Todo