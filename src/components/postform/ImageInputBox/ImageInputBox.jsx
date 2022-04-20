import { Delete } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import classes from "./ImageInputBox.module.css";

const ImageInputBox = (props) => {
    // Custom input box for image
    const [preview, setPreview] = useState(""); //State for the previw of the image
    const [file, setFile] = useState("")
    const [image, setImage] = useState();
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                console.log("This is the command", file)
                props.isAdded ? props.onChange(props.id, file) : props.onChange(file)
            }
            reader.readAsDataURL(image)
        } else {
            setPreview(null)
        }
    }, [image])

    return (
        <div className="d-flex align-items-center mb-3">
            <div
                className={"container " + classes.banner}
                style={{
                    backgroundImage: `url(${preview})`,
                    height: `${props.height}`,
                }}
            >
                <label style={{ fontWeight: "bold" }} htmlFor="bannerImage">
                    {props.inputname}
                </label>
                <label
                    className={"btn btn-primary " + classes.fileinput}
                    style={{
                        border: "2px solid",
                        borderColor: preview ? "" : "red",
                    }}
                >
                    <input
                        type="file"
                        id="bannerImage"
                        accept="images/*"
                        onChange={(event) => {
                            console.log(event.target.files[0])
                            setPreview(event.target.files[0]);
                            const file = event.target.files[0];
                            if (file && file.type.substring(0, 5) === "image") {
                                setFile(file)
                                setImage(file)
                            } else {
                                setImage(null)
                                setFile(null)
                            }
                            props.onChange(props.id, event.target.files[0])
                        }}
                    />
                    Drop image
                </label>
            </div>
            {props.isAdded && (
                <button
                    className={"btn shadow-none"}
                    style={{ paddingRight: 0 }}
                    onClick={(event) => {
                        event.preventDefault();
                        props.onDelete(props.id);
                    }}
                >
                    <Delete sx={{ color: "red" }} />
                </button>
            )}
        </div>
    );
};

export default ImageInputBox;
