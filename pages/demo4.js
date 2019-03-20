import react,{Component} from 'react';
import { Tabs } from 'antd';

class Demo4 extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeKey: '1'
        }
        this.onTabChange = this.onTabChange.bind(this);
    }
    onTabChange(activeKey){
        this.setState({ activeKey });
        console.log("这个方法里面的参数是"+activeKey);
    }
    render(){
        return (
            <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
            </Tabs>
        )
    }
}
export  default Demo4;