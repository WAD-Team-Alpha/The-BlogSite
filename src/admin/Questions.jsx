import React from 'react'
import QuestionCard from './QuestionCard'

const Questions = () => {
    return (
        <div className="container">
            <h1>Questions</h1>
            <div className="row">
            <div className="col-md-3" key={5}>
                        <QuestionCard
                            id={"5"}
                            title={"This is title"}
                            summary={"This is summary"}
                            genre={"This is genre"}
                        />
                    </div>
            </div>
        </div>
    )
}

export default Questions
