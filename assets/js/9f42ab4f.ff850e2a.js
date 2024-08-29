"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[5343],{50:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=t(4848),s=t(8453),o=t(4192);const a={id:"btc-timestamping",sidebar_label:"Bitcoin Timestamping",hide_table_of_contents:!0},c="Bitcoin Timestamping",r={id:"introduction/btc-timestamping",title:"Bitcoin Timestamping",description:"The Babylon BTC timestamping protocol allows any arbitrary",source:"@site/docs/introduction/btc-timestamping.md",sourceDirName:"introduction",slug:"/introduction/btc-timestamping",permalink:"/docs/introduction/btc-timestamping",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/btc-timestamping.md",tags:[],version:"current",frontMatter:{id:"btc-timestamping",sidebar_label:"Bitcoin Timestamping",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylon Overview",permalink:"/docs/introduction/babylon-overview"},next:{title:"Bitcoin Staking",permalink:"/docs/introduction/btc-staking"}},l={},h=[{value:"Long-Range Attack: A Fundamental Threat to PoS Chains <a></a>",id:"long-range-attack-a-fundamental-threat-to-pos-chains-",level:2},{value:"Secure PoS using BTC timestamping <a></a>",id:"secure-pos-using-btc-timestamping-",level:2},{value:"Benefits of BTC Timestamping to PoS Chains <a></a>",id:"benefits-of-btc-timestamping-to-pos-chains-",level:2}];function d(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"bitcoin-timestamping",children:"Bitcoin Timestamping"}),"\n",(0,i.jsx)(e.p,{children:"The Babylon BTC timestamping protocol allows any arbitrary\ndata submitted to Babylon to obtain Bitcoin timestamps.\nThe security level of these timestamps in terms of immutability\nincreases over time because more works are added on top of them over time.\nA primary use case of this protocol is to timestamp PoS blockchains\nto enhance their integrity and security,\nsuch as resisting against long range attacks.\nThe protocol includes Bitcoin as the timestamping service,\nthe Babylon blockchain as the checkpoint aggregation and\ndata availability service, and\nother PoS blockchains as the consumers of security."}),"\n",(0,i.jsx)(e.p,{children:"Such security enables several use cases:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Fast Unbonding:"})," PoS blockchains require social consensus to\ncircumvent long range attacks and this leads to\nlong unbonding periods.\nBitcoin security replaces social consensus and\nreduces unbonding periods to a few hours."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Bootstrapping new zones:"})," Bitcoin security can be used to\nbootstrap new zones which have low token valuation."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Protecting important transactions:"})," Bitcoin security can be\nused to protect important transactions while\nnormal transactions get fast finality."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Censorship resistance:"})," Transactions that are censored\ncan use Babylon as a backup to enter the ledger."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Bitcoin staking:"})," Bitcoin timestamping protocol serves\nas a building block for our\n",(0,i.jsx)(e.a,{href:"/docs/introduction/btc-staking",children:"Bitcoin staking protocol"}),",\nbecause it provides synchronization between PoS blockchains and Bitcoin."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"In addition, via CosmWasm, one can develop timestamping services with any\ndata verification rules."}),"\n",(0,i.jsx)("div",{class:"pdf-file-banner",children:(0,i.jsxs)("a",{class:"link",target:"_blank",href:"https://arxiv.org/pdf/2207.08392.pdf",children:[(0,i.jsx)("div",{class:"icon-holder",children:(0,i.jsx)(o.A,{class:"icon",alt:"paper clip"})}),(0,i.jsxs)("div",{class:"info",children:[(0,i.jsx)("p",{class:"title",children:"BTC timestamping whitepaper"}),(0,i.jsx)("p",{class:"subtitle",children:"PDF"})]}),(0,i.jsx)("p",{class:"size",children:"1.1MB"})]})}),"\n",(0,i.jsx)(e.p,{children:"In the following, we explore the BTC Timestamping Protocol's use case in\ndetail."}),"\n",(0,i.jsxs)(e.h2,{id:"long-range-attack-a-fundamental-threat-to-pos-chains-",children:["Long-Range Attack: A Fundamental Threat to PoS Chains ",(0,i.jsx)("a",{id:"long"})]}),"\n",(0,i.jsx)(e.p,{children:"By PoS chains, we refer to BFT (Byzantine-fault-tolerent) PoS chains that\nrequire a 2/3 majority vote from their validators to confirm a block.\nPoS chains are not supposed to fork, and when forking happens,\nthe chain is attacked:\nTo have 2/3 majority vote for both forks,\nat least 1/3 of the validators have double-voted by signing both forks,\nwhich is a prohibited behavior by the consensus protocol."}),"\n",(0,i.jsxs)(e.p,{children:["The picture below illustrates a forking attack to a hypothetical\nPoS chain called ",(0,i.jsx)(e.strong,{children:"\u201cRugpull\u201c"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Forking Attack",src:t(3405).A+"",width:"2120",height:"759"})}),"\n",(0,i.jsx)(e.p,{children:"To deter such attacks, most PoS chains only allow accounts who have\nbonded their tokens (a.k.a staking) to be validators.\nThis way, if a validator is caught double signing,\nits bonded stake can be slashed by the consensus protocol in both forks,\ncausing total economical loss to this malicious validator."}),"\n",(0,i.jsx)(e.p,{children:"This deterrence seems to provide slashable security to PoS chains.\nHowever, this requires the remaining validators to perceive both forks\nwhile the malicious validators are still bonded.\nTherefore, to avoid slashing, the malicious validators can first unbond\nfrom the first fork and then create the second fork from a block height\nwhere they are still validators.\nThis way, the malicious validators will not be slashable in\nthe first fork since they do not have a bonded stake.\nWhat\u2019s even worse is that once the attack happens,\nnew users of the PoS chain cannot tell which fork they should follow."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Long-range Attack",src:t(8216).A+"",width:"1729",height:"531"})}),"\n",(0,i.jsx)(e.p,{children:"This attack is called the long-range attack,\nwhich renders PoS chains not slashable and secure.\nThis attack is fundamental and cannot be solved by modifying the\nconsensus protocol without an extra source of trust.\nTo alleviate this threat, some PoS chains resort to social consensus,\nwhere the stakeholders periodically make off-chain decisions on the\ncorrect block at the latest height and ignore any other potential forks.\nHowever, this approach ties the chain's security to the\nparticipating stakeholders' subjective opinions.\nThis approach is also called weak subjectivity,\nwhich is against the decentralization principle.\nIn addition, since social consensus takes time,\nmost PoS chains impose a very long stake unbonding time in\nthe order of weeks."}),"\n",(0,i.jsxs)(e.h2,{id:"secure-pos-using-btc-timestamping-",children:["Secure PoS using BTC timestamping ",(0,i.jsx)("a",{id:"time"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Secure PoS",src:t(3211).A+"",width:"5351",height:"1914"})}),"\n",(0,i.jsx)(e.p,{children:"To protect the PoS chain from long-range attacks,\nwe can checkpoint the PoS chain's blocks to BTC and\nimplement a fork choice rule for the fork with\nan earlier BTC timestamp. This way, either"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"The attacking fork will have a later BTC timestamp in the\nBTC canonical chain and will never be chosen by anyone, or"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"In order to be chosen, the attacker will have to create a very long fork\nof BTC in which the attacking PoS fork has an earlier timestamp,\nwhich is economically impossible."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Thus, long-range attacks are neutralized by BTC timestamping."}),"\n",(0,i.jsxs)(e.h2,{id:"benefits-of-btc-timestamping-to-pos-chains-",children:["Benefits of BTC Timestamping to PoS Chains ",(0,i.jsx)("a",{id:"benefit"})]}),"\n",(0,i.jsx)(e.p,{children:"Along with solving long-range attacks,\nthe irreversible BTC timestamps of PoS blocks also\nprovide other security benefits to PoS chains:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"No weak subjectivity"}),": Bitcoin timestamps are objective.\nIt can thus eliminate the dependency of PoS chains on social consensus and\nweak subjectivity."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Shorter Unbonding Time"}),": By replacing social consensus,\nBTC timestamping can reduce the stake unbonding time of\nPoS chains from weeks to one day."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"New Chain Bootstrapping"}),": New PoS chains with low valuation\nare more vulnerable to forking attacks.\nBTC timestamping can help safeguard the chain alone its growth."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Verification of State Sync and Snapshots"}),": The objective truth about\na PoS chain provided by BTC allows the users of the PoS chain to verify\nthe chain state or snapshot it has downloaded from the P2P network."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Protecting Important Transactions"}),": BTC timestamps can be used to\nfurther confirm important PoS transactions at the cost of\nlonger confirmation latency."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Censorship Resistance"}),": BTC timestamping could also be used to fight\nagainst transaction censorship in PoS chains via\nposting censored transactions to BTC."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"However, directly checkpointing to BTC is difficult and unscalable due to\nBTC\u2019s tight space and expensive transaction fees.\nMoreover, BTC cannot verify the checkpointed data.\nThis motivates the creation of Babylon,\nwhich solves all the difficulties with provable security."}),"\n",(0,i.jsx)(e.admonition,{title:"Note",type:"info",children:(0,i.jsxs)(e.p,{children:["Without ",(0,i.jsx)(e.strong,{children:"Babylon"}),", it is difficult for any chain to directly checkpoint\nto ",(0,i.jsx)(e.strong,{children:"Bitcoin"})," due to scalability, cost, code modification, and\nsecurity problems."]})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},4192:(n,e,t)=>{t.d(e,{A:()=>a});var i,s=t(6540);function o(){return o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},o.apply(null,arguments)}const a=n=>{let{title:e,titleId:t,...a}=n;return s.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",stroke:"currentColor",strokeWidth:0,viewBox:"0 0 1024 1024","aria-labelledby":t},a),e?s.createElement("title",{id:t},e):null,i||(i=s.createElement("path",{stroke:"none",d:"M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7s88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9"})))}},3211:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/HowUseCase-9eca05d99ca42eb4e0b5ee74c354176c.png"},3405:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/forking-fab24bb6a9d33c7612ea8bd4d77168b4.gif"},8216:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/longrange-1f85015a2f2c1ecd96d022ceaf8b0232.gif"},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var i=t(6540);const s={},o=i.createContext(s);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);