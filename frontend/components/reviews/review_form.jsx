import React from "react";
// import {BsPlusCircle, BsDashCircle} from 'react-icons/bs'

class ReviewForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.review
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    if (this.state.title !== "" && this.state.rating !== 0) {
      this.props.action(this.state)
        .then(()=>this.props.toggleReview())
        
    } else if (this.state.title ==='') {
      this.setState({titleError:true})
    } else if (this.state.rating === 0) {
      this.setState({starsError:true})
    }

  }

  handleChange = (type)=>(e)=> this.setState({[type]: e.target.value}, this.setState({titleError:false}))

  handleClick = (value)=>() => {this.setState({rating:value, starsError:false})}

  render(){
    return (
      <div className="review-form-overlay">
        <div className="review-container">
          <div className="left-review">
            <div className="review-photo"><img 
                  src={this.props.photoUrl} 
                  className="round-photo"
                  />
            </div>
            <div className="review-photo-title">{this.props.brand} - {this.props.name}</div>
          </div>


          <div className="right-review">
            <form className="review-form" >
              <div className="separated">                
                <div className="review-title">My Review for {this.props.brand} {this.props.name}</div>
                <div className="small-msg">Required fields are marked with *</div>
              </div>
              <div className="separated">
                <div className="with-flex">
                  <div className="review-label">Product rating*</div>
                  <div className="star-box">
                    <div onClick={this.handleClick(5)} className="star star-5" id={ this.state.rating >=5 ? `star-${this.state.rating}`: ""}>★</div>
                    <div onClick={this.handleClick(4)} className="star star-4" id={ this.state.rating >=4 ? `star-${this.state.rating}`: ""}>★</div>
                    <div onClick={this.handleClick(3)} className="star star-3" id={ this.state.rating >=3 ? `star-${this.state.rating}`: ""}>★</div>
                    <div onClick={this.handleClick(2)} className="star star-2" id={ this.state.rating >=2 ? `star-${this.state.rating}`: ""}>★</div>
                    <div onClick={this.handleClick(1)} className="star star-1" id={ this.state.rating >=1 ? `star-${this.state.rating}`: ""}>★</div>
                  </div>
                </div>                
              {this.state.starsError === true && <div className="error"> Reviews must have ratings </div>}
              </div>
              <div className="separated">                
                <div className="review-label">Review title*</div>
                <input
                  className="review-str-imput"
                  type="text"
                  value={this.state.title} 
                  onChange={this.handleChange('title')}
                />
              {this.state.titleError === true && <div className="error"> Reviews must have a title </div>}
              </div>
              <div className="separated">                
                <div className="review-label">Review</div>
                <textarea
                  className="review-text-imput"
                  value={this.state.body} 
                  onChange={this.handleChange('body')}
                />
              </div>
              <div>
              </div>
              <button 
                className="grn btn" 
                onClick={this.handleSubmit}
                >Post review</button>
              <button 
                className="grn btn" 
                onClick={()=>this.props.toggleReview()}
                >Go Back</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewForm;