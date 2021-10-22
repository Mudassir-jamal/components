import {useState} from "react"
import "./App.css"
import {MdSystemUpdateAlt ,MdDeleteOutline ,MdClear} from "react-icons/md"
import {FaRegEdit} from "react-icons/fa"
// import {MdDeleteOutline } from "react-icons/m"





const Todo = () => {
 const [list,setList] = useState([])
 const [text,setText] = useState("")
 const [editMode,setEditMode] = useState(-1)


//   console.log(text)


  const addItem = () =>{
   const tempList = [...list]
   tempList.push(text)
   setList(tempList)
   setText("")
   console.log(list)

  }


  const editItem = (ind) => {
    console.log(ind)
    // list.splice(ind,1)
    setEditMode(ind)
    setText(list[ind])
    // setEditMode(false)
  }


  const delItem = (ind) => {
    const tempList = [...list]
    tempList.splice(ind,1)
    setList(tempList)
    
    list.splice(ind,1)
  }


  const update = () => {
     const tempList = [...list]
     tempList.splice(editMode,1,text)
     setList(tempList)
     
     setEditMode(-1)

     setText("")

  }

  const removeAll = () => {
       
      setList([])
  }


    return (
        <div className="main">
            <div>
                <h1>React T0Do List</h1>

                <div className="todo_list">

                <div className="in_btn" >
                <input placeholder="Enter value"
                  onChange={e => setText(e.target.value)}
                  value={text}
                />

                {editMode !== -1 ?
                <button onClick={update}><MdSystemUpdateAlt size="15"/></button>

                 :

                 <button onClick={addItem}>+</button>
                }
                </div >

                <ol>

                {
                    list.map((val,ind) => {
                        return<><div className="li_items"><li>{val}
                          <button onClick={() => editItem(ind)}><FaRegEdit size="17"/></button>
                          <button onClick={() => delItem(ind)}><MdDeleteOutline size="17"/></button>
                          
                          </li>
                          </div>
                          </>
                    })
                }

                </ol>
                     <div className="cl_all_div"> <button className="cl_all" onClick={removeAll}>Clear All <MdClear /></button></div>
                </div>
                
            </div>
        
        </div>
    )
}

export default Todo
