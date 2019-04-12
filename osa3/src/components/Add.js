import React from 'react'
const Add = ({submit, nameval, namechange, numval, numchange}) => {
    return(
        <div>
        <form onSubmit={submit}>
          <div>
            nimi: 
            <input 
                value={nameval}
                onChange={namechange}
            />
          </div>
          <div>
            numero: 
            <input 
                value={numval}
                onChange={numchange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
          </form>
          </div>
    )
}
export default Add