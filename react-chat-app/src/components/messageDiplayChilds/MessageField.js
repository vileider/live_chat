import React, { useState } from 'react'

export default function  MessageField(props){
  const [recievedMessages, setRecievedMessages] = useState('')
    const messageDisplay = (
        <div>
            <div className="list-container">
             
            </div>
            <div className="text-input-container">
              <input type="text" className="text-message"
               onChange={(event)=>{setRecievedMessages(event.target.value)}}
               style={{"Top":"150px", "position": "absolute", "bottom": "0"} }
                onKeyDown={(event)=>{
                  (event.key === "Enter") && props.runSendingMessage(recievedMessages)
                 }}
              />
            </div>
          </div>
      )

return(<>
{messageDisplay}
</>)

}