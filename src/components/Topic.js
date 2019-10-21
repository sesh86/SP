import React, { Component } from 'react'

export class Topic extends Component {
    render() {
        return (
            <div>
                <h1>course topic</h1>
                <table className="table">
                    
                    <tr>
                        <th>s.no</th>
                        <th>topics</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>nodejs</td>
                       <td> <button type>edit</button>
                        <button>delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> mongo db</td>
                        <td><button>edit</button>
                        <button>delete</button></td>
                        
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>express</td>
                       <td> <button>edit</button>
                        <button>delete</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>react</td>
                        <td> <button>edit</button>
                        <button>delete</button></td>
                    </tr>

                </table>
            </div>
        )
    }
}

export default Topic

    
 