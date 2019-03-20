export default{
    singular:true,
    routes　: [{
        path : '/',
        component : './index'
    }],
    plugins : [[
        'umi-plugin-react',{
            antd : true
        }
    ]]
};
