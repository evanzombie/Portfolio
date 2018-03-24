import React from "react";
import { render } from "react-dom";
import App from "./App";

const renderApp = () => {
	render(<App />, document.getElementById("app"));
};

renderApp();

if (module.hot) {
	module.hot.accept("./App", () => {
		renderApp();
	});
}

// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Landing from "./Landing";
// import Search from "./Search";

// const FourOhFour = () => <h1>404</h1>;

// const App = () => (
// 	<BrowserRouter>
// 		<div className="app">
// 			<Switch>
// 				<Route exact path="/" component={Landing} />
// 				<Route path="/search" component={Search} />
// 				<Route component={FourOhFour} />
// 			</Switch>
// 		</div>
// 	</BrowserRouter>
// );

// render(<App />, document.getElementById("app"));

// // const ce = React.createElement;

// const MyTitle = function(props) {
// 	// return ce("div", null, ce("h1", { style: { color: props.color } }, props.title));
// 	// const style = { color: props.color };
// 	return (
// 		<div>
// 			<h1 style={{ color: props.color }}>{props.title}</h1>
// 		</div>
// 	);
// };

// const MyFirstComponent = function() {
// 	// return ce(
// 	// 	"div",
// 	// 	null,
// 	// 	ce(MyTitle, { title: "AAA", color: "YellowGreen" }),
// 	// 	ce(MyTitle, { title: "BBB", color: "GreenYellow" }),
// 	// 	ce(MyTitle, { title: "CCC", color: "LimeGreen" }),
// 	// 	ce(MyTitle, { title: "DDD", color: "Lime" }),
// 	// 	ce(MyTitle, { title: "DDD", color: "peru" })
// 	// );

// 	return (
// 		<div id="my-first-component">
// 			<MyTitle title="AAA" color="YellowGreen" />
// 			<MyTitle title="BBB" color="GreenYellow" />
// 			<MyTitle title="CCC" color="LimeGreen" />
// 			<MyTitle title="DDD" color="peru" />
// 		</div>
// 	);
// };
// // render(ce(MyFirstComponent), document.getElementById("app"));
// render(<MyFirstComponent />, document.getElementById("app"));

// // const App = () =>{
// //   return(
// //     <div className ='app'>
// //       <div className = 'landing'>

// //     </div>
// //   )
// // }
