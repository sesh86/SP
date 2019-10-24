import React, { Component } from 'react'

export class TopicAdd extends Component {
    render() {
        return (
            <div>
                <form>


                    
                    <lable>title</lable>
                    <input type="text"></input>
                                        <br></br>
                                        
                    <br></br>
                    <lable>description</lable>
                    <textarea></textarea><br></br>
            
                    <br></br>
                    <button>sumit</button>
                    </form>
                    
            </div>
        )
    }
}

export default TopicAdd
