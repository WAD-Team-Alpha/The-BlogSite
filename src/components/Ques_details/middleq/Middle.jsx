const Middle = (props) => {
    return (
        <div>
            <div>
                <span>{props.dec} </span>{" "}
                {/*printing the question description */}
            </div>
            <div style={{ paddingRight: "1em", paddingTop: "1em" }}>
                <img
                    src={props.img}
                    alt="alt"
                    width="820px"
                    height="248px"
                />
                {/*printing the question immage if any */}
            </div>
        </div>
    );
};

export default Middle;
