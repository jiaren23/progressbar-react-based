export default class Result extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        console.log("ss")
    }

    render() {
        return (
            <div>
                <h1> Count2 : {this.props.count}</h1>
                <button type="button" onClick={this.props.handler}>Click111 Me ! </button>
                

            </div>

        )
    }
}
