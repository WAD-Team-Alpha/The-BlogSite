import { Delete } from '@mui/icons-material'
import React from 'react'

const TextInputBox = (props) => {
    return (
        <div className={"form-floating d-flex align-items-center"}>
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: `${props.height}` }}
                onChange={(event) => {
                    props.isAdded ? props.onChange(props.id, event.target.value) : props.onChange(event.target.value)
                }}
            ></textarea>
            <label htmlFor="floatingTextarea">{props.inputname}</label>
            {props.isAdded && <button className={'btn shadow-none'} style={{paddingRight: 0,}} onClick={(event) => {
                event.preventDefault();
                props.onDelete(props.id)
            }}>
                <Delete sx={{color: 'red'}} />
            </button>}
        </div>
    )
}

export default TextInputBox
