const app = Vue.createApp({
    // data属性值是一个函数，需要返回一个对象
    data() {
        return {
            // 顶级属性直接访问,即name
            name: "Cyun",
            // 有嵌套属性，就需要使用"."来访问，即address.city
            address: {
                city: "suzhou",
            },
            link: "http://www.baidu.com",
            todos: ["学数学", "学408", "学英语", "学政治"],
            istodos: [
                {
                    complete: true,
                    content: "学数学"
                }, 
                {
                    complete: false,
                    content: "学语文"
                },
                {
                    complete: true,
                    content: "学英文"
                }
            ]
        }
    },
});

app.mount("#app");