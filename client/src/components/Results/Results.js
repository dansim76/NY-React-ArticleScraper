import React from "react";

const Results = props =>(
    <div className="row">
        <div className="col-lg-12">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <strong>
                        <i className="fa fa-newspaper-o" aria-hidden="true"></i> Results
                        </strong>
                    </h3>
                </div>
                <div className="panel-body">
                <li className="list-group-item">
      <h4>
        <span>
          <em>{props.title}</em>
        </span>
        <span className="btn-group pull-right">
          <a href={props.url} target="_blank">
            <button className="btn btn-default ">View Article</button>
          </a>
          <button className="btn btn-primary" onClick={() => props.handleSaveButton(props._id)}>Save</button>
        </span>
      </h4>
      <p>Date Published: {props.date}</p>
    </li>
                </div>
            </div>
        </div>
    </div>
)

export default Results;