

class InputTextWithPriview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : "進度條線上課程" ,
         
        }
    }

    handler(e){
        this.setState({
            value : e.target.value,
        })
    } 
    render(){
        return (
            <div>
                <h1 id="tittle">{this.state.value}</h1>
                <input type="text" 
                       id="text_input" 
                       value={this.state.value} 
                       onChange={this.handler.bind(this)}
                />
                </div>
        )
    }
}



ReactDOM.render(
    <InputTextWithPriview/>,
    document.getElementById("root")
)