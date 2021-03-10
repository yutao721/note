### 使用chrome浏览器无法登陆github网站的解决方法

不知道什么原因tchrome浏览器无法登陆github网站，出现以下情况

![](https://gitee.com/yutao618/images/raw/master/images/20210310105445.png)

亦或者出现

![](https://gitee.com/yutao618/images/raw/master/images/20200419174348701.jpg)

### 解决方式：

1.打开http://tool.chinaz.com/dns?type=1&host=github.com&ip= 

![](https://gitee.com/yutao618/images/raw/master/images/20210310112458.png)

2.把检测列表里的TTL值最小的IP输入到hosts里，并对应写上github官网域名

```
13.229.188.59 github.com
```

