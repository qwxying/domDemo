window.dom = {
  //改style样式
  style(node, name, value) {
    if (arguments.length === 3) {
      //   dom.style(div,'color','red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        // dom.style(div,'color')
        return node.style[name];
      } else if (name instanceof Object) {
        // dom.style(div,{color:'red'})
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },

  //查找
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },

  //遍历
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};

// 以下为完整封装
// window.dom = {
//   //增
//   create(string) {
//     const container = document.createElement("template"); //template可以包含所有的标签
//     container.innerHTML = string.trim(); //去掉字符串两边的文本
//     return container.content.firstChild;
//   },
//   //新增一个弟弟
//   after(node, node2) {
//     // console.log(node.nextSibling);
//     node.parentNode.insertBefore(node2, node.nextSibling);
//   },
//   //新增一个弟弟
//   before(node, node2) {
//     node.parentNode.insertBefore(node2, node);
//   },
//   //新增一个儿子
//   append(parent, node) {
//     parent.appendChild(node);
//   },
//   //再找一个爸爸
//   wrap(node, parent) {
//     dom.before(node, parent);
//     dom.append(parent, node);
//   },
//   //删
//   remove(node) {
//     node.parentNode.removeChild(node);
//     return node;
//   },
//   //清空
//   empty(node) {
//     // const { childeNodes } = node;
//     const array = [];
//     let x = node.firstChild;
//     while (x) {
//       array.push(dom.remove(node.firstChild));
//       x = node.firstChild;
//     }
//     return array;
//   },
//   //改|查
//   attr(node, name, value) {
//     //重载
//     if (arguments.length === 3) {
//       node.setAttribute(name, value);
//     } else if (arguments.length === 2) {
//       return node.getAttribute(name);
//     }
//   },
//   //改文本内容
//   text(node, string) {
//     //适配
//     if (arguments.length === 2) {
//       if ("innerText" in node) {
//         node.innerText = string;
//       } //IE
//       else {
//         node.texContent = string;
//       } //Firefox/Chrome
//     } else if (arguments === 1) {
//       if ("innerText" in node) {
//         return node.innerText;
//       } else {
//         return node.texContent;
//       }
//     }
//   },
//   //改html
//   html(node, string) {
//     if (arguments.length === 2) {
//       node.innerHTML = string;
//     } else if (arguments.length === 1) {
//       return node.innerHTML;
//     }
//   },
//   //改style样式
//   style(node, name, value) {
//     if (arguments.length === 3) {
//       //   dom.style(div,'color','red')
//       node.style[name] = value;
//     } else if (arguments.length === 2) {
//       if (typeof name === "string") {
//         // dom.style(div,'color')
//         return node.style[name];
//       } else if (name instanceof Object) {
//         // dom.style(div,{color:'red'})
//         const object = name;
//         for (let key in object) {
//           node.style[key] = object[key];
//         }
//       }
//     }
//   },
//   // class的操作
//   class: {
//     add(node, className) {
//       node.classList.add(className);
//     },
//     remove(node, className) {
//       node.classList.remove(className);
//     },
//     has(node, className) {
//       return node.classList.contains(className);
//     },
//   },
//   //事件
//   on(node, eventName, fn) {
//     node.addEventListener(eventName, fn);
//   },
//   off(node, eventName, fn) {
//     node.removeEventListener(eventName, fn);
//   },
//   //查找
//   find(selector, scope) {
//     return (scope || document).querySelectorAll(selector);
//   },
//   //找爸爸
//   parent(node) {
//     return node.parentNode;
//   },
//   //找儿子
//   children(node) {
//     return node.children;//childNodes含文本节点，而children不含文本节点
//   },
//   //找兄弟姐妹
//   siblings(node) {
//     return Array.from(node.parentNode.children).filter((n) => n !== node);
//   },
//   //找弟弟
//   next(node) {
//     let x = node.nextSibling;
//     while (x && x.nodeType === 3) {
//       x = x.nextSibling;
//     }
//     return x;
//   },
//   //找哥哥
//   previous(node) {
//     let x = node.previousSibling;
//     while (x && x.nodeType === 3) {
//       x = x.previousSibling;
//     }
//     return x;
//   },
//   //遍历
//   each(nodeList, fn) {
//     for (let i = 0; i < nodeList.length; i++) {
//       fn.call(null, nodeList[i]);
//     }
//   },
//   //查询排行
//   index(node) {
//     const list = dom.children(node.parentNode);
//     let i;
//     for (i = 0; i < list.length; i++) {
//       if (list[i] === node) {
//         break;
//       }
//     }
//     return i;
//   },
// };