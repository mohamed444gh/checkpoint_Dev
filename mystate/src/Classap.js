import React, { Component } from 'react'
import "./class.css"

export default class Classap extends Component {
  constructor(props){
    super(props)
    this.intervalId = null
    this.state={
      name:"mohamed",
      last_name:"barhoumi",
      age:21,
      img:"me3.jpeg",
      show:false,
      count:0
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  showinfo=()=>{
    if(!this.state.show)
    {
      clearInterval(this.intervalId)
      this.setState({show:true,count:0})
      this.intervalId=setInterval(() => {
        this.setState((prev) => {
          if (prev.count >= 3600) {
            clearInterval(this.intervalId)
            return { show: false, count: 0 }
          }
          return { count: prev.count + 1 }
        })
      }, 1000)
    }
    else  {
      clearInterval(this.intervalId)
      this.setState({count:0,show:false})
    }
    
}
  time =(second)=>{
    const minutes=Math.floor( second/60)
    const restsecond=second%60
    return `${String(minutes).padStart(2, "0")}:${String(restsecond).padStart(2, "0")}`
  }
  render() {
    return (
      <div className='parent'>
        {this.state.show && <div className='chiled'>
          <img src={this.state.img} />
         <p>hi,my name is {this.state.name} {this.state.last_name} ,im {this.state.age} years old.</p>
         <p> Im study in GOMYCODE Souse </p>
         <p className='time'>{this.time(this.state.count)}</p>
        </div>}
         
        <button onClick={this.showinfo}>more</button>
      </div>
    )
  }
}
