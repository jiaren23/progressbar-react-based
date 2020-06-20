import Result from './Result.jsx'

class InputTest extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "見條"
        }
    }
    
    handler = (e)=>{
        console.log(e.target.value)
        const {name,value} = e.target;
       this.setState({
           [name]: value
       }) 
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <input 
                    type="text" 
                    value={this.state.title} 
                    name= "title"
                    onChange={this.handler}
                />
            </div>
            )
    }
}

ReactDOM.render(
    <InputTest/>,
    document.getElementById("root")
)