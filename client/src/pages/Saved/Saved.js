import React, {Component} from "react";

import API from "../../utils/API"
import Nav from "../../components/Nav"
import SavedArticles from "../../components/SavedArticles"
class Saved extends Component{

state={
    articles:[],
    topic:"",
    startYear:"",
    endYear:""
}

componentDidMount(){
this.getSavedArticles()
}
getSavedArticles = () => {
    API.getARticle()
    .then((res) =>{
        this.setState({saved: res.data})
    })

}
getSavedArticles = () => {
    API.getARticle()
    .then((res) =>{
        this.setState({saved: res.data})
    })

}
render(){
    return(
        <div className ="container">
            < Nav />

            <SavedArticles />


        </div>
    )
}



}
export default Saved