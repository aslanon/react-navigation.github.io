(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),o=(n(0),n(468)),i={id:"custom-routers",title:"Custom routers",sidebar_label:"Custom routers"},s={id:"version-5.x/custom-routers",title:"Custom routers",description:"The router object provides various helper methods to deal with the state and actions, a reducer to update the state as well as some action creators.",source:"@site/versioned_docs/version-5.x/custom-routers.md",permalink:"/docs/custom-routers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/custom-routers.md",version:"5.x",sidebar_label:"Custom routers",sidebar:"version-5.x/docs",previous:{title:"TabActions reference",permalink:"/docs/tab-actions"},next:{title:"Custom navigators",permalink:"/docs/custom-navigators"}},c=[{value:"Built-In Routers",id:"built-in-routers",children:[]},{value:"Customizing Routers",id:"customizing-routers",children:[{value:"Custom Navigation Actions",id:"custom-navigation-actions",children:[]},{value:"Blocking Navigation Actions",id:"blocking-navigation-actions",children:[]}]}],u={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The router object provides various helper methods to deal with the state and actions, a reducer to update the state as well as some action creators."),Object(o.b)("p",null,"The router is responsible for handling actions dispatched by calling methods on the navigation object. If the router cannot handle an action, it can return ",Object(o.b)("inlineCode",{parentName:"p"},"null"),", which would propagate the action to other routers until it's handled."),Object(o.b)("p",null,"You can make your own router by building an object with the following functions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"type")," - String representing the type of the router, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"'stack'"),", ",Object(o.b)("inlineCode",{parentName:"li"},"'tab'"),", ",Object(o.b)("inlineCode",{parentName:"li"},"'drawer'")," etc."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getInitialState")," - Function which returns the initial state for the navigator. Receives an options object with ",Object(o.b)("inlineCode",{parentName:"li"},"routeNames")," and ",Object(o.b)("inlineCode",{parentName:"li"},"routeParamList")," properties."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getRehydratedState")," - Function which rehydrates the full navigation state from a given partial state. Receives a partial state object and an options object with ",Object(o.b)("inlineCode",{parentName:"li"},"routeNames")," and ",Object(o.b)("inlineCode",{parentName:"li"},"routeParamList")," properties."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getStateForRouteNamesChange")," - Function which takes the current state and updated list of route names, and returns a new state. Receives the state object and an options object with ",Object(o.b)("inlineCode",{parentName:"li"},"routeNames")," and ",Object(o.b)("inlineCode",{parentName:"li"},"routeParamList")," properties."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getStateForAction")," - function which takes the current state and action along with an options object with ",Object(o.b)("inlineCode",{parentName:"li"},"routeNames")," and ",Object(o.b)("inlineCode",{parentName:"li"},"routeParamList")," properties, and returns a new state. If the action cannot be handled, it should return ",Object(o.b)("inlineCode",{parentName:"li"},"null"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getStateForRouteFocus")," - Function which takes the current state and key of a route, and returns a new state with that route focused."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"shouldActionChangeFocus")," - Function which determines whether the action should also change focus in parent navigator. Some actions such as ",Object(o.b)("inlineCode",{parentName:"li"},"NAVIGATE")," can change focus in the parent."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"actionCreators")," - Optional object containing a list of action creators, such as ",Object(o.b)("inlineCode",{parentName:"li"},"push"),", ",Object(o.b)("inlineCode",{parentName:"li"},"pop")," etc. These will be used to add helper methods to the ",Object(o.b)("inlineCode",{parentName:"li"},"navigation")," object to dispatch those actions.")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const router = {\n  type: 'tab',\n\n  getInitialState({ routeNames, routeParamList }) {\n    const index =\n      options.initialRouteName === undefined\n        ? 0\n        : routeNames.indexOf(options.initialRouteName);\n\n    return {\n      stale: false,\n      type: 'tab',\n      key: shortid(),\n      index,\n      routeNames,\n      routes: routeNames.map(name => ({\n        name,\n        key: name,\n        params: routeParamList[name],\n      })),\n    };\n  },\n\n  getRehydratedState(partialState, { routeNames, routeParamList }) {\n    const state = partialState;\n\n    if (state.stale === false) {\n      return state as NavigationState;\n    }\n\n    const routes = state.routes\n      .filter(route => routeNames.includes(route.name))\n      .map(\n        route =>\n          ({\n            ...route,\n            key: route.key || `${route.name}-${shortid()}`,\n            params:\n              routeParamList[route.name] !== undefined\n                ? {\n                    ...routeParamList[route.name],\n                    ...route.params,\n                  }\n                : route.params,\n          } as Route<string>)\n      );\n\n    return {\n      stale: false,\n      type: 'tab',\n      key: shortid(),\n      index:\n        typeof state.index === 'number' && state.index < routes.length\n          ? state.index\n          : 0,\n      routeNames,\n      routes,\n    };\n  },\n\n  getStateForRouteNamesChange(state, { routeNames }) {\n    const routes = state.routes.filter(route =>\n      routeNames.includes(route.name)\n    );\n\n    return {\n      ...state,\n      routeNames,\n      routes,\n      index: Math.min(state.index, routes.length - 1),\n    };\n  },\n\n  getStateForRouteFocus(state, key) {\n    const index = state.routes.findIndex(r => r.key === key);\n\n    if (index === -1 || index === state.index) {\n      return state;\n    }\n\n    return { ...state, index };\n  },\n\n  getStateForAction(state, action) {\n    switch (action.type) {\n      case 'NAVIGATE': {\n        const index = state.routes.findIndex(\n          route => route.name === action.payload.name\n        );\n\n        if (index === -1) {\n          return null;\n        }\n\n        return { ...state, index };\n      }\n\n      default:\n        return BaseRouter.getStateForAction(state, action);\n    }\n  },\n\n  shouldActionChangeFocus() {\n    return false;\n  },\n};\n\nconst SimpleRouter = () => router;\n\nexport default SimpleRouter;\n")),Object(o.b)("h2",{id:"built-in-routers"},"Built-In Routers"),Object(o.b)("p",null,"The library ships with a few standard routers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"StackRouter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TabRouter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DrawerRouter"))),Object(o.b)("h2",{id:"customizing-routers"},"Customizing Routers"),Object(o.b)("p",null,"You can reuse a router and override the router functions as per your needs, such as customizing how existing actions are handled, adding additional actions etc."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/custom-navigators"}),"custom navigators")," for details on how to override the router with a custom router in an existing navigator."),Object(o.b)("h3",{id:"custom-navigation-actions"},"Custom Navigation Actions"),Object(o.b)("p",null,"Let's say you want to add a custom action to clear the history:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { TabRouter } from '@react-navigation/native';\n\nconst MyTabRouter = options => {\n  const router = TabRouter(options);\n\n  return {\n    ...router,\n    getStateForAction(state, action, options) {\n      switch (action.type) {\n        case 'CLEAR_HISTORY':\n          return {\n            ...state,\n            routeKeyHistory: [],\n          };\n        default:\n          return router.getStateForAction(state, action, options);\n      }\n    },\n\n    actionCreators: {\n      ...router.actionCreators,\n      clearHistory() {\n        return { type: 'CLEAR_HISTORY' };\n      },\n    },\n  };\n};\n")),Object(o.b)("h3",{id:"blocking-navigation-actions"},"Blocking Navigation Actions"),Object(o.b)("p",null,"Sometimes you may want to prevent some navigation activity, depending on your route. Let's say, you want to prevent going back if ",Object(o.b)("inlineCode",{parentName:"p"},"isEditing")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { StackRouter } from '@react-navigation/native';\n\nconst MyStackRouter = options => {\n  const router = StackRouter(options);\n\n  return {\n    ...router,\n    getStateForAction(state, action, options) {\n      const result = router.getStateForAction(state, action, options);\n\n      if (\n        result != null &&\n        result.index < state.index &&\n        state.routes[state.index].params?.isEditing\n      ) {\n        // Returning the current state means that the action has been handled, but we don't have a new state\n        return state;\n      }\n\n      return result;\n    },\n  };\n};\n")))}l.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(m,s({ref:t},u,{components:n})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);