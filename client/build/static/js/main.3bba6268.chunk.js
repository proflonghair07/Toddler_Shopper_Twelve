(this["webpackJsonptoddler-shopper"]=this["webpackJsonptoddler-shopper"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},22:function(e,t,a){},32:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/delivery_truck.3df387d4.png"},37:function(e,t,a){e.exports=a(68)},42:function(e,t,a){},43:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),s=(a(42),a(36)),i=a(1),o=a(2),u=(a(43),a(17)),m=a(3),d=a(4),p=a(6),h=a(5);a(13);var E=function(){return r.a.createElement("section",{class:"hero"},r.a.createElement("div",{class:"hero-body"},r.a.createElement("div",null,r.a.createElement("h1",{class:"title"},"Welcome to Toddler Shopper!"),r.a.createElement("h2",{class:"subtitle"},"Get your parents or guardians to help you with this part."))))},f=(a(22),a(14)),b=a.n(f),v=function(e){return e=encodeURI(e),b.a.get("/api/product/category/".concat(e))},g=function(e){return b.a.get("/api/cart/checkout/".concat(e))},y=function(e){return b.a.post("/api/user/create",e)},k=function(e){return b.a.post("/api/user/login",e)},_=function(e,t){var a={userId:t,productId:e};return console.log(a),b.a.post("/api/cart/add",a)},w=function(e){return b.a.delete("/api/cart/clear/".concat(e))},C=function(e,t){var a={userId:e,productId:t};return console.log(a),b.a.post("/api/cart/remove",a)},N=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={emailAddress:"",password:""},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;"password"===n&&(a=a.substring(0,15)),e.setState(Object(u.a)({},n,a))},e.handleFormSubmit=function(t){t.preventDefault(),e.state.emailAddress?e.state.password.length<6?alert("Choose a more secure password"):(y(e.state).then(alert("User registered.")),localStorage.setItem("user",e.state.emailAddress)):alert("Enter your E-mail Address please!"),e.setState({emailAddress:"",password:""})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{class:"card is-center grow",id:"login-card"},r.a.createElement("header",{class:"card-header"},r.a.createElement("p",{class:"card-header-title"},"Register")),r.a.createElement("div",{class:"field"},r.a.createElement("label",{class:"label",id:"email"},"Email"),r.a.createElement("div",{class:"control"},r.a.createElement("input",{class:"input",value:this.state.emailAddress,name:"emailAddress",onChange:this.handleInputChange,type:"text",placeholder:"E-mail Address"}))),r.a.createElement("div",{class:"field"},r.a.createElement("label",{class:"label"},"Password"),r.a.createElement("div",{class:"control"},r.a.createElement("input",{class:"input",value:this.state.password,name:"password",onChange:this.handleInputChange,type:"password",placeholder:"Password"}))),r.a.createElement("button",{className:"button is-primary",onClick:this.handleFormSubmit},"Register"),r.a.createElement("div",{class:"is-center",id:"footer-font"},"Already a Member? Login ",r.a.createElement(i.b,{to:"/",className:"/login"===window.location.pathname?"nav-link active":"nav-link"},r.a.createElement("a",null,"here.")))))}}]),a}(n.Component),j=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={emailAddress:"",password:""},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;"password"===n&&(a=a.substring(0,15)),e.setState(Object(u.a)({},n,a))},e.handleFormSubmit=function(t){t.preventDefault(),e.state.emailAddress?e.state.password.length<6?alert("Choose a more secure password"):(k(e.state).then((function(t){console.log(t),e.props.setUser(t.data),t.data._id&&e.props.history.push("/Main")})),localStorage.setItem("user",e.state.emailAddress)):alert("Enter your E-mail Address please!"),e.setState({emailAddress:"",password:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("div",{class:"card is-center",id:"login-card"},r.a.createElement("header",{class:"card-header"},r.a.createElement("p",{class:"card-header-title"},"Login")),r.a.createElement("div",{class:"field"},r.a.createElement("label",{class:"label",id:"email"},"Email"),r.a.createElement("div",{class:"control"},r.a.createElement("input",{class:"input",value:this.state.emailAddress,name:"emailAddress",onChange:this.handleInputChange,type:"text",placeholder:"E-mail Address"}))),r.a.createElement("div",{class:"field"},r.a.createElement("label",{class:"label"},"Password"),r.a.createElement("div",{class:"control"},r.a.createElement("input",{class:"input",value:this.state.password,name:"password",onChange:this.handleInputChange,type:"password",placeholder:"Password"}))),r.a.createElement("button",{className:"button is-primary",onClick:this.handleFormSubmit},"Login"),r.a.createElement("div",{class:"is-center",id:"footer-font"},"Not a member yet? Create an account ",r.a.createElement(i.b,{to:"/register",className:"/register"===window.location.pathname?"nav-link active":"nav-link"},"here"))))}}]),a}(n.Component);a(12);var O=function(){return r.a.createElement("main",{className:"container"},r.a.createElement("div",{class:"columns is-centered"},r.a.createElement("div",{class:"column has-text-centered is-4"},r.a.createElement(i.b,{to:"/Dolls"},r.a.createElement("div",{class:"card is-centered grow"},r.a.createElement("div",{class:"card-text"},"Dolls")))),r.a.createElement("div",{class:"column has-text-centered is-4"},r.a.createElement(i.b,{to:"/ActionFigures"},r.a.createElement("div",{class:"card is-centered grow"},r.a.createElement("div",{class:"card-text"},"Action Figures")))),r.a.createElement("div",{class:"column"},r.a.createElement(i.b,{to:"/BuildingToys"},r.a.createElement("div",{class:"card is-centered grow"},r.a.createElement("div",{class:"card-text"},"Building Toys"))))),r.a.createElement("div",{class:"columns is-centered"},r.a.createElement("div",{class:"column"},r.a.createElement(i.b,{to:"/ChildrenBooks"},r.a.createElement("div",{class:"card is-centered grow is-vcentered"},r.a.createElement("div",{class:"card-text"},"Children's Books")))),r.a.createElement("div",{class:"column"},r.a.createElement(i.b,{to:"/ToyVehicles"},r.a.createElement("div",{class:"card is-centered grow"},r.a.createElement("div",{class:"card-text"},"Toy Vehicles")))),r.a.createElement("div",{class:"column"},r.a.createElement(i.b,{to:"/KidsElectronicGames"},r.a.createElement("div",{class:"card is-centered grow"},r.a.createElement("div",{class:"card-text"},"Electronic Games"))))),r.a.createElement("br",null))};var I=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title animate__animated animate__backInLeft animate__fast"},"Toddler Shopper"),r.a.createElement(i.b,{to:"/Checkout"},r.a.createElement("button",{class:"button is-primary"},"Checkout ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))))))};a(66);var A=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Contributors:")," ",r.a.createElement("a",{href:"https://github.com/karlavalentina85"},"Karla Silva ",r.a.createElement("i",{class:"fab fa-github-square"}))," ",r.a.createElement("a",{href:"https://github.com/christopherm970"},"Chris Mims ",r.a.createElement("i",{class:"fab fa-github-square"}))," ",r.a.createElement("a",{href:"https://github.com/proflonghair07"},"Murphy Vaughn ",r.a.createElement("i",{class:"fab fa-github-square"})))))};function x(e){var t=e.title,a=e.image,n=e.rating,c=e.rawPrice,l=e.productId,s=e.userId;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{className:"card-img-top",src:a,alt:"page screenshot"})),r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,r.a.createElement("button",{class:"button is-primary",onClick:function(){return _(l,s)}}," Add to Wishlist!")))}var S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={products:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v("dolls").then((function(t){return e.setState({products:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable animate__animated animate__fadeInUp animate__fast"},r.a.createElement("tbody",null,this.state.products.map((function(t){return r.a.createElement(x,{key:t._id,title:t.title,image:t.image,rating:t.rating,rawPrice:t.price,productId:t._id,userId:e.props.user?e.props.user._id:null})})))))}}]),a}(r.a.Component);var M=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Dolls"),r.a.createElement(i.b,{to:"/Checkout"},r.a.createElement("button",{class:"button is-primary"},"Checkout ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))),r.a.createElement(i.b,{to:"/Main"},r.a.createElement("button",{class:"button is-primary"},"Return Home ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))))))},D=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={products:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v("action figures").then((function(t){return e.setState({products:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable"},r.a.createElement("tbody",null,this.state.products.map((function(t){return r.a.createElement(x,{key:t._id,title:t.title,image:t.image,rating:t.rating,rawPrice:t.price,productId:t._id,userId:e.props.user?e.props.user._id:null})})))))}}]),a}(r.a.Component);var P=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Action Figures"),r.a.createElement(i.b,{to:"/Checkout"},r.a.createElement("button",{class:"button is-primary"},"Checkout ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))),r.a.createElement(i.b,{to:"/Main"},r.a.createElement("button",{class:"button is-primary"},"Return Home ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))))))},T=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={products:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v("building toys").then((function(t){return e.setState({products:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable"},r.a.createElement("tbody",null,this.state.products.map((function(t){return r.a.createElement(x,{key:t._id,title:t.title,image:t.image,rating:t.rating,rawPrice:t.price,productId:t._id,userId:e.props.user?e.props.user._id:null})})))))}}]),a}(r.a.Component);var R=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Building Toys"),r.a.createElement(i.b,{to:"/Checkout"},r.a.createElement("button",{class:"button is-primary"},"Checkout ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))),r.a.createElement(i.b,{to:"/Main"},r.a.createElement("button",{class:"button is-primary"},"Return Home ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))))))},B=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={products:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v("children books").then((function(t){return e.setState({products:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable"},r.a.createElement("tbody",null,this.state.products.map((function(t){return r.a.createElement(x,{key:t._id,title:t.title,image:t.image,rating:t.rating,rawPrice:t.price,productId:t._id,userId:e.props.user?e.props.user._id:null})})))))}}]),a}(r.a.Component);var F=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Children's Books"),r.a.createElement(i.b,{to:"/Checkout"},r.a.createElement("button",{class:"button is-primary"},"Checkout ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))),r.a.createElement(i.b,{to:"/Main"},r.a.createElement("button",{class:"button is-primary"},"Return Home ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))))))},H=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={products:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v("toys vehicles").then((function(t){return e.setState({products:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable"},r.a.createElement("tbody",null,this.state.products.map((function(t){return r.a.createElement(x,{key:t._id,title:t.title,image:t.image,rating:t.rating,rawPrice:t.price,productId:t._id,userId:e.props.user?e.props.user._id:null})})))))}}]),a}(r.a.Component);var U=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Toy Vehicles"),r.a.createElement(i.b,{to:"/Checkout"},r.a.createElement("button",{class:"button is-primary"},"Checkout ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))),r.a.createElement(i.b,{to:"/Main"},r.a.createElement("button",{class:"button is-primary"},"Return Home ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))))))},W=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={products:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v("kids electronics games").then((function(t){return e.setState({products:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable"},r.a.createElement("tbody",null,this.state.products.map((function(t){return r.a.createElement(x,{key:t._id,title:t.title,image:t.image,rating:t.rating,rawPrice:t.price,productId:t._id,userId:e.props.user?e.props.user._id:null})})))))}}]),a}(r.a.Component);var G=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Kids Electronic Games"),r.a.createElement(i.b,{to:"/Checkout"},r.a.createElement("button",{class:"button is-primary"},"Checkout ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))),r.a.createElement(i.b,{to:"/Main"},r.a.createElement("button",{class:"button is-primary"},"Return Home ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))))))};function L(e){var t=e.title,a=e.image,n=e.rating,c=e.rawPrice,l=e.productId,s=e.userId;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{className:"card-img-top",src:a,alt:"page screenshot"})),r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,r.a.createElement("button",{class:"button is-danger",onClick:function(){return function(t,a){C(t,a).then((function(t){e.getCartItems()}))}(s,l)}}," Remove from Wishlist!")))}a(32);var V=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getCartItems=function(){console.log("user id",n.props.user._id),g(n.props.user._id).then((function(e){console.log(e.data),console.log(e.data[0].products),console.log(e.data[0]._id),n.setState({products:e.data[0].products,cartId:e.data[0]._id})})).catch((function(e){return console.log(e)}))},n.handleDeleteCart=function(e){w(n.state.cartId).then((function(e){n.props.history.push("/CheckoutTruck")})).catch((function(e){return console.log(e)}))},n.state={products:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;g(this.props.user._id).then((function(t){console.log(t.data),console.log(t.data[0].products),console.log(t.data[0]._id),e.setState({products:t.data[0].products,cartId:t.data[0]._id})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"container"},r.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable animate__animated animate__fadeInUp animate__fast"},r.a.createElement("tbody",null,this.state.products.map((function(t){return r.a.createElement(L,{key:t._id,title:t.title,image:t.image,rating:t.rating,rawPrice:t.price,productId:t._id,userId:e.props.user?e.props.user._id:null,getCartItems:e.getCartItems})})))),r.a.createElement("button",{className:"button is-primary animate__animated animate__pulse animate__infinite\tinfinite",id:"checkout-now",onClick:this.handleDeleteCart},"Checkout Now!"))}}]),a}(r.a.Component);var K=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Checkout"),r.a.createElement(i.b,{to:"/Main"},r.a.createElement("button",{class:"button is-primary"},"Return Home ",r.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"}))))))},q=a(35),J=a.n(q),Y=(a(67),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"container"},r.a.createElement("div",{className:"card animate__animated animate__pulse animate__infinite\tinfinite",id:"checkout-now"},"Your order is on it's way!"),r.a.createElement("img",{className:"animate__animated animate__slideInLeft",id:"truck",src:J.a}),r.a.createElement("div",{class:"fireWorkParticle"}))}}]),a}(r.a.Component));var $=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/register",component:N}),r.a.createElement(o.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(j,{history:e.history,setUser:c})}}),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/Main"},r.a.createElement(I,null),r.a.createElement(O,{user:a})),r.a.createElement(o.a,{exact:!0,path:"/Dolls"},r.a.createElement(M,{user:a}),r.a.createElement(S,{user:a})),r.a.createElement(o.a,{exact:!0,path:"/ActionFigures"},r.a.createElement(P,{user:a}),r.a.createElement(D,{user:a})),r.a.createElement(o.a,{exact:!0,path:"/BuildingToys"},r.a.createElement(R,{user:a}),r.a.createElement(T,{user:a})),r.a.createElement(o.a,{exact:!0,path:"/ChildrenBooks"},r.a.createElement(F,{user:a}),r.a.createElement(B,{user:a})),r.a.createElement(o.a,{exact:!0,path:"/ToyVehicles"},r.a.createElement(U,{user:a}),r.a.createElement(H,{user:a})),r.a.createElement(o.a,{exact:!0,path:"/KidsElectronicGames"},r.a.createElement(G,{user:a}),r.a.createElement(W,{user:a})),r.a.createElement(o.a,{exact:!0,path:"/CheckoutTruck"},r.a.createElement(K,{user:a}),r.a.createElement(Y,{user:a})),r.a.createElement(o.a,{exact:!0,path:"/Checkout",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{user:a}),r.a.createElement(V,{history:e.history,user:a}))}})):null),r.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.3bba6268.chunk.js.map