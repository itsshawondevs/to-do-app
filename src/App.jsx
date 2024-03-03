import { useState } from "react";

function App() {

  let [text, setText] = useState('')
  let [error, setError] = useState('')
  let [edit, setEdit] = useState('')
  let [update, setUpdate] = useState(true)

  let [arr, setArr] = useState([])

  const handleClick = () => {
    if(!text){
      setError('*invaild task')
    }else{
      setError('')
      let arr2 = [...arr]
      arr2.push(text)
      setArr(arr2)
      setText('')
    }

  }

  let handleDelete = (index) => {
    let arrDel = [...arr]
    arrDel.splice(index, 1)

    setArr(arrDel)
  }

  let handleEdit = (item,index) => {
    setText(item)
    setUpdate(false)

    setEdit(index)
  }

  let handleUpdate = () => {
    let updateArr = [...arr]
    updateArr[edit] = text

    setArr(updateArr)
    setUpdate(true)
    setText('')
  }

  return (
    <>
      <div className="container">
        <h1 className="heading">To-do List</h1>
        <div className="input_area">
          <input type="text" onChange={(e)=>setText(e.target.value) } value={text} placeholder="Enter your todo"/>
          {
            update ?
            <button className="btn" onClick={handleClick}>add todo</button>
            :
            <button className="btn" onClick={handleUpdate}>Update</button>
          }
        </div>
          <p className="err">{error}</p>

        <ol type="1">
          {
            arr.map((item,index)=>
            <>
              <div className="list_area">
                <li>{item}</li>
                <div className="btn_area">
                    <button className="edit_btn" onClick={()=> handleEdit(item,index)}>Edit</button>
                    <button className="del_btn" onClick={()=>handleDelete(index)}>Delete</button>
                  </div>
              </div>
            </>
            
            )
          }
        </ol>
      </div>
    </>
  )
}

export default App
