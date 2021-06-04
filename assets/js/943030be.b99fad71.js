(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[6115],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||a;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6060:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=["components"],s={title:"Substrate Uri"},d={unversionedId:"keyring/start/suri",id:"keyring/start/suri",isDocsHomePage:!1,title:"Substrate Uri",description:"Substrate has a standard derivation format that applies on any seeds and mnemonics. This means that for a given secret, you can apply hard derivations, soft derivations to generate a new pair. In all the examples we have used either addFromUri or createFromUri and have supplied all with an empty derivation path.",source:"@site/docs/keyring/start/suri.md",sourceDirName:"keyring/start",slug:"/keyring/start/suri",permalink:"/docs/keyring/start/suri",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/keyring/start/suri.md",version:"current",frontMatter:{title:"Substrate Uri"},sidebar:"reference",previous:{title:"Sign & Verify",permalink:"/docs/keyring/start/sign-verify"},next:{title:"FAQ",permalink:"/docs/keyring/FAQ"}},l=[{value:"Dev accounts",id:"dev-accounts",children:[]},{value:"Putting it together",id:"putting-it-together",children:[]},{value:"Working with non-mnemonics",id:"working-with-non-mnemonics",children:[]},{value:"Overview... done.",id:"overview-done",children:[]}],c={toc:l};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Substrate has a standard derivation format that applies on any seeds and mnemonics. This means that for a given secret, you can apply hard derivations, soft derivations to generate a new pair. In all the examples we have used either ",(0,a.kt)("inlineCode",{parentName:"p"},"addFromUri")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"createFromUri")," and have supplied all with an empty derivation path."),(0,a.kt)("p",null,"In general the derivation format is specified as ",(0,a.kt)("inlineCode",{parentName:"p"},"<mnemonic or mini-secret>[//hard-derivation][/soft-derivation][///password]")," where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mnemonic or mini-secret")," is either of the secret types. For mini-secrets we would supply 32 bytes in hex format (",(0,a.kt)("inlineCode",{parentName:"li"},"0x"),"-prefixed with 64 additional ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"-",(0,a.kt)("inlineCode",{parentName:"li"},"f")," bytes)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hard-derivation")," is a hard path, always prefixed by ",(0,a.kt)("inlineCode",{parentName:"li"},"//")," to indicate the type. Multiple hard derivations can be applied, i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"//hard//again")," would be valid. Underlying it will apply a hashing function on the secret, generating a new secret for the remainder of the derivations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"soft-derivation")," is a soft path, always prefixed by ",(0,a.kt)("inlineCode",{parentName:"li"},"/"),". This derivation is only available and supported on ",(0,a.kt)("inlineCode",{parentName:"li"},"sr25519")," pairs. While other crypto can do soft derivations, the Substrate implementation only supports this on Schnorrkel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password"),", always prefixed by ",(0,a.kt)("inlineCode",{parentName:"li"},"///")," indicates a derivation password, not to be confused with a pair password as implemented on the keyring. Using these means that an initial kdf is applied upon derivation, which means that even if the seed would leak, accounts cannot be derived without the initial password. Unlike hard and soft derivations that can be mixed, only a single password should be specified per derivation.")),(0,a.kt)("h2",{id:"dev-accounts"},"Dev accounts"),(0,a.kt)("p",null,"In a preceding section we created a development-specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Alice")," account. Now that we have a breakdown of the suri formats, a note on these. For development chains, these accounts are pre-funded and derived from a known mnemonic via ",(0,a.kt)("inlineCode",{parentName:"p"},"sr25519")," crypto. Since these are known, the Keyring will use their seed (aligning with subkey) when no mnemonic is specified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// sr25519 keyring\nconst keyring = new Keyring({ type: 'sr25519' });\n\n// our default dev addresses with hard derivation\n// (no mnemonic, defaulted to known)\nconsole.log(keyring.createFromUri('//Alice').address);\nconsole.log(keyring.createFromUri('//Bob').address);\nconsole.log(keyring.createFromUri('//Charlie').address);\nconsole.log(keyring.createFromUri('//Dave').address);\nconsole.log(keyring.createFromUri('//Eve').address);\nconsole.log(keyring.createFromUri('//Ferdie').address);\n")),(0,a.kt)("p",null,"In cases where you want to use the dev seed itself (instead of it being defaulted), it is ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom drive obey lake curtain smoke basket hold race lonely fit walk"),"."),(0,a.kt)("h2",{id:"putting-it-together"},"Putting it together"),(0,a.kt)("p",null,"With an understanding of the suri in-hand, we can now derive multiple accounts from the same seed/mnemonic using derivation paths."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// known mnemonic, well, now it is - don't use it for funds\nconst MNEMONIC = 'sample split bamboo west visual approve brain fox arch impact relief smile';\n\n// type: ed25519\nconst keyring = new Keyring();\n\n// our ed25519 pairs\nconsole.log(keyring.createFromUri(MNEMONIC).address);\nconsole.log(keyring.createFromUri(`${MNEMONIC}//hardA//hardB`).address);\nconsole.log(keyring.createFromUri(`${MNEMONIC}//hard///password`).address);\n\n// some sr25519 pairs\nconsole.log(keyring.createFromUri(MNEMONIC, {}, { type: 'sr25519' }).address);\nconsole.log(keyring.createFromUri(`${MNEMONIC}//hard/soft`, {}, { type: 'sr25519' }).address);\n")),(0,a.kt)("h2",{id:"working-with-non-mnemonics"},"Working with non-mnemonics"),(0,a.kt)("p",null,"Additionally, as indicated the ",(0,a.kt)("inlineCode",{parentName:"p"},"{add, create}FromUri")," functions can also take a raw mini secret. Although mnemonic interactions are generally preferred (since it had checksums and users are generally bad at generating 32-bytes by themselves), raw secrets can be applied."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// imports we are using here\nimport { u8aToHex } from '@polkadot/util';\nimport { mnemonicGenerate, mnemonicToMiniSecret, randomAsHex } from '@polkadot/util-crypto';\n\n// generate a mnemonic & some mini-secrets\nconst mnemonic = mnemonicGenerate();\nconst mnemonicMini = mnemonicToMiniSecret(mnemonic);\nconst randomMini = randomAsHex(32);\n\n// these will be equivalent\nconsole.log(keyring.createFromUri(mnemonic).address);\nconsole.log(keyring.createFromUri(u8aToHex(mnemonicMini)).address);\n\n// a random seed with derivation applied\nconsole.log(keyring.createFromUri(`${randomMini}//hard`).address);\n")),(0,a.kt)("h2",{id:"overview-done"},"Overview... done."),(0,a.kt)("p",null,"At this point you should have a good grasp on the Keyring, the interactions with pairs and how this relates to Substrate usage and addresses. While the keyring has additional functionality we have covered the basic interactions in-depth. Check back in the future for expansions on the features contained here."))}p.isMDXComponent=!0}}]);