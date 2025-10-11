---

externalLinkIcon: true
navbar: true
pageClass: custom-page-class
---

# js学习

## 内置组件badge

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
- VuePress - <Badge type="important" text="v2" vertical="middle" />
- VuePress - <Badge type="info" text="v2" vertical="middle" />
- VuePress - <Badge type="note" text="v2" vertical="middle" />

## Markdown

### 提示容器

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: info
This is an info box
:::

::: note
This is a note
:::

::: important
This is an important note
:::

::: details
This is a details block with a title
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码

```ts
console.log('你好，VuePress！')
```

:::


### 代码选项卡

::: code-tabs

@tab JavaScript

```js
const name = 'VuePress'
console.log(`你好，${name}！`)
```

@tab TypeScript

```ts
const name: string = 'VuePress'

console.log(`你好，${name}！`)
```

:::

### 代码块

```js
const a = 1;
```

```html title="./Promise.md"
<div>
  <span>hello</span>
</div>
```
