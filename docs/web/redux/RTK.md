## Redux Toolkit(RTK)使用介绍以及源码分析

React和Redux被认为是大规模React应用中管理状态的最佳组合。然而，随着时间的推移，Redux的在使用过程中还是会遇到以下问题：

- 配置Redux Store并不简单。
- 我们需要几个软件包来使Redux与React一起工作。
- Redux需要太多样板代码。

## Redux Toolkit解决的问题

Redux Toolkit(之前称为Redux Starter Kit)提供了一些选项来配置全局store，并通过尽可能地抽象Redux API来更精简地创建动作和reducers。

## Redux Toolkit API的主要功能

以下是Redux Took Kit使用的API函数，它是现有Redux API函数的抽象。这些函数并没有改变Redux的流程，只是以更易读和管理的方式简化了它们。

- **configureStore**：像从Redux中创建原始的createStore一样创建一个Redux store实例，但接受一个命名的选项对象并自动设置Redux DevTools扩展。
- **createAction**：接受一个Action类型字符串，并返回一个使用该类型的Action创建函数。
- **createReducer**：接受初始状态值和Action类型的查找表到reducer函数，并创建一个处理所有Action类型的reducer。
- **createSlice**：接受一个初始状态和一个带有reducer名称和函数的查找表，并自动生成action creator函数、action类型字符串和一个reducer函数。
- ...


