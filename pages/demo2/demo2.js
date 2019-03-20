
import { Carousel } from 'antd';
import react,{Component} from 'react';
import './demo2.less';
class Moves extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.afterChange = this.afterChange.bind(this);
        this.beforeChange = this.beforeChange.bind(this);
    }

    afterChange(index){//在当前索引更改后调用的回调函数
        console.log("afterChange"+index);
    }

    beforeChange(index){//在当前索引更改之前调用的回调函数
        console.log("beforeChange"+index);
    }
    render() {

        return (
            <Carousel className = "slick-slider1" autoplay="true" beforeChange={this.beforeChange} afterChange = {this.afterChange}>
                <div><h3>11111111111111111111111111111111111111111111111111111111</h3></div>
                <div><h3>22222222222222222222222222222222222222222222222</h3></div>
                <div><h3>3333333333333333333333333333333333333333333</h3></div>
                <div><h3>44444444444444444444444444444444444444444444</h3></div>
            </Carousel>
        );
    }
}
export default Moves;