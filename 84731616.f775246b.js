(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(167)),o={title:"Transactions"},s={unversionedId:"api/start/api.tx",id:"api/start/api.tx",isDocsHomePage:!1,title:"Transactions",description:"Transaction endpoints are exposed, as determined by the metadata, on the api.tx endpoint. These allow you to submit transactions for inclusion in blocks, be it transfers, setting information or anything else your chain supports.",source:"@site/docs/api/start/api.tx.md",slug:"/api/start/api.tx",permalink:"/docs/api/start/api.tx",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/api.tx.md",version:"current",sidebar:"reference",previous:{title:"Query extras",permalink:"/docs/api/start/api.query.other"},next:{title:"Keyring",permalink:"/docs/api/start/keyring"}},c=[{value:"Simple transactions",id:"simple-transactions",children:[]},{value:"Under the hood",id:"under-the-hood",children:[]},{value:"Into the keyring we go",id:"into-the-keyring-we-go",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Transaction endpoints are exposed, as determined by the metadata, on the ",Object(i.b)("inlineCode",{parentName:"p"},"api.tx")," endpoint. These allow you to submit transactions for inclusion in blocks, be it transfers, setting information or anything else your chain supports."),Object(i.b)("h2",{id:"simple-transactions"},"Simple transactions"),Object(i.b)("p",null,"To start off, let's make a balance transfer from Alice to Bob."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"...\n\n// Sign and send a transfer from Alice to Bob\nconst txHash = await api.tx.balances\n  .transfer(BOB, 12345)\n  .signAndSend(alice);\n\n// Show the hash\nconsole.log(`Submitted with hash ${txHash}`);\n")),Object(i.b)("p",null,"We have already become familiar with the ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," syntax that is used throughout the API, in this case it is no different. We construct a transaction by calling ",Object(i.b)("inlineCode",{parentName:"p"},"balances.transfer(<accountId>, <value>)")," with the required params and then as a next step we submit it to the node."),Object(i.b)("p",null,"As with all other API operations, the ",Object(i.b)("inlineCode",{parentName:"p"},"to"),' params just needs to be "account-like" and the value params needs to be "number-like", the API will take care of encoding and conversion into the correct format.'),Object(i.b)("p",null,"The result for this call (we will deal with subscriptions in a short while), is the transaction hash. This is a hash of the data and receiving this does not mean that transaction has been included, but rather only that it has been accepted for propagation by the node. (It can still fail on execution, we will handle this in some of our follow-up sections.)"),Object(i.b)("h2",{id:"under-the-hood"},"Under the hood"),Object(i.b)("p",null,"Despite the single-line format of ",Object(i.b)("inlineCode",{parentName:"p"},"signAndSend"),", there is a lot happening under the hood (and all of this can be manually provided) -"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Based on the sender, the API will query ",Object(i.b)("inlineCode",{parentName:"li"},"system.account")," (or ",Object(i.b)("inlineCode",{parentName:"li"},"system.accountNonce")," on older chains) to determine the next nonce to use"),Object(i.b)("li",{parentName:"ul"},"The API will retrieve the current block hash and use it to create a mortal transaction, i.e. the transaction will only be valid for a limited number of blocks (by default this is 5 mins at 6s block times)"),Object(i.b)("li",{parentName:"ul"},"It will construct a payload and sign this, this includes the ",Object(i.b)("inlineCode",{parentName:"li"},"genesisHash"),", the ",Object(i.b)("inlineCode",{parentName:"li"},"blockHash")," for the start of the mortal era as well as the current chain ",Object(i.b)("inlineCode",{parentName:"li"},"specVersion")),Object(i.b)("li",{parentName:"ul"},"The transaction is submitted to the node")),Object(i.b)("p",null,"As suggested, you can override all of this, i.e. by retrieving the nonce yourself and passing that as an option, i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"signAndSend(alice, { nonce: aliceNonce })"),", this could be useful when manually tracking and submitting transactions in bulk."),Object(i.b)("h2",{id:"into-the-keyring-we-go"},"Into the keyring we go"),Object(i.b)("p",null,"With the examples above, the variable ",Object(i.b)("inlineCode",{parentName:"p"},"alice")," seems to have appeared from thin air. To understand how transactions are signed, we will take a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/keyring"}),"brief diversion into the keyring")," before returning to our regularly scheduled program."))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);