const div = dom.find('#test>.red')[0] // 获取对应的元素

dom.style(div, 'color', 'blue') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素

// const div = dom.create("<div>newDiv</div>");
// console.log(div);

// dom.after(test, div);
// // dom.before(test, div);

// const div3 = dom.create('<div id="parent"></div>');
// dom.wrap(test, div3);

// const nodes = dom.empty(window.empty);
// console.log(nodes);

// dom.attr(test, "title", "Hi,I am qwxying");
// const title = dom.attr(test, "title");
// console.log(`title:${title}`);

// dom.text(test, "你好，这是新的内容");
// dom.text(test);

// dom.style(test, { color: "blue", border: "1px solid red" });
// console.log(dom.style(test, "border"));
// dom.style(test, "border", "1px solid black");

// dom.class.add(test, "red");
// // dom.class.remove(test, "red");
// // console.log(dom.class.has(test, "red"));

// const fn = () => {
//   console.log("点什么点？");
// };
// dom.on(test, "click", fn);
// dom.off(test, "click", fn);

// const testDiv = dom.find("#test")[0];
// console.log(testDiv);
// const test2 = dom.find("#test2")[0];
// console.log(dom.find(".red", test2)[0]);

// console.log(dom.parent(test));

// const s2 = dom.find("#s2")[0];
// console.log(dom.siblings(s2));
// console.log(dom.next(s2));
// console.log(dom.previous(s2));

// const t = dom.find("#travel")[0];

// dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));

// console.log(dom.index(s1));