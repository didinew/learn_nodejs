// events 监听事件

import { EventEmitter } from "node:events";
const eventEmiter = new EventEmitter();

// 监听 message 事件
eventEmiter.on("message", (msg) => {
  console.log("接收到消息:", msg);
});


eventEmiter.emit("message", "Hello, World!!!!!");