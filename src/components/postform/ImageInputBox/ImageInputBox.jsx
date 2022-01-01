import { Delete } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react'
import classes from './ImageInputBox.module.css'

const ImageInputBox = (props) => {
    const imageRef = useRef();
    const [preview, setPreview] = useState()
    const [image, setImage] = useState();
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                props.isAdded ? props.onChange(props.id, reader.result) : props.onChange(reader.result)
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
        }
    }, [image, props])
    return (
        <div className='d-flex align-items-center'>
            <div className={"container " + classes.banner} style={{ backgroundImage: `url(${preview})`, height: `${props.height}` }}>
                <label style={{ fontWeight: "bold" }} htmlFor="bannerImage">
                    {props.inputname}
                </label>
                <label className={'btn btn-primary ' + classes.fileinput}>
                    <input
                        type="file"
                        id="bannerImage"
                        accept='images/*'
                        onChange={(event) => {
                            const file = event.target.files[0];
                            if (file && file.type.substring(0, 5) === "image") {
                                setImage(file)
                            } else {
                                setImage(null)
                            }
                        }}
                        ref={imageRef}
                    />
                    Drop image
                </label>
            </div>
            {props.isAdded && <button className={'btn shadow-none'} style={{paddingRight: 0,}} onClick={(event) => {
                event.preventDefault();
                props.onDelete(props.id)
            }}>
                <Delete sx={{color: 'red'}} />
            </button>}
        </div>
    )
}

export default ImageInputBox
