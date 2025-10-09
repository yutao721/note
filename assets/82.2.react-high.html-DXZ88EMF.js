import{_ as s,c as a,a as e,o as p}from"./app-CD1YpnS1.js";const t={};function l(o,n){return p(),a("div",null,[...n[0]||(n[0]=[e(`<h2 id="_1-context-上下文" tabindex="-1"><a class="header-anchor" href="#_1-context-上下文"><span>1.Context(上下文)</span></a></h2><ul><li>在某些场景下，你想在整个组件树中传递数据，但却不想手动地在每一层传递属性。你可以直接在 React 中使用强大的<code>context</code>API解决上述问题</li><li>在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props</li></ul><p><img src="http://img.zhufengpeixun.cn/contextapi.gif" alt="contextapi"></p><h3 id="_1-1-使用" tabindex="-1"><a class="header-anchor" href="#_1-1-使用"><span>1.1 使用</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">PageProps</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">PageState</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">color</span><span class="token operator">:</span> string</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ContextValue</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">color</span><span class="token operator">:</span> string<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function-variable function">changeColor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">color</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span>createContext<span class="token operator">&lt;</span>ContextValue <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> <span class="token literal-property property">root</span><span class="token operator">:</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>&#39;</span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Header</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> ContextValue <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">                        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">5px solid </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token operator">!</span><span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                            header</span>
<span class="line">                          <span class="token operator">&lt;</span>Title <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Title</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> ContextValue <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">                        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">5px solid </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token operator">!</span><span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                            title</span>
<span class="line">                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> ContextValue <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">                        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">5px solid </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token operator">!</span><span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                            main</span>
<span class="line">                        <span class="token operator">&lt;</span>Content <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Content</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> ContextValue <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">                        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">5px solid </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token operator">!</span><span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                            Content</span>
<span class="line">                            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> value<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">changeColor</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>红色<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">                            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> value<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">changeColor</span><span class="token punctuation">(</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;green&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>绿色<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span></span>
<span class="line">                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Page</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token operator">&lt;</span>PageProps<span class="token punctuation">,</span> PageState<span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> PageProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function-variable function">changeColor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">color</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> color <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token literal-property property">contextVal</span><span class="token operator">:</span> ContextValue <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">changeColor</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>changeColor<span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>color <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>contextVal<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">5px solid </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                    page</span>
<span class="line">                    <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">                    <span class="token operator">&lt;</span>Main <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Page <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-实现" tabindex="-1"><a class="header-anchor" href="#_1-2-实现"><span>1.2 实现</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { Component } from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">interface PageProps {</span>
<span class="line">}</span>
<span class="line">interface PageState {</span>
<span class="line">    color: string</span>
<span class="line">}</span>
<span class="line">+interface ContextValue {</span>
<span class="line">+    color: string;</span>
<span class="line">+    changeColor: (color: string) =&gt; void</span>
<span class="line">+}</span>
<span class="line">+interface ContextProps&lt;T&gt; {</span>
<span class="line">+    value: T</span>
<span class="line">+}</span>
<span class="line">+function createContext() {</span>
<span class="line">+    let value;</span>
<span class="line">+    function Provider(props) {</span>
<span class="line">+        value = props.value;</span>
<span class="line">+        Provider.value = value;</span>
<span class="line">+        return props.children;</span>
<span class="line">+    }</span>
<span class="line">+    function Consumer(props) {</span>
<span class="line">+        return props.children(value);;</span>
<span class="line">+    }</span>
<span class="line">+    return {</span>
<span class="line">+        Provider,</span>
<span class="line">+        Consumer</span>
<span class="line">+    }</span>
<span class="line">+}</span>
<span class="line">+let ThemeContext = createContext&lt;ContextValue | null&gt;(null);</span>
<span class="line"> let root: HTMLElement | null = document.querySelector(&#39;</span>
<span class="line">class Header extends Component {</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;ThemeContext.Consumer&gt;</span>
<span class="line">                {</span>
<span class="line">                    (value: ContextValue | null) =&gt; (</span>
<span class="line">                        &lt;div style={{ border: \`5px solid \${value!.color}\`, padding: 5 }}&gt;</span>
<span class="line">                            header</span>
<span class="line">                          &lt;Title /&gt;</span>
<span class="line">                        &lt;/div&gt;</span>
<span class="line">                    )</span>
<span class="line">                }</span>
<span class="line">            &lt;/ThemeContext.Consumer&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">class Title extends Component {</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;ThemeContext.Consumer&gt;</span>
<span class="line">                {</span>
<span class="line">                    (value: ContextValue | null) =&gt; (</span>
<span class="line">                        &lt;div style={{ border: \`5px solid \${value!.color}\` }}&gt;</span>
<span class="line">                            title</span>
<span class="line">                        &lt;/div&gt;</span>
<span class="line">                    )</span>
<span class="line">                }</span>
<span class="line">            &lt;/ThemeContext.Consumer&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">class Main extends Component {</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;ThemeContext.Consumer&gt;</span>
<span class="line">                {</span>
<span class="line">                    (value: ContextValue | null) =&gt; (</span>
<span class="line">                        &lt;div style={{ border: \`5px solid \${value!.color}\`, margin: 5, padding: 5 }}&gt;</span>
<span class="line">                            main</span>
<span class="line">                        &lt;Content /&gt;</span>
<span class="line">                        &lt;/div&gt;</span>
<span class="line">                    )</span>
<span class="line">                }</span>
<span class="line">            &lt;/ThemeContext.Consumer&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">class Content extends Component {</span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;ThemeContext.Consumer&gt;</span>
<span class="line">                {</span>
<span class="line">                    (value: ContextValue | null) =&gt; (</span>
<span class="line">                        &lt;div style={{ border: \`5px solid \${value!.color}\`, padding: 5 }}&gt;</span>
<span class="line">                            Content</span>
<span class="line">                            &lt;button onClick={() =&gt; value!.changeColor(&#39;red&#39;)} style={{ color: &#39;red&#39; }}&gt;红色&lt;/button&gt;</span>
<span class="line">                            &lt;button onClick={() =&gt; value!.changeColor(&#39;green&#39;)} style={{ color: &#39;green&#39; }}&gt;绿色&lt;/button&gt;</span>
<span class="line">                        &lt;/div&gt;</span>
<span class="line">                    )</span>
<span class="line">                }</span>
<span class="line">            &lt;/ThemeContext.Consumer&gt;</span>
<span class="line"></span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class Page extends Component&lt;PageProps, PageState&gt; {</span>
<span class="line">    constructor(props: PageProps) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.state = { color: &#39;red&#39; };</span>
<span class="line">    }</span>
<span class="line">    changeColor = (color: string) =&gt; {</span>
<span class="line">        this.setState({ color });</span>
<span class="line">    }</span>
<span class="line">    render() {</span>
<span class="line">        let contextVal: ContextValue = { changeColor: this.changeColor, color: this.state.color };</span>
<span class="line">        return (</span>
<span class="line">            &lt;ThemeContext.Provider value={contextVal}&gt;</span>
<span class="line">                &lt;div style={{ margin: &#39;10px&#39;, border: \`5px solid \${this.state.color}\`, padding: 5, width: 200 }}&gt;</span>
<span class="line">                    page</span>
<span class="line">                    &lt;Header /&gt;</span>
<span class="line">                    &lt;Main /&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/ThemeContext.Provider&gt;</span>
<span class="line"></span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">ReactDOM.render(&lt;Page /&gt;, root);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">class Header extends Component {</span>
<span class="line">+    static contextType = ThemeContext</span>
<span class="line">    render() {</span>
<span class="line">+        this.context = Header.contextType.Provider.value;</span>
<span class="line">        return (</span>
<span class="line">            &lt;div style={{ border: \`5px solid \${this.context.color}\`, padding: 5 }}&gt;</span>
<span class="line">                Header</span>
<span class="line">                &lt;Title /&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-高阶组件" tabindex="-1"><a class="header-anchor" href="#_2-高阶组件"><span>2. 高阶组件</span></a></h2><ul><li>高阶组件就是一个函数，传给它一个组件，它返回一个新的组件</li><li>高阶组件的作用其实就是为了组件之间的代码复用</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> NewComponent <span class="token operator">=</span> <span class="token function">higherOrderComponent</span><span class="token punctuation">(</span>OldComponent<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-1-日志组件" tabindex="-1"><a class="header-anchor" href="#_2-1-日志组件"><span>2.1 日志组件</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> hoistNonReactStatics <span class="token keyword">from</span> <span class="token string">&#39;hoist-non-react-statics&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">logger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">WrappedComponent</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">class</span> <span class="token class-name">LoggerComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">start</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>start<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;ms&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrappedComponent <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">hoistNonReactStatics</span><span class="token punctuation">(</span>LoggerComponent<span class="token punctuation">,</span> WrappedComponent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> LoggerComponent<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> Hello <span class="token operator">=</span> <span class="token function">logger</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>hello<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Hello <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-多层高阶组件" tabindex="-1"><a class="header-anchor" href="#_2-2-多层高阶组件"><span>2.2 多层高阶组件</span></a></h3><h4 id="_2-2-1-从localstorage中加载" tabindex="-1"><a class="header-anchor" href="#_2-2-1-从localstorage中加载"><span>2.2.1 从localStorage中加载</span></a></h4><ul><li><code>localStorage</code>中有<code>username=zhansan</code></li><li>从<code>localStorage</code>中根据key加载对应的值</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line">localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">WrappedComponentProps</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">fromLocal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">WrappedComponent</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>WrappedComponentProps<span class="token operator">&gt;</span> <span class="token operator">|</span> React<span class="token punctuation">.</span>ComponentClass<span class="token operator">&lt;</span>WrappedComponentProps<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">interface</span> <span class="token class-name">FromLocalComponentProps</span> <span class="token punctuation">{</span> <span class="token comment">//最终返回的组件的属性对象</span></span>
<span class="line">        <span class="token literal-property property">field</span><span class="token operator">:</span> string</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>  <span class="token comment">//状态对象</span></span>
<span class="line">        <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">class</span> <span class="token class-name">FromLocalComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token operator">&lt;</span>FromLocalComponentProps<span class="token punctuation">,</span> State<span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> FromLocalComponentProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>field<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrappedComponent value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> FromLocalComponent<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">UserName</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> WrappedComponentProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>input defaultValue<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>value<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> UserNameFromLocal <span class="token operator">=</span> <span class="token function">fromLocal</span><span class="token punctuation">(</span>UserName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>UserNameFromLocal field<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-从ajax中加载" tabindex="-1"><a class="header-anchor" href="#_2-2-2-从ajax中加载"><span>2.2.2 从ajax中加载</span></a></h4><ul><li>如果我们得到的用户名<code>zhangsan</code>,但是要显示中文张三，需要包裹二次</li><li>包裹的时候是从内往外一层层包裹</li><li>渲染的时候是从外往内渲染</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { Component } from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">interface WrappedComponentProps {</span>
<span class="line">    value: string;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">+const fromLocal = (WrappedComponent: React.ComponentClass&lt;WrappedComponentProps&gt;) =&gt; {</span>
<span class="line">    interface FromLocalComponentProps { //最终返回的组件的属性对象</span>
<span class="line">        field: string</span>
<span class="line">    }</span>
<span class="line">    interface State {  //状态对象</span>
<span class="line">        value: string;</span>
<span class="line">    }</span>
<span class="line">    class FromLocalComponent extends Component&lt;FromLocalComponentProps, State&gt; {</span>
<span class="line">        constructor(props: FromLocalComponentProps) {</span>
<span class="line">            super(props);</span>
<span class="line">            this.state = { value: &#39;&#39; };</span>
<span class="line">        }</span>
<span class="line">        componentWillMount() {</span>
<span class="line">            let value: string | null = localStorage.getItem(this.props.field);</span>
<span class="line">            if (value)</span>
<span class="line">                this.setState({ value });</span>
<span class="line">        }</span>
<span class="line">        render() {</span>
<span class="line">            return &lt;WrappedComponent value={this.state.value} /&gt;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return FromLocalComponent;</span>
<span class="line">}</span>
<span class="line">+const fromAjax = (WrappedComponent: React.FC&lt;WrappedComponentProps&gt;) =&gt; {</span>
<span class="line">+    interface FromAjaxComponentProps { //最终返回的组件的属性对象</span>
<span class="line">+        value: string</span>
<span class="line">+    }</span>
<span class="line">+    interface State {</span>
<span class="line">+        value: string;</span>
<span class="line">+    }</span>
<span class="line"></span>
<span class="line">+    class FromAjaxComponent extends Component&lt;FromAjaxComponentProps, State&gt; {</span>
<span class="line">+        constructor(props: WrappedComponentProps) {</span>
<span class="line">+            super(props);</span>
<span class="line">+            this.state = { value: &#39;&#39; };</span>
<span class="line">+        }</span>
<span class="line">+        componentDidMount() {</span>
<span class="line">+            fetch(\`/translate.json\`).then(response =&gt; response.json()).then((data) =&gt; {</span>
<span class="line">+                let value = data[this.props.value];</span>
<span class="line">+                this.setState({ value });</span>
<span class="line">+            });</span>
<span class="line">+        }</span>
<span class="line">+        render() {</span>
<span class="line">+            return &lt;WrappedComponent value={this.state.value} /&gt;</span>
<span class="line">+        }</span>
<span class="line">+    }</span>
<span class="line">+    return FromAjaxComponent;</span>
<span class="line">+}</span>
<span class="line">+const UserName = (props: WrappedComponentProps) =&gt; (</span>
<span class="line">+    &lt;input defaultValue={props.value} /&gt;</span>
<span class="line">+)</span>
<span class="line">+const UserNameFromAjax = fromAjax(UserName);</span>
<span class="line">+const UserNameFromLocal = fromLocal(UserNameFromAjax);</span>
<span class="line"></span>
<span class="line">ReactDOM.render(&lt;UserNameFromLocal field=&quot;username&quot; /&gt;, document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-render-props" tabindex="-1"><a class="header-anchor" href="#_3-render-props"><span>3. render props</span></a></h2><ul><li><a href="https://zh-hans.reactjs.org/docs/render-props.html" target="_blank" rel="noopener noreferrer">render-props</a></li><li><code>render prop</code> 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术</li><li>具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑</li><li>render prop 是一个用于告知组件需要渲染什么内容的函数 prop</li><li>这也是逻辑复用的一种方式</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;DataProvider render={data =&gt; (</span>
<span class="line">  &lt;h1&gt;Hello {data.target}&lt;/h1&gt;</span>
<span class="line">)}/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-原生实现" tabindex="-1"><a class="header-anchor" href="#_3-1-原生实现"><span>3.1 原生实现</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MouseTracker</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token operator">&lt;</span>Props<span class="token punctuation">,</span> State<span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function-variable function">handleMouseMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">x</span><span class="token operator">:</span> event<span class="token punctuation">.</span>clientX<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">y</span><span class="token operator">:</span> event<span class="token punctuation">.</span>clientY</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>div onMouseMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseMove<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>移动鼠标<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span></span>
<span class="line">                <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token function">当前的鼠标位置是</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>x<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MouseTracker <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-children" tabindex="-1"><a class="header-anchor" href="#_3-2-children"><span>3.2 children</span></a></h3><ul><li>children是一个渲染的方法</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { Component } from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line"></span>
<span class="line">interface State {</span>
<span class="line">    x: number;</span>
<span class="line">    y: number;</span>
<span class="line">}</span>
<span class="line">interface Props {</span>
<span class="line">    children: (state: State) =&gt; React.ReactNode</span>
<span class="line">}</span>
<span class="line">class MouseTracker extends React.Component&lt;Props, State&gt; {</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.state = { x: 0, y: 0 };</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    handleMouseMove = (event: React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; {</span>
<span class="line">        this.setState({</span>
<span class="line">            x: event.clientX,</span>
<span class="line">            y: event.clientY</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div onMouseMove={this.handleMouseMove}&gt;</span>
<span class="line">                {this.props.children(this.state)}</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        );</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">ReactDOM.render(&lt;MouseTracker &gt;</span>
<span class="line">    {</span>
<span class="line">        (props: State) =&gt; (</span>
<span class="line">            &lt;&gt;</span>
<span class="line">                &lt;h1&gt;移动鼠标!&lt;/h1&gt;</span>
<span class="line">                &lt;p&gt;当前的鼠标位置是 ({props.x}, {props.y})&lt;/p&gt;</span>
<span class="line">            &lt;/&gt;</span>
<span class="line">        )</span>
<span class="line">    }</span>
<span class="line">&lt;/MouseTracker &gt;, document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-render属性" tabindex="-1"><a class="header-anchor" href="#_3-3-render属性"><span>3.3 render属性</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">state</span><span class="token operator">:</span> State</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> React<span class="token punctuation">.</span>ReactNode</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">MouseTracker</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token operator">&lt;</span>Props<span class="token punctuation">,</span> State<span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function-variable function">handleMouseMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">x</span><span class="token operator">:</span> event<span class="token punctuation">.</span>clientX<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">y</span><span class="token operator">:</span> event<span class="token punctuation">.</span>clientY</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>div onMouseMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseMove<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">                <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span> MouseTracker render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">params</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>移动鼠标<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token function">当前的鼠标位置是</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>params<span class="token punctuation">.</span>x<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>params<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-hoc" tabindex="-1"><a class="header-anchor" href="#_3-4-hoc"><span>3.4 HOC</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import React, { Component } from &#39;react&#39;;</span>
<span class="line">import ReactDOM from &#39;react-dom&#39;;</span>
<span class="line">interface Props {</span>
<span class="line">    render: (state: State) =&gt; React.ReactNode</span>
<span class="line">}</span>
<span class="line">interface State {</span>
<span class="line">    x: number;</span>
<span class="line">    y: number;</span>
<span class="line">}</span>
<span class="line">class MouseTracker extends React.Component&lt;Props, State&gt; {</span>
<span class="line">    constructor(props: Props) {</span>
<span class="line">        super(props);</span>
<span class="line">        this.state = { x: 0, y: 0 };</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    handleMouseMove = (event: React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; {</span>
<span class="line">        this.setState({</span>
<span class="line">            x: event.clientX,</span>
<span class="line">            y: event.clientY</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    render() {</span>
<span class="line">        return (</span>
<span class="line">            &lt;div onMouseMove={this.handleMouseMove}&gt;</span>
<span class="line">                {this.props.render(this.state)}</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        );</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">+function withMouse(Component: React.FC&lt;State&gt;) {</span>
<span class="line">+    return (</span>
<span class="line">+        (props: State) =&gt; &lt;MouseTracker render={mouse =&gt; &lt;Component {...props} {...mouse} /&gt;} /&gt;</span>
<span class="line">+    )</span>
<span class="line">+}</span>
<span class="line">+let App = withMouse((props: State) =&gt; (</span>
<span class="line">+    &lt;&gt;</span>
<span class="line">+        &lt;h1&gt;移动鼠标!&lt;/h1&gt;</span>
<span class="line">+        &lt;p&gt;当前的鼠标位置是 ({props.x}, {props.y})&lt;/p&gt;</span>
<span class="line">+    &lt;/&gt;</span>
<span class="line">+));</span>
<span class="line">ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;root&#39;));</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33)])])}const c=s(t,[["render",l]]),r=JSON.parse('{"path":"/strong/82.2.react-high.html","title":"","lang":"en-US","frontmatter":{},"git":{"updatedTime":1681290319000,"contributors":[{"name":"yutao","username":"yutao","email":"642231346@qq.com","commits":1,"url":"https://github.com/yutao"}],"changelog":[{"hash":"f5ab8c9d34991ec274f7f652439afe5b2afb6147","time":1681290319000,"email":"642231346@qq.com","author":"yutao","message":"modify"}]},"filePathRelative":"strong/82.2.react-high.md"}');export{c as comp,r as data};
