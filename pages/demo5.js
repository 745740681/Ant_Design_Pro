import react,{Component} from 'react';
import { Tree } from 'antd';


class Demo5 extends Component {
    constructor(props){
        super(props);
        this.state ={
            expandedKeys: []
        }
        this.onSelect = this.onSelect.bind(this);
        this.expandedKeys = this.expandedKeys.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }
    expandedKeys(){

    }
    onExpand(expandedKeys){
        this.setState({ expandedKeys });
        console.log("onExpand");
    }
    onSelect(selectedKeys){
        const {expandedKeys} = this.state;
        const key = selectedKeys[0];

        if (expandedKeys.includes(key)) {
            // 移除 key
            this.setState({
                expandedKeys: expandedKeys.filter(k => k !== key),
            });
        } else {
            // 添加 key
            this.setState({ expandedKeys: [...expandedKeys, key] });
        }
       console.log(selectedKeys);
    }
    render(){
        return (
            <Tree
                expandedKeys={this.state.expandedKeys}
                selectedKeys={[]}
                onExpand={this.onExpand}
                onSelect={this.onSelect}
            >
                <Tree.TreeNode title="parent 1" key="0-0">
                    <Tree.TreeNode title="leaf" key="0-0-0" />
                    <Tree.TreeNode title="leaf" key="0-0-1" />
                </Tree.TreeNode>
            </Tree>
        );
    }
}
export default Demo5;