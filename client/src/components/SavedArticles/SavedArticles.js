import React from "react"; 

const Results = props =>(
    <div className="row">
        <div className="col-lg-12">
            <li className="list-group-item">
                <h4>
                <span>
                    <em>{props.title}</em>
                </span>
                <span className="btn-group pull-right">
                    <a href={props.url} target="_blank">
                    <button className="btn btn-default ">View Article</button>
                    </a>
                    <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
                </span>
                </h4>
                <p>Date Published: {props.date}</p>
            </li>
        </div>
    </div>

)

export default Results;