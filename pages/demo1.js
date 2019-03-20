import react,{Component} from 'react';

class MyInput extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
        <div>
            <input value = {this.props.values} onChange = {this.props.onChange}/>
            <button onClick={this.props.onTextResert}>Resert</button>
        </div>
    );
    }
}

class Demo extends Component{
    constructor(props){
        super(props);
        this.state = {
            values : ""
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onTextResert = this.onTextResert.bind(this);
    }
    onTextChange(e){
        console.log("这个方法是input调用的");
        this.setState({values : e.target.value});//获取input组件的属性
    }
    onTextResert(){
        this.setState({values : ""});
    }
    render(){
        return (
            <MyInput values = {this.state.values} onTextResert = {this.onTextResert} onChange = {this.onTextChange}/>

        );
    }
}

export default Demo;
