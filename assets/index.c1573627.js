import{R as e,u as p,r as i,a as v,S as N,b as m,c as x,B as F}from"./vendor.88fa51f8.js";const G=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};G();const S="modulepreload",_={},y="/",E=function(a,s){return!s||s.length===0?a():Promise.all(s.map(o=>{if(o=`${y}${o}`,o in _)return;_[o]=!0;const t=o.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":S,t||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),t)return new Promise((d,f)=>{r.addEventListener("load",d),r.addEventListener("error",f)})})).then(()=>a())},C="_wrapper_ssbh8_3",P="_labelName_ssbh8_14",b="_windowName_ssbh8_25",T="_nextButton_ssbh8_39",w="_modalHeader_ssbh8_53";var u={wrapper:C,labelName:P,windowName:b,nextButton:T,modalHeader:w};function B({revele:c,goToCharacterSelect:a,setUserName:s}){const o=t=>s(t.target.value);return c?e.createElement(e.Fragment,null,e.createElement("div",{className:u.wrapper},e.createElement("label",{className:u.labelName,htmlform:"name",htmlFor:"name"},"Enter your Name"),e.createElement("input",{className:u.windowName,type:"texte",id:"name",name:"name",onChange:o}),e.createElement("button",{className:u.nextButton,onClick:a},"Next"))):null}const k="_UserNameDialog_ro8ry_1";var L={UserNameDialog:k};function R({revele:c,toggle:a,goToCharacterSelect:s,setUserName:o}){return e.createElement("div",{className:L.UserNameDialog},e.createElement(B,{revele:c,toggle:a,goToCharacterSelect:s,setUserName:o}))}const A="_home_17nag_3",V="_homeText_17nag_11",$="_homeTitle_17nag_21",D="_homeButton_17nag_30";var h={home:A,homeText:V,homeTitle:$,homeButton:D};function O(){const c=p(),[a,s]=i.exports.useState(!1),[o,t]=i.exports.useState(""),n=()=>{s(!a)},r=()=>{localStorage.removeItem("username"),localStorage.setItem("username",o),c.push("characterselect")};return e.createElement("div",{className:h.home},e.createElement("div",{className:h.homeTitle},e.createElement("h1",null,"The Quest Game")),e.createElement("div",{className:h.homeText},e.createElement("p",null,"Bienvenue au jeu dont vous \xEAtes le h\xE9ros! ")),e.createElement("button",{className:h.homeButton,onClick:n},"PLAY"),e.createElement(R,{revele:a,toggle:n,goToCharacterSelect:r,setUserName:t}))}const g=i.exports.createContext({score:Number(),setScore:()=>{}});function I({children:c}){const[a,s]=i.exports.useState(0);return e.createElement(g.Provider,{value:{score:a,setScore:s}},c)}const U="_GameFinishPageContainer_1l71v_1",j="_GameFinishText_1l71v_10",H="_GameFinishStatus_1l71v_17",z="_GameFinishCaption_1l71v_22",M="_GameFinishNext_1l71v_27",W="_GameFinishChoices_1l71v_32",q="_BackgroundVideo_1l71v_40",Q="_GameFinishScore_1l71v_56";var l={GameFinishPageContainer:U,GameFinishText:j,GameFinishStatus:H,GameFinishCaption:z,GameFinishNext:M,GameFinishChoices:W,BackgroundVideo:q,GameFinishScore:Q},K="/assets/Vintage - 55607.62a2dd99.mp4";function Y(){const c=p(),a=v(),[s,o]=i.exports.useState(!0),{score:t,setScore:n}=i.exports.useContext(g);i.exports.useEffect(()=>{o(a.state.status)},[]);const r=()=>{n(0),c.push("gamepage")},d=()=>{n(0),c.push("characterselect")};return e.createElement("div",{className:l.GameFinishPageContainer},e.createElement("video",{className:l.BackgroundVideo,autoPlay:!0,loop:!0,muted:!0},e.createElement("source",{src:K,type:"video/mp4"})),e.createElement("div",{className:l.GameFinishText},e.createElement("p",{className:l.GameFinishStatus},s?"Victoire":"Perdu"),e.createElement("p",{className:l.GameFinishScore},"Score : ",t),e.createElement("p",{className:l.GameFinishCaption},a.state.caption),e.createElement("p",{className:l.GameFinishNext},"Que souhaitez-vous faire ?")),e.createElement("div",{className:l.GameFinishChoices},e.createElement("button",{onClick:r},"Rejouer l'aventure"),e.createElement("button",{onClick:d},"Retourner \xE0 l'\xE9cran de s\xE9lection")))}const J=i.exports.lazy(()=>E(()=>import("./CharacterSelect.642ddd47.js"),["assets/CharacterSelect.642ddd47.js","assets/CharacterSelect.7794f700.css","assets/vendor.88fa51f8.js"])),X=i.exports.lazy(()=>E(()=>import("./GamePage.8086d925.js"),["assets/GamePage.8086d925.js","assets/GamePage.963c33b4.css","assets/vendor.88fa51f8.js"]));function Z(){return e.createElement("div",{className:"App"},e.createElement(I,null,e.createElement(i.exports.Suspense,{fallback:e.createElement("div",null,"Page is Loading...")},e.createElement(N,null,e.createElement(m,{exact:!0,path:"/",component:O}),e.createElement(m,{path:"/characterselect",component:J}),e.createElement(m,{path:"/gamepage",component:X}),e.createElement(m,{path:"/gamefinish",component:Y})))))}x.render(e.createElement(e.StrictMode,null,e.createElement(F,null,e.createElement(Z,null))),document.getElementById("root"));export{g as S};
