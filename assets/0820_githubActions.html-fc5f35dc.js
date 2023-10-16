import{_ as a,r as o,o as i,c as l,a as n,b as e,e as t,d as r}from"./app-c1b3e40b.js";const c={},d=n("h1",{id:"github-actions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-actions","aria-hidden":"true"},"#"),e(" 4️⃣ GitHub Actions")],-1),p=n("h2",{id:"what-i-ve-learned",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#what-i-ve-learned","aria-hidden":"true"},"#"),e(" What I've learned")],-1),u={href:"https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zeddios.tistory.com/1047",target:"_blank",rel:"noopener noreferrer"},g=r(`<h2 id="what-i-ve-done" tabindex="-1"><a class="header-anchor" href="#what-i-ve-done" aria-hidden="true">#</a> What I&#39;ve done</h2><ul><li>.github/workflows/docs.yml 생성 <ol><li><strong>.github</strong> 폴더 생성</li><li>하위에 <strong>workflows</strong> 폴더 생성</li><li>하위에 <strong>docs.yml</strong> 파일 생성</li><li>GitHub Pages에서 제공하는 코드(Click to expand sample config) 그대로 복사-붙여넣기</li></ol></li><li>GitHub Actions 동작용 토큰 생성 <ol><li>위에 링크한 참고 자료를 보면서 토큰 생성</li><li>생성한 토큰 이름을 <strong>docs.yml</strong> 파일에 등록<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">env</span><span class="token operator">:</span>
<span class="token operator">...</span>
<span class="token constant">GITHUB_TOKEN</span><span class="token operator">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">DEPLOY_TOKEN</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">// DEPLOY_TOKEN이 생성한 토큰의 이름이다</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li>GitHub Actions를 동작할 때 필요한 페이지 설정 <ol><li>GitHub Repository &gt; Settings &gt; Code and automation 하위 <strong>Pages</strong> 열기</li><li>Build and deployment 항목 내 Branch를 gh-pages로 변경, 경로는 /(root)로 설정 후 <strong>Save</strong> 클릭</li></ol></li></ul>`,2);function _(v,b){const s=o("ExternalLinkIcon");return i(),l("div",null,[d,p,n("ul",null,[n("li",null,[e("내가 원하는 URL로 설정하기 "),n("ul",null,[n("li",null,[n("a",u,[e("GitHub Pages"),t(s)])])])]),n("li",null,[e("GitHub Actions에서 사용할 토큰 생성하기 "),n("ul",null,[n("li",null,[n("a",h,[e("참고 자료"),t(s)])])])])]),g])}const k=a(c,[["render",_],["__file","0820_githubActions.html.vue"]]);export{k as default};
