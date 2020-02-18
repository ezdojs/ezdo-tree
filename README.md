# ezdo-tree
- 需要在 es module 环境下使用
- 为 [ezod.js](https://ezdojs.github.io) 开发的 tree 组件

##### 使用

```shell
npm i ezdo-tree --save
```

```js
import ez from 'ezdo'
import Tree from 'ezdo-tree'

class Ez extends ez.Node {
    constructor() {
        super()
        
        let tree = new Tree()
        tree.setSelect(this.select, this)
        tree.setData([
            {name:'ezdo 1', children: null},
            {name:'ezdo 2', children: [
                {name:'ezdo 21', children: null},
                {name:'ezdo 22', children: null},
            ]},
            {name:'ezdo 3', children: null},
            {name:'ezdo 4', children: null}
        ])
        this.add(this.tree)
    }
}
```

##### 效果

![](https://res.hei.fit/tree.png)

##### 相关链接

- [ezdo.js](https://ezdojs.github.io)