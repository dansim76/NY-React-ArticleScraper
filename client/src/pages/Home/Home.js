import React, { Component } from "react";
import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn"
// import SaveBtn from "../../components/SaveBtn"
import Search from "../../components/Search"
import SavedArticles from "../../components/SavedArticles"
import Results from "../../components/Results"
import Nav from "../../components/Nav"


class Home extends Component {
    state = {
        articles:[],
        title: "",
        author: "",
        saved:[],
        startYear:"",
        endYear:""
        
    };
    
    componentDidMount(){
        this.getSavedArticles()
    }
    
    getSavedArticles = () => {
        API.getArticle()
        .then((res) =>{
            this.setState({saved: res.data})
        })
        
    }
    handleSaveButton = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    console.log("findArticleByID: ", findArticleByID);
    const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url};
    API.saveArticle(newSave)
    .then(this.getSavedArticles());
  }

    
    renderArticles = () => {
        return this.state.articles.map(article => (
            <Results
            _id={article._id}
            key={article._id}
            title={article.headline.main}
            date={article.pub_date}
            url={article.web_url}
            handleSaveButton={this.handleSaveButton}
            getSavedArticles={this.getSavedArticles}
            />
        ));
    }
    
    //render article
    
    //
    renderSaved = () => {
        return this.state.saved.map(save => (
            <SavedArticles
            _id={save._id}
            key={save._id}
            title={save.title}
            date={save.date}
            url={save.url}
            handleDeleteButton={this.handleDeleteButton}
            getSavedArticles={this.getSavedArticles}
            />
        ));
    }
    
    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value });
    }
    
    // Keep track of what user types into topic input so that input can be grabbed later
    handleStartYearChange = (event) => {
        this.setState({ startYear: event.target.value });
    }
    
    // Keep track of what user types into topic input so that input can be grabbed later
    handleEndYearChange = (event) => {
        this.setState({ endYear: event.target.value });
    }
    
    handleFormSubmit = (event) => {
        
        event.preventDefault();
        API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
        .then((res)=>{
            this.setState({articles: res.data.response.docs})
            console.log(res);
        })
        
    }
    handleDeleteButton=(id)=>{
        API.deleteArticle(id)
        .then(this.getSavedArticles())
    }
    
    render(){
        return(
            
            <div className ="container">
            <Nav />
            <Search 
            handletopicChange={this.handleTopicChange}
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            handleFormSubmit={this.handleFormSubmit}
            renderArticles={this.renderArticles}
            />
      
            
            <SavedArticles 
            
            
            />
            
            
            
            </div>
        )
        
    }
}

export default Home