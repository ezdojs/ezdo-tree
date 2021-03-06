import ez from 'ezdo'
import './tree.css'

class Tree extends ez.Node {
    constructor() {
        super()
        this.addClass('ezdo-tree')
        this._ez_s_handler = null
        this._ez_s_caller = null
        this._ez_lastActiveNode = null
        this.selectIndex = 0 
    }

    setSelect(handler, caller) {
        this._ez_s_handler = handler
        this._ez_s_caller = caller
    }

    /**
     *[ {name:'', children:[],...} ]
     * @param {数据列表} array 
     */
    setData(array) {
        this._render(array, this)
    }

    _render(array, rootNode) {
        let ul = new ez.Node('ul')
        rootNode.add(ul)

        array.forEach((treeItemData,idx) => {
            let treeItem = new ez.Node('li')
            ul.add(treeItem)

            let pico = new ez.Node()
            pico.addClass('item-ico')
            treeItem.add(pico)

            treeItem.text = treeItemData.name
            treeItem.data = treeItemData
            treeItem.isFolder = treeItemData.children && treeItemData.children.length
            treeItem.isOpen = false
            treeItem.on('click', this._select, this)
            if( treeItem.isFolder) {
                pico.text = '+'
                // this._render(treeItemData.children, treeItem)
            }else {
                // treeItem.addClass('file')
                pico.text = '-'
            }

            if(this.selectIndex === idx && rootNode === this) {
                this._select(treeItem)
            }
        });
    }

    _select(node) {
        if(node.isFolder) {
            if(node.isOpen) {
                node.children[0].text = '+'
                node.remove(node.children[2])
            }else {
                node.children[0].text = '-'
                this._render(node.data.children, node)
            }
            node.isOpen = !node.isOpen
        }else {
            if(this._ez_lastActiveNode) {
                this._ez_lastActiveNode.removeClass('active')
            }
            node.addClass('active')
            this._ez_lastActiveNode = node
        }
        if(this._ez_s_handler) {
             this._ez_s_handler.bind(this._ez_s_caller)(node.data)
        }
    }
}

export default Tree
