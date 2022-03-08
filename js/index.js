var json = Blockly.serialization.workspaces.save(workspace);
Blockly.serialization.workspaces.load(json);
var workspace = Blockly.inject('blocklyDiv',                                                  // ライブラリに読み込ませる
{toolbox: document.getElementById('toolbox')});

Vue.createApp({
    el: '#app',
    data(){
        return {
            message: 'Hello Axios',
        }
    },
    mounted(){
        axios.get('https://jsoplaceholder.typicode.com/users')
            .then(response => nconsole.log(response))
            .catch(error => console.log(error))
    }
}).mount('#app')

