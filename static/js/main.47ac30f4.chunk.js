(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var s=r(3),n=r(4),a=r(6),i=r(5),c=r(8),u=r(1),o=r.n(u),l=r(7),h=r.n(l),j=(r(14),r(0));function d(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var s=Object(c.a)(t[r],3),n=s[0],a=s[1],i=s[2];if(e[n]&&e[n]===e[a]&&e[n]===e[i])return e[n]}return null}var x=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(o.a.Component),m=function(e){Object(a.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,location:Array(9).fill(null)},n}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice(),s=this.state.location;s[this.state.stepNumber+1]=e,b(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,location:s}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=b(s.squares),a=this.state.location,i=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start",n=r?a[r]:-1,i=-1===n?-1:n%3+1,c=-1===n?-1:Math.floor(n/3)+1,u=r?"("+c+", "+i+")":"";return Object(j.jsxs)("li",{children:[Object(j.jsxs)("b",{children:[u," "]}),Object(j.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})]},r)}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(x,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{children:e}),Object(j.jsx)("ol",{children:i})]})]})}}]),r}(o.a.Component);h.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.47ac30f4.chunk.js.map