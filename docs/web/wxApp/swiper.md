## 小程序swiper 自定义样式修改

>
> 在我们做项目的时候，经常会使用到swiper组件做一些轮播效果，但是碰到这样一个问题：小程序原生的swiper样式满足不了设计稿的需求。这样的话，我们就必须手动的去改小程序原生的swiper的样式了。

### 场景1：

![](https://gitee.com/yutao618/images/raw/master/images/swiper_1.gif)

- 一是swiper-item中图片或者元素不是100%的宽度，而是有固定的宽度
- 二是indicatorDots也是自定义出来的

html主要代码：

```html
<view class="banner-wrap">
  <swiper class="swiper"
          autoplay="{{autoplay}}"
          interval="{{interval}}"
          indicatorDots="{{indicatorDots}}"
          duration="{{duration}}"
          circular="{{true}}"
          previous-margin="68px"
          next-margin="68px"
          current="activeIndex"
          bindchange="switchCard">
    <block wx:for="{{swipers}}" wx:key="*this" wx:index="index">
      <swiper-item class="swiper-item-wrap">
        <view class="swiper-item {{activeIndex == index? 'current' : ''}}">
          <image class="swiper-item-img" src="{{item.img}}"></image>
        </view>
      </swiper-item>
    </block>
  </swiper>
</view>
```

css主要代码如下：

```css
.banner-wrap, .swiper {
  height: 648rpx
}

.swiper-item {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  width: 460rpx;
  height: 608rpx;
  border-radius: 20rpx;
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
  opacity: 1
}

.swiper-item-img {
  width: 100%;
  height: 100%;
  display: block
}

.current {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1
}
```

js主要代码：

```js
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    activeIndex: 0,
    swipers: [
      {
        img: 'http://script-shop.oss-cn-hangzhou.aliyuncs.com/images/eK8OjAd7VvHHNfeQe9sdyEyus6xcG6uy.jpg'
      },
      {
        img: 'http://script-shop.oss-cn-hangzhou.aliyuncs.com/uploads/em68Jt9maLFMAlKEGjfp9bcqBzkpK07hJStwEYG0.png'
      },
      {
        img: 'https://script-shop.oss-cn-hangzhou.aliyuncs.com/uploads/9bBGFMzwW2cTYfU4OnRf6NrmMyPG00aAa03xSiHo.jpeg'
      }
    ]
  },
  switchCard(e) {
    let current = e.detail.current;
    this.setData({ activeIndex: current });
  },
  onLoad: function(options) {

  }
});
```

如此就可以完成以上效果，previous-margin和next-margin的距离可以根据设计稿修改；

修改面板指示点的大小、形状， 关于这个组件class可以参考[这篇文章](https://www.cnblogs.com/myboogle/p/6278163.html)

```css
.wx-swiper-dots {
  position: relative
}

/*水平指示器*/
.wx-swiper-dots.wx-swiper-dots-horizontal {
  margin-bottom: -20rpx
}

/*未选中点的样式*/
.wx-swiper-dot {
  width: 10rpx;
  height: 10rpx;
  background: #FFE4CF !important;
  margin-left: -8rpx
}

/*激活样式*/
.wx-swiper-dot-active {
  width: 28rpx !important;
  height: 10rpx;
  background: linear-gradient(-30deg, #FF6B17 0%, #FF8D00 100%) !important;
  border-radius: 10rpx !important
}
```

### 场景2

![](https://gitee.com/yutao618/images/raw/master/images/swiper_2.gif)



```html
<view class="diaries">
  <!-- 背景图 -->
  <image class="bg-img" src="{{bgSrc}}"></image>
  <!-- 大图轮播 -->
  <swiper circular="{{circular}}"
          indicator-dots="{{indicatorDots}}"
          autoplay="{{autoplay}}"
          interval="{{interval}}"
          duration="{{duration}}"
          bindchange="intervalChange"
          next-margin="100rpx"
          current="{{current}}"
          previous-margin="100rpx"
          class="swiper-news">
    <block wx:for="{{newsList}}" wx:key="unique">
      <swiper-item class="new-item">
        <view class="{{index==current?'bg-msg':'bg-unmsg'}}">
          <image class="{{index==current?'slide-image':'other-image'}}" data-index="{{index}}" src="{{item.img}}"/>
          <view wx:if="{{index==current}}">标题</view>
        </view>
      </swiper-item>
    </block>
  </swiper>

  <!-- 小图轮播 -->
  <swiper indicator-dots="{{indicatorDots}}"
          autoplay="{{autoplay}}"
          interval="{{interval}}"
          duration="{{duration}}"
          bindchange="dotsChange"
          next-margin="580rpx"
          current="{{current}}"
          class="swiper-dots">
    <block wx:for="{{newsList}}" wx:key="unique">
      <swiper-item class="dot-item" data-index="{{index}}" bindtap="changeIndex">
        <image class="dot-image" data-index="{{index}}" src="{{item.img}}"/>
        <view class="{{index==current?'line':''}}"></view>
      </swiper-item>
    </block>
  </swiper>
</view>
```

```css
.page{
  height: 100%;
}
.diaries{
  height: 100%;
}
.swiper-news{
  height: 822rpx;
  margin-top: 32rpx
}
.new-item{
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
}

.bg-img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(50rpx);
}
.slide-image{
  width: 468rpx;
  height: 556rpx;
  border-radius: 20rpx;
  margin-bottom: 26rpx;
  box-shadow:0rpx 40rpx 50rpx -40rpx #3f3e3e;
  position:absolute;
  top:-142rpx;

}
.other-image{
  width: 468rpx;
  height: 516rpx;
  border-radius: 20rpx;
}
.bg-msg{
  width: 540rpx;
  height: 640rpx;
  background-color: white;
  border-radius: 20rpx;
  display: flex;
  justify-content: center;
  box-shadow:0rpx 40rpx 50rpx -40rpx #3f3e3e;
  position:absolute;
  bottom:32rpx;
  padding:  0 34rpx;
  padding-top:446rpx;
  box-sizing:border-box;
}
.bg-unmsg{
  width: 540rpx;
  height: 659rpx;
  border-radius: 20rpx;
  display: flex;
  justify-content: center;
  position:absolute;
  bottom:0;
}
.swiper-dots{
  margin-top: 8rpx;
}
.dot-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left:280rpx;
}
.dot-image{
  width: 118rpx;
  height: 154rpx;
  border-radius: 10rpx;
}
.line{
  width: 50rpx;
  height: 8rpx;
  background-color: white;
  border-radius: 8rpx;
  margin-top: 24rpx;
}
```

```js
Page({
  data: {
    indicatorDots: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 1000,
    current: 0,
    newsList: [
      {
        img: 'http://script-shop.oss-cn-hangzhou.aliyuncs.com/images/eK8OjAd7VvHHNfeQe9sdyEyus6xcG6uy.jpg'
      },
      {
        img: 'http://script-shop.oss-cn-hangzhou.aliyuncs.com/uploads/em68Jt9maLFMAlKEGjfp9bcqBzkpK07hJStwEYG0.png'
      },
      {
        img: 'https://script-shop.oss-cn-hangzhou.aliyuncs.com/uploads/9bBGFMzwW2cTYfU4OnRf6NrmMyPG00aAa03xSiHo.jpeg'
      }
    ],
    bgSrc: 'http://script-shop.oss-cn-hangzhou.aliyuncs.com/uploads/em68Jt9maLFMAlKEGjfp9bcqBzkpK07hJStwEYG0.png'
  },
  // 大图滑动
  intervalChange(e) {
    this.setData({
      current: e.detail.current
    })
    //改变背景图
    let src = this.data.newsList[e.detail.current].img
    this.setData({
      bgSrc: src
    })
  },
  // 小图滑动
  dotsChange(e) {
    this.setData({
      current: e.detail.current
    })
    //改变背景图
    let src = this.data.newsList[e.detail.current].img
    this.setData({
      bgSrc: src
    })
  },
  // 点击小图
  changeIndex(e) {
    this.setData({
      current: e.currentTarget.dataset.index
    })
    //改变背景图
    let src = this.data.newsList[e.currentTarget.dataset.index].img
    this.setData({
      bgSrc: src
    })
  }
})
```

### 总结：

其实这2种也是比较简单和常用的，还有的指示器是数字的这种也可以使用current值去做相应的处理，原理都差不多。
