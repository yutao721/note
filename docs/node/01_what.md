## 背景介绍

Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).这是来自 Node.js 官网 https://nodejs.org/en/ 的一段介绍，翻译成中文意为 Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。这里重点几个关键词 **V8**、**JavaScript** 后续会讲解，从这里可以看出 Node.js 并不是一门新的编程语言，做为初学者这点先要弄清楚，它是 JavaScript 的运行环境，更进一步的说是在**服务端的运行环境**，因此这里的编程语言指的是 JavaScript。

## 特点

Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。这是来自于 Node.js 的另一个介绍，关键词 **事件驱动**、**非阻塞式 I/O** 因此，在基于这些条件之下 Node.js 作者 Ryan Dahl 在评估了 C、Lua、Haskell、Ruby、JavaScript 等语言之后，最终选择了 JavaScript，为什么呢？

JavaScript 是一个单线程的语言，单线程的优点是不会像 Java 这些多线程语言在编程时出现线程同步、线程锁问题同时也避免了上下文切换带来的性能开销问题，那么其实在浏览器环境也只能是单线程，可以想象一下多线程对同一个 DOM 进行操作是什么场景？不是乱套了吗？那么单线程可能你会想到的一个问题是，前面一个执行不完，后面不就卡住了吗？当然不能这样子的，JavaScript 是一种采用了事件驱动、异步回调的模式，另外 JavaScript 在服务端不存在什么历史包袱，在虚拟机上由于又有了 Chrome V8 的支持，使得 JavaScript 成为了 Node.js 的首选语言。

### 单线程

> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，使用的是JavaScript运行环境，那就决定了Node.js也必然是单线程。

在 Java、PHP 或者 .net 等服务器端语言中，会为每一个客户端连接创建一个新的线程。而每个线程需要耗费大约 2MB 内存。也就是说，理论上，一个 8GB 内存的服务器可以同时连接的最大用户数为 4000 个左右。要让 Web 应用程序支持更多的用户，就需要增加服务器的数量，而 Web 应用程序的硬件成本当然就上升了。Node.js 不为每个客户连接创建一个新的线程，而仅仅使用一个线程。当有用户连接了，就触发一个内部事件，通过非阻塞`I/O、事件驱动机制`，让 Node.js 程序宏观上也是并行的。使用 Node.js ，一个 8GB 内存的服务器，可以同时处理超过 4 万用户的连接。

另外，单线程带来的好处，操作系统完全不再有线程创建、销毁的时间开销。但是单线程也有很多弊端，会在 Node.js 的弊端详细讲解。

### 事件驱动

在 `Node.js` 中，客户端请求建立连接，提交数据等行为，会触发相应的事件。在 `Node.js` 中，在一个时刻，只能执行一个事件回调函数，但是在执行一个事件回调函数的中途，又有其他事件产生，可以转而处理其他事件（比如，又有新用户连接了），然后返回继续执行原事件的回调函数，这种处理机制，称为“**事件环**”机制。

`Node.js` 底层是 `C++`（`V8`也是 C++写的）。底层代码中，近半数都用于事件队列、回调函数队列的构建。用事件驱动来完成服务器的任务调度。

> 其实，从Node是单线程的特点来看，也促使了其使用的是事件驱动

![img](http://img.xiaogangzai.cn/16c1a5d709d285e7.jpg)

### 非阻塞异步 io

例如，当在访问数据库取得数据的时候，需要一段时间。在传统的单线程处理机制中，在执行了访问数据库代码之后，整个线程都将暂停下来，等待数据库返回结果，才能执行后面的代码。也就是说，`I/O`阻塞了代码的执行，极大地降低了程序的执行效率。

由于 Node.js 中采用了非阻塞型`I/O`机制，因此在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。

当某个`I/O`执行完毕时，将以事件的形式通知执行`I/O`操作的线程，线程执行这个事件的回调函数。为了处理异步`I/O`，线程必须有事件循环，不断的检查有没有未处理的事件，依次予以处理。

阻塞模式下，一个线程只能处理一项任务，要想提高吞吐量必须通过多线程。而非阻塞模式下，一个线程永远在执行计算操作，这个线程的 CPU 核心利用率永远是 100%。所以，这是一种特别有哲理的解决方案：与其人多，但是好多人闲着；还不如一个人玩命，往死里干活儿。

> Node.js的这三个特点环环相扣，Node.js 中单线程的特点就决定了其使用事件驱动的机制去完成任务调度，要想提高执行效率，就得使用`非阻塞异步 io`的形式。

## Node.js 的弊端

 Node.js 中有一个特点就是单线程，它带来了很多好处，但是它也有弊端，单线程弱点如下。

1. 无法利用多核 CPU
2. 错误会引起整个应用退出无法继续调用异步`I/O`
3. 大量计算占用 CPU 导致无法继续调用异步`I/O`

弊端 1:解决方案

- （1）一些管理工具比如`pm2，forever` 等都可以实现创建多进程解决多核 CUP 的利用率问题。
- （2）在 v0.8 版本之前，实现多进程可以使用`child_process`
- （3）在 v0.8 版本之后，可以使用`cluster`模块，通过主从模式，创建多个工作进程解决多核 CPU 的利用率问题。

弊端 2:解决方案

- （1）Nnigx 反向代理，负载均衡，开多个进程，绑定多个端口；
- （2） 一些管理工具比如`pm2，forever` 等都可以实现进程监控，错误自动重启等
- （3）开多个进程监听同一个端口，使用 Node 提供的`cluster`模块；
- （4）未出现`cluster`之前，也可以使用`child_process`,创建多子线程监听一个端口。
- （5）这里说明下，有上面的这些解决方案，但是写 node 后端代码的时候，异常抛出`try catch`显得格外有必要。

弊端 3:解决方案

- （1）可以把大量的密集计算像上面一样拆分成多个子线程计算
- （2）但是如果不允许拆分，想计算 100 万的大数据，在一个单线程中，Node 确实显得无能为力，这本身就是 V8 内存限制的弊端。

## Node.js 应用场景

善于`I/O`，不善于计算。因为`Node.js`最擅长的就是任务调度，如果你的业务有很多的 `CPU` 计算，实际上也相当于这个计算阻塞了这个单线程，就不太适合 Node 开发，但是也不是没有解决方案，只是说不太适合。

当应用程序需要处理大量并发的`I/O`，而在向客户端发出响应之前，应用程序内部并不需要进行非常复杂的处理的时候，`Node.js`非常适合。`Node.js`也非常适合与`websocket`配合，开发长连接的实时交互应用程序。

具体场景可以表现为如下：

- **I/O 密集型场景**

Node.js 的优势主要在于事件循环，非阻塞异步 I/O，只开一个线程，不会每个请求过来我都去创建一个线程，从而产生资源开销。比如：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的 web 应用程序；

- **RESTful API**

通常我们可以使用 Node.js 来做为中间层，负责组装数据提供 API 接口给到前端调用，这些数据源可能来自第三方接口或者数据库，例如，以前可能我们通过后端 Java、PHP 等其它语言来做，现在我们前端工程师通过 Node.js 即可完成，后端则可以更专注于业务开发。

- **RPC 服务**

RPC（Remote Procedure Call）中文名「远程过程调用」，也许你对它很陌生，但是在当今微服务模式下，我们可能是针对功能或者具体的业务形态进行服务化，那么服务之间的通信一种常见的模式我们都知道通过 HTTP 来实现，了解网络模型的同学可能知道，如果我们现在通过 TCP 的方式是不是会更高效呢？

当然是的，HTTP 属于应用层协议，在这之下就是传输层，显然以 TCP 形式是很有优势的，RPC 服务也就是采用的 TCP，现在出名的 RPC 服务例如，Google 的 gRPC、阿里的 Dubble。

- **基础工具**

可以做为基础工具，前端领域中的编译器、构建工具、搭建脚手架等。比较出名的例如 Webpack、Gulp，Rollup, Vite都是很成功的。

- **即时消息**

基于 web 的多人实时聊天客户端、聊天室、图文直播，基于 web、canvas 等多人联网游戏...

## Node.js架构

Node.js 由 Libuv、Chrome V8、一些核心 API 构成，如下图所示：

![](https://www.nodejs.red/nodejs/base/img/nodejs_architecture.png)



以上展示了 Node.js 的构成，下面做下简单说明：

- Node Standard Library：Node.js 标准库，对外提供的 JavaScript 接口，例如模块 http、buffer、fs、stream 等
- Node bindings：这里就是 JavaScript 与 C++ 连接的桥梁，对下层模块进行封装，向上层提供基础的 API 接口。
- V8：Google 开源的高性能 JavaScript 引擎，使用 C++ 开发，并且应用于谷歌浏览器。如果您感兴趣想学习更多的 V8 引擎知识，请访问 [What is V8?](https://v8.dev/)
- Libuv：是一个跨平台的支持事件驱动的 I/O 库。它是使用 C 和 C++ 语言为 Node.js 所开发的，同时也是 I/O 操作的核心部分，例如读取文件和 OS 交互。来自一份 [Libuv 的中文教程](https://github.com/luohaha/Chinese-uvbook)
- C-ares：C-ares 是一个异步 DNS 解析库
- Low-Level Components：提供了 http 解析、OpenSSL、数据压缩（zlib）等功能。

以上只是做一个初步的认知，如果你想深入了解 Node.js 那么多每个点都是值得你深入研究的。

## 为什么要选择Node.js

如果你有一定的前端基础，比如 `HTML、CSS、JavaScript、JQ、Vue`；那么，`Node.js` 能让你以最低的成本快速过渡成为一个全栈工程师(我称这个全栈为伪全栈，我认为的全栈也要精通数据库，不喜勿喷)，从而触及后端和移动端的开发。当然，Node.js 也不是万能的、也不是说学了它就可以完全取代后端的其他开发语言，它有自己的使命和擅长的应用领域。

除此之外现在非常火热的 `Vue.js，React.js` ，等很多数据层动态交互优先选用了`Node.js`，一些比较流行的打包工具也是如此；综上，为你为什么要学习它又增加了一大理由。

















