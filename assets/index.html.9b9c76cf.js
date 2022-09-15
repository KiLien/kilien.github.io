import{_ as n,o as s,c as a,a as t}from"./app.6fedf891.js";var e="/assets/b23f547b7028438692f77039d364cddf.95e3d361.png";const p={},o=t(`<h2 id="\u5982\u4F55\u663E\u793A-\u6B63\u786E-\u7684\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u663E\u793A-\u6B63\u786E-\u7684\u9875\u9762" aria-hidden="true">#</a> \u5982\u4F55\u663E\u793A\u201C\u6B63\u786E\u201D\u7684\u9875\u9762</h2><p>\u5F53\u7528\u6237\u8FDB\u5165\u6D3B\u52A8\u9875\u9762\u65F6\uFF0C\u7528\u6237\u94FE\u63A5\u7684\u662F\u975E\u5F53\u524D\u9875\u9762\u671F\u671B\u7684\u7F51\u7EDC\uFF0C\u4F8B\u5982\u5F53\u524D\u9875\u9762\u63A5\u5165\u5408\u7EA6\u4E3A BSC \u94FE\uFF0C\u7528\u6237 MetaMask \u94FE\u63A5\u7684\u4E3A ETH \u94FE\uFF0C\u5982\u679C\u76F4\u63A5\u8BF7\u6C42\u5408\u7EA6\u4F1A\u62A5\u9519\u5BFC\u81F4\u9875\u9762\u663E\u793A\u6570\u636E\u9519\u4E71\u751A\u81F3\u65E0\u6CD5\u6253\u5F00\u3002</p><p>\u5982\u4F55\u505A\u5230\u83B7\u53D6\u5408\u7EA6\u7684\u4FE1\u606F\u662F\u6B63\u786E\u7684\uFF1F</p><p>\u53C2\u8003\u5B98\u65B9\u793A\u4F8B\uFF1A <a href="https://docs.ethers.io/v5/api/contract/example/" target="_blank" rel="noopener noreferrer">Connecting to a Contract</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// A Human-Readable ABI; for interacting with the contract, we</span>
<span class="token comment">// must include any fragment we wish to use</span>
<span class="token keyword">const</span> abi <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// Read-Only Functions</span>
  <span class="token string">&quot;function balanceOf(address owner) view returns (uint256)&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;function decimals() view returns (uint8)&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;function symbol() view returns (string)&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Authenticated Functions</span>
  <span class="token string">&quot;function transfer(address to, uint amount) returns (bool)&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Events</span>
  <span class="token string">&quot;event Transfer(address indexed from, address indexed to, uint amount)&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// This can be an address or an ENS name</span>
<span class="token keyword">const</span> address <span class="token operator">=</span> <span class="token string">&quot;0x764a06fDdcE6b8895b6E7F9ba2874711BF31edEa&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Read-Only; By connecting to a Provider, allows:</span>
<span class="token comment">// - Any constant function</span>
<span class="token comment">// - Querying Filters</span>
<span class="token comment">// - Populating Unsigned Transactions for non-constant methods</span>
<span class="token comment">// - Estimating Gas for non-constant (as an anonymous sender)</span>
<span class="token comment">// - Static Calling non-constant methods (as anonymous sender)</span>
<span class="token keyword">const</span> erc20 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers<span class="token punctuation">.</span>Contract</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> abi<span class="token punctuation">,</span> provider<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Read-Write; By connecting to a Signer, allows:</span>
<span class="token comment">// - Everything from Read-Only (except as Signer, not anonymous)</span>
<span class="token comment">// - Sending transactions for non-constant functions</span>
<span class="token keyword">const</span> erc20_rw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers<span class="token punctuation">.</span>Contract</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> abi<span class="token punctuation">,</span> signer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u53EF\u4EE5\u5728\u6784\u5EFA\u5408\u7EA6\u5BF9\u8C61\u540C\u6B65\u6CE8\u5165 <a href="https://docs.ethers.io/v5/api/providers/jsonrpc-provider/" target="_blank" rel="noopener noreferrer">JsonRpcProvider</a> \u4EE5\u652F\u6491\u8FD0\u884C\u5408\u7EA6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> rpcUrls <span class="token operator">=</span> <span class="token string">&quot;https://bsc-dataseed1.ninicoin.io&quot;</span><span class="token punctuation">;</span> <span class="token comment">// bsc rpc url</span>
<span class="token keyword">const</span> jsonProvider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers<span class="token punctuation">.</span>providers<span class="token punctuation">.</span>JsonRpcProvider</span><span class="token punctuation">(</span>rpcUrls<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> erc20 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ethers<span class="token punctuation">.</span>Contract</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> abi<span class="token punctuation">,</span> jsonProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u8BE5\u65B9\u6CD5\u53EA\u80FD\u8BFB\u53D6\u5408\u7EA6\u53EA\u8BFB\u65B9\u6CD5\uFF0C\u65E0\u6CD5\u8C03\u7528\u5199\u65B9\u6CD5\uFF08\u5982\uFF1ATransfer\uFF09\uFF0C\u82E5\u9700\u8981\u5B9E\u65BD\u4EA4\u4E92\u6027\u64CD\u4F5C\uFF0C\u5E94\u63D0\u9192\u7528\u6237\u5207\u6362\u81F3\u6B63\u786E\u7684\u94FE\u3002</p><p><a href="https://docs.ethers.io/v5/api/contract/example/" target="_blank" rel="noopener noreferrer"></a></p><h2 id="\u5207\u94FE\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5207\u94FE\u64CD\u4F5C" aria-hidden="true">#</a> \u5207\u94FE\u64CD\u4F5C</h2><p><a href="https://docs.metamask.io/guide/rpc-api.html#unrestricted-methods" target="_blank" rel="noopener noreferrer">wallet_addEthereumChain</a><img src="`+e+`" alt="32e87515f76cc907122b31920f4e562c.png"></p><p>\u6784\u5EFA\u591A\u94FE\u6570\u7EC4\uFF0C\u6570\u7EC4\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AddEthereumChainParameter</span> <span class="token punctuation">{</span>
  chainId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// A 0x-prefixed hexadecimal string</span>
  chainName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  nativeCurrency<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 2-6 characters long</span>
    decimals<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  rpcUrls<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  blockExplorerUrls<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  iconUrls<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Currently ignored.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u5C1D\u8BD5\u8C03\u7528 ethereum \u65B9\u6CD5 <code>wallet_switchEthereumChain</code> \u5207\u6362\u81F3\u7528\u6237\u5DF2\u6DFB\u52A0\u8FC7\u7684\u94FE</li></ol><blockquote><p><code>wallet_switchEthereumChain</code> \u65B9\u6CD5\u5165\u53C2\u4E3A \u6307\u5B9A\u94FE ID: <code>[{ chainId: &#39;0x38&#39; }]</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ethereum<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;wallet_switchEthereumChain&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">chainId</span><span class="token operator">:</span> <span class="token string">&quot;0x38&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5982\u679C\u8BF7\u6C42\u6210\u529F\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE null\uFF0C\u5426\u5219\u8FD4\u56DE\u9519\u8BEF\u3002</li><li>\u5982\u679C\u62A5\u9519\u5219\u76D1\u6D4B\u62A5\u9519\u4FE1\u606F\uFF0C\u62A5\u9519\u4EE3\u7801\u4E3A 4902 \u5219\u8868\u793A\u672A\u6DFB\u52A0\u8FC7\u76EE\u6807\u94FE\u81F3 MetaMask \uFF0C\u8C03\u7528 <code>wallet_addEthereumChain</code> \u65B0\u589E\u76EE\u6807\u94FE</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ethereum<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;wallet_addEthereumChain&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> supportedChains<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B8C\u6574\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> supportedChains <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">chainId</span><span class="token operator">:</span> <span class="token string">&quot;0x38&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chainName</span><span class="token operator">:</span> <span class="token string">&quot;Binance Smart Chain&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nativeCurrency</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;BNB&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;BNB&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">decimals</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rpcUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://bsc-dataseed1.ninicoin.io&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">blockExplorerUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://bscscan.com/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ethereum<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;wallet_switchEthereumChain&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">chainId</span><span class="token operator">:</span> <span class="token string">&quot;0x38&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>switchError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// This error code indicates that the chain has not been added to MetaMask.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>switchError<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">4902</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> ethereum<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;wallet_addEthereumChain&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> supportedChains<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>addError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// handle &quot;add&quot; error</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// handle other &quot;switch&quot; errors</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ps: <strong>ETH</strong> chainId \u4E3A <code>0x1</code></p>`,21),c=[o];function i(l,r){return s(),a("div",null,c)}var d=n(p,[["render",i],["__file","index.html.vue"]]);export{d as default};
