## typora+picgo+gitee图床使用教程

[TOC]



## PicGo相关

> 此教程核心是要搞定PicGo的配置，[PicGo](https://github.com/Molunerfinn/PicGo) 快速上传图片并获取url连接的工具，win,mac都可以用。而且支持很多图床：七牛、腾讯云、又拍云、github、阿里云等等，有桌面状态栏直接拖拽上传，很方便。最终要的是可以和typora结合使用

### 下载地址

[PicGo官方下载地址](https://github.com/Molunerfinn/picgo/releases)

PicGo默认是支持github但不支持gitee,但是有人写了gitee的插件，我们可以用的。

### gitee码云图片仓库设置

进入码云，然后创建一下私人token

![image-20200814180414951](https://gitee.com/yutao618/images/raw/master/images/image-20200814180414951.png)

![image-20200814180516106](https://gitee.com/yutao618/images/raw/master/images/image-20200814180516106.png)

生成的token自己记住。

新建一个**public**的仓库，专门管理md文件和图片。如果你原来有github，可以直接导入过来。

### PicGo增加插件

![image-20200814180724386](https://gitee.com/yutao618/images/raw/master/images/image-20200814180724386.png)

安装好，重新配置一下

![image-20200814180856968](https://gitee.com/yutao618/images/raw/master/images/image-20200814180856968.png)

![image-20200814181023879](https://gitee.com/yutao618/images/raw/master/images/image-20200814181023879.png)

![image-20200814180957302](https://gitee.com/yutao618/images/raw/master/images/image-20200814180957302.png)

此时我们在上传区上传图片就可以在相册中看到，而且可以复制图片的链接地址了，同时gitee中也会同步刚才上传的图片,接下来我们再去配置下typora。

## typora相关

> typora这里也不过多的介绍，总之是一款超级好用的markDown编辑器，写这篇文章的时候就是用的这款编辑器。

### 版本要求：

- 0.9.84 +

  之前的版本typora并没有集成图床，在0.9.84这个版本集成了picgo

  ![image-20200310114800425](https://gitee.com/yutao618/images/raw/master/images/image-20200310114800425.png)

### 设置

**文件--偏好设置--图像**

参考图片中的进行配置。

![](https://gitee.com/yutao618/images/raw/master/images/image-20200310125429866.png)

### 验证图片上传

这里还可以**验证图片上传功能**。

验证成功会返回下图结果

![](https://gitee.com/yutao618/images/raw/master/images/image-20200310120930142.png)

### 使用

上面的设置完成后，在 Typora 里写字时，就可以自动上传图片到图床啦。可以直接拖拽图片到编辑区，也可以使用快捷键 **Ctrl + Shift + I**，可以调出插入图片的功能。也可以直接复制图片，然后再编辑器中直接粘贴。

> 说明：目前PicGo和typora下载都不太容易，下面给出下载地址，自行下载。

## 下载地址

- typora

链接：https://pan.baidu.com/s/1CG4iXsmvlIj2Zz5z8ZxXYA 提取码：g8vm

- picgo

链接：https://pan.baidu.com/s/1f0Qcdr3cwIoXVRsTycw6BQ 提取码：pgci