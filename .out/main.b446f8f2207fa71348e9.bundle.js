(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useAuth0}));var _Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(37),_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(293),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(292),DEFAULT_REDIRECT_CALLBACK=function DEFAULT_REDIRECT_CALLBACK(){return window.history.replaceState({},document.title,window.location.pathname)},Auth0Context=react__WEBPACK_IMPORTED_MODULE_4___default.a.createContext(),useAuth0=function useAuth0(){return Object(react__WEBPACK_IMPORTED_MODULE_4__.useContext)(Auth0Context)},Auth0Provider=function Auth0Provider(_ref){var children=_ref.children,_ref$onRedirectCallba=_ref.onRedirectCallback,onRedirectCallback=void 0===_ref$onRedirectCallba?DEFAULT_REDIRECT_CALLBACK:_ref$onRedirectCallba,initOptions=Object(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.a)(_ref,["children","onRedirectCallback"]),_useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(),_useState2=Object(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState,2),isAuthenticated=_useState2[0],setIsAuthenticated=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(),_useState4=Object(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState3,2),user=_useState4[0],setUser=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(),_useState6=Object(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState5,2),auth0Client=_useState6[0],setAuth0=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(!0),_useState8=Object(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState7,2),loading=_useState8[0],setLoading=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(!1),_useState10=Object(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_useState9,2),popupOpen=_useState10[0],setPopupOpen=_useState10[1];Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((function(){(function(){var _ref2=Object(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(){var auth0FromHook,_yield$auth0FromHook$,appState,isAuthenticated,_user;return _Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5__.a)(initOptions);case 2:if(auth0FromHook=_context.sent,setAuth0(auth0FromHook),!window.location.search.includes("code=")||!window.location.search.includes("state=")){_context.next=10;break}return _context.next=7,auth0FromHook.handleRedirectCallback();case 7:_yield$auth0FromHook$=_context.sent,appState=_yield$auth0FromHook$.appState,onRedirectCallback(appState);case 10:return _context.next=12,auth0FromHook.isAuthenticated();case 12:if(isAuthenticated=_context.sent,setIsAuthenticated(isAuthenticated),!isAuthenticated){_context.next=19;break}return _context.next=17,auth0FromHook.getUser();case 17:_user=_context.sent,setUser(_user);case 19:setLoading(!1);case 20:case"end":return _context.stop()}}),_callee)})));return function initAuth0(){return _ref2.apply(this,arguments)}})()()}),[]);var loginWithPopup=function(){var _ref3=Object(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee2(){var params,user,_args2=arguments;return _Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return params=_args2.length>0&&void 0!==_args2[0]?_args2[0]:{},setPopupOpen(!0),_context2.prev=2,_context2.next=5,auth0Client.loginWithPopup(params);case 5:_context2.next=10;break;case 7:_context2.prev=7,_context2.t0=_context2.catch(2),console.error(_context2.t0);case 10:return _context2.prev=10,setPopupOpen(!1),_context2.finish(10);case 13:return _context2.next=15,auth0Client.getUser();case 15:user=_context2.sent,setUser(user),setIsAuthenticated(!0);case 18:case"end":return _context2.stop()}}),_callee2,null,[[2,7,10,13]])})));return function loginWithPopup(){return _ref3.apply(this,arguments)}}(),handleRedirectCallback=function(){var _ref4=Object(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee3(){var user;return _Users_webbersjiang_Documents_GitHub_bug_tracker_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return setLoading(!0),_context3.next=3,auth0Client.handleRedirectCallback();case 3:return _context3.next=5,auth0Client.getUser();case 5:user=_context3.sent,setLoading(!1),setIsAuthenticated(!0),setUser(user);case 9:case"end":return _context3.stop()}}),_callee3)})));return function handleRedirectCallback(){return _ref4.apply(this,arguments)}}();return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Auth0Context.Provider,{value:{isAuthenticated:isAuthenticated,user:user,loading:loading,popupOpen:popupOpen,loginWithPopup:loginWithPopup,handleRedirectCallback:handleRedirectCallback,getIdTokenClaims:function getIdTokenClaims(){return auth0Client.getIdTokenClaims.apply(auth0Client,arguments)},loginWithRedirect:function loginWithRedirect(){return auth0Client.loginWithRedirect.apply(auth0Client,arguments)},getTokenSilently:function getTokenSilently(){return auth0Client.getTokenSilently.apply(auth0Client,arguments)},getTokenWithPopup:function getTokenWithPopup(){return auth0Client.getTokenWithPopup.apply(auth0Client,arguments)},logout:function logout(){return auth0Client.logout.apply(auth0Client,arguments)}}},children)};Auth0Provider.__docgenInfo={description:"",methods:[],displayName:"Auth0Provider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/react-auth0-spa.js"]={name:"Auth0Provider",docgenInfo:Auth0Provider.__docgenInfo,path:"src/utils/react-auth0-spa.js"})},294:function(module,exports,__webpack_require__){__webpack_require__(295),__webpack_require__(441),module.exports=__webpack_require__(442)},359:function(module,exports){},442:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(288);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(634)],module)}.call(this,__webpack_require__(220)(module))},634:function(module,exports,__webpack_require__){var map={"./components/dashBoard/DashBoard.stories.js":660,"./components/issue/Issue.stories.js":661,"./components/issuePage/IssuePage.stories.js":659,"./components/landingPage/LandingPage.stories.js":662,"./components/mainPage/MainPage.stories.js":663,"./components/navbar/NavBar.stories.js":664};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=634},659:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultView",(function(){return IssuePage_stories_defaultView}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),regenerator=__webpack_require__(10),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__(22),axios=__webpack_require__(291),api=__webpack_require__.n(axios).a.create({baseURL:"http://localhost:3001/api/"}),slicedToArray=__webpack_require__(37),objectSpread2=__webpack_require__(38),commentsInitialState={comments:[],comment:""},CommentsReducer_commentsReducer=function commentsReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:commentsInitialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"FETCH_COMMENTS":return Object(objectSpread2.a)({},state,{comments:action.payload});default:return state}},toConsumableArray=__webpack_require__(91),issuesInitialState={issues:[],issue:{},issuesByProject:[],updateIssue:{}},IssuesReducer_issuesReducer=function issuesReducer(){var state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:issuesInitialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"FETCH_ISSUES":return Object(objectSpread2.a)({},state,{issues:action.payload});case"FETCH_ISSUE_BY_ID":return Object(objectSpread2.a)({},state,{issue:action.payload});case"FETCH_ISSUES_BY_PROJECT_ID":return Object(objectSpread2.a)({},state,{issuesByProject:action.payload});case"CREATE_ISSUE":return Object(objectSpread2.a)({},state,{issues:[].concat(Object(toConsumableArray.a)(state.issues),[action.payload]),issuesByProject:[].concat(Object(toConsumableArray.a)(state.issuesByProject),[action.payload])});case"UPDATE_ISSUE":return Object(objectSpread2.a)({},state,{updateIssue:action.payload});case"DELETE_ISSUE":return Object(objectSpread2.a)({},state,{issues:Object(toConsumableArray.a)(state.issues.filter((function(issue){return issue.issueId!==action.payload}))),issuesByProject:Object(toConsumableArray.a)(state.issuesByProject.filter((function(issue){return issue.issueId!==action.payload})))});default:return state}},CommentsContext=react_default.a.createContext(),IssuesContext=react_default.a.createContext();function StoreProvider(_ref){var children=_ref.children,_React$useReducer=react_default.a.useReducer(CommentsReducer_commentsReducer,commentsInitialState),_React$useReducer2=Object(slicedToArray.a)(_React$useReducer,2),commentsState=_React$useReducer2[0],commentsDispatch=_React$useReducer2[1],_React$useReducer3=react_default.a.useReducer(IssuesReducer_issuesReducer,issuesInitialState),_React$useReducer4=Object(slicedToArray.a)(_React$useReducer3,2),issuesState=_React$useReducer4[0],issuesDispatch=_React$useReducer4[1];return react_default.a.createElement(IssuesContext.Provider,{value:{issuesState:issuesState,issuesDispatch:issuesDispatch}},react_default.a.createElement(CommentsContext.Provider,{value:{commentsState:commentsState,commentsDispatch:commentsDispatch}},children))}StoreProvider.__docgenInfo={description:"",methods:[],displayName:"StoreProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Store.jsx"]={name:"StoreProvider",docgenInfo:StoreProvider.__docgenInfo,path:"src/Store.jsx"});var react_auth0_spa=__webpack_require__(120),IssuePage_IssuePage=function IssuePage(){var _React$useContext=react_default.a.useContext(IssuesContext),issuesState=_React$useContext.issuesState,issuesDispatch=_React$useContext.issuesDispatch,getTokenSilently=Object(react_auth0_spa.a)().getTokenSilently,fetchIssues=function(){var _ref=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(){var token,response;return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,getTokenSilently();case 3:return token=_context.sent,_context.next=6,api.get("issues",{headers:{Authorization:"Bearer ".concat(token)}});case 6:return response=_context.sent,_context.abrupt("return",issuesDispatch({type:"FETCH_ISSUES",payload:response.data}));case 10:_context.prev=10,_context.t0=_context.catch(0),console.error(_context.t0);case 13:case"end":return _context.stop()}}),_callee,null,[[0,10]])})));return function fetchIssues(){return _ref.apply(this,arguments)}}(),fetchIssueById=function(){var _ref2=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee2(issue_id){var token,response;return regenerator_default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.prev=0,_context2.next=3,getTokenSilently();case 3:return token=_context2.sent,_context2.next=6,api.get("issues/".concat(issue_id),{headers:{Authorization:"Bearer ".concat(token)}});case 6:return response=_context2.sent,_context2.abrupt("return",issuesDispatch({type:"FETCH_ISSUE_BY_ID",payload:response.data}));case 10:_context2.prev=10,_context2.t0=_context2.catch(0),console.error(_context2.t0);case 13:case"end":return _context2.stop()}}),_callee2,null,[[0,10]])})));return function fetchIssueById(_x){return _ref2.apply(this,arguments)}}(),fetchIssuesByProjectId=function(){var _ref3=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee3(project_id){var token,response;return regenerator_default.a.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.prev=0,_context3.next=3,getTokenSilently();case 3:return token=_context3.sent,_context3.next=6,api.get("issues/projects/".concat(project_id),{headers:{Authorization:"Bearer ".concat(token)}});case 6:return response=_context3.sent,_context3.abrupt("return",issuesDispatch({type:"FETCH_ISSUES_BY_PROJECT_ID",payload:response.data}));case 10:_context3.prev=10,_context3.t0=_context3.catch(0),console.error(_context3.t0);case 13:case"end":return _context3.stop()}}),_callee3,null,[[0,10]])})));return function fetchIssuesByProjectId(_x2){return _ref3.apply(this,arguments)}}(),createIssue=function(){var _ref4=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee4(){var data,token;return regenerator_default.a.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return data={project_id:6,priority_id:"00",user_id:5,status_id:"1",title:"Issue",description:"New Issue",report_date:"2004-10-19T08:23:54.000Z"},_context4.prev=1,_context4.next=4,getTokenSilently();case 4:return token=_context4.sent,_context4.next=7,api.post("issues",data,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(token)}});case 7:return _context4.abrupt("return",issuesDispatch({type:"CREATE_ISSUE",payload:data}));case 10:_context4.prev=10,_context4.t0=_context4.catch(1),console.error(_context4.t0);case 13:case"end":return _context4.stop()}}),_callee4,null,[[1,10]])})));return function createIssue(){return _ref4.apply(this,arguments)}}(),updateIssue=function(){var _ref5=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee5(issue_id){var data,token,response;return regenerator_default.a.wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return data={priority_id:"01",status_id:"1",title:"webberjiang",description:"data security breach"},_context5.prev=1,_context5.next=4,getTokenSilently();case 4:return token=_context5.sent,_context5.next=7,api.patch("issues/".concat(issue_id),data,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(token)}});case 7:return response=_context5.sent,_context5.abrupt("return",issuesDispatch({type:"UPDATE_ISSUE",payload:response.data}));case 11:_context5.prev=11,_context5.t0=_context5.catch(1),console.error(_context5.t0);case 14:case"end":return _context5.stop()}}),_callee5,null,[[1,11]])})));return function updateIssue(_x3){return _ref5.apply(this,arguments)}}(),deleteIssue=function(){var _ref6=Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee6(issue_id){var token;return regenerator_default.a.wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:return _context6.prev=0,_context6.next=3,getTokenSilently();case 3:return token=_context6.sent,_context6.next=6,api.delete("issues/".concat(issue_id),{headers:{Authorization:"Bearer ".concat(token)}});case 6:return _context6.abrupt("return",issuesDispatch({type:"DELETE_ISSUE",payload:issue_id}));case 9:_context6.prev=9,_context6.t0=_context6.catch(0),console.error(_context6.t0);case 12:case"end":return _context6.stop()}}),_callee6,null,[[0,9]])})));return function deleteIssue(_x4){return _ref6.apply(this,arguments)}}();return console.log(issuesState),react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("h1",null,"IssuePage"),react_default.a.createElement("button",{onClick:fetchIssues},"fetchIssues"),react_default.a.createElement("button",{onClick:function onClick(){return fetchIssueById(1)}},"fetchIssueByIssueId"),react_default.a.createElement("button",{onClick:function onClick(){return fetchIssuesByProjectId(6)}},"fetchIssuesByProjectId"),react_default.a.createElement("button",{onClick:createIssue},"createIssue"),react_default.a.createElement("button",{onClick:function onClick(){return updateIssue(86)}},"updateIssue"),react_default.a.createElement("button",{onClick:function onClick(){return deleteIssue(87)}},"deleteIssue"))};IssuePage_IssuePage.__docgenInfo={description:"",methods:[],displayName:"IssuePage"};var issuePage_IssuePage=IssuePage_IssuePage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/issuePage/IssuePage.jsx"]={name:"IssuePage",docgenInfo:IssuePage_IssuePage.__docgenInfo,path:"src/components/issuePage/IssuePage.jsx"});__webpack_exports__.default={title:"IssuePage"};var IssuePage_stories_defaultView=function defaultView(){return react_default.a.createElement(issuePage_IssuePage,null)};IssuePage_stories_defaultView.__docgenInfo={description:"",methods:[],displayName:"defaultView"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/issuePage/IssuePage.stories.js"]={name:"defaultView",docgenInfo:IssuePage_stories_defaultView.__docgenInfo,path:"src/components/issuePage/IssuePage.stories.js"})},660:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultView",(function(){return DashBoard_stories_defaultView}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_router_dom=__webpack_require__(58),DashBoard_DashBoard=function DashBoard(){return react_default.a.createElement("div",null,react_default.a.createElement(react_router_dom.a,{to:"/mainPage"},"To main page"))};DashBoard_DashBoard.__docgenInfo={description:"",methods:[],displayName:"DashBoard"};var dashBoard_DashBoard=DashBoard_DashBoard;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/dashBoard/DashBoard.jsx"]={name:"DashBoard",docgenInfo:DashBoard_DashBoard.__docgenInfo,path:"src/components/dashBoard/DashBoard.jsx"});__webpack_exports__.default={title:"DashBoard"};var DashBoard_stories_defaultView=function defaultView(){return react_default.a.createElement(dashBoard_DashBoard,null)};DashBoard_stories_defaultView.__docgenInfo={description:"",methods:[],displayName:"defaultView"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/dashBoard/DashBoard.stories.js"]={name:"defaultView",docgenInfo:DashBoard_stories_defaultView.__docgenInfo,path:"src/components/dashBoard/DashBoard.stories.js"})},661:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultView",(function(){return Issue_stories_defaultView}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Issue_Issue=function Issue(){return react_default.a.createElement("div",null,"Issue hello")};Issue_Issue.__docgenInfo={description:"",methods:[],displayName:"Issue"};var issue_Issue=Issue_Issue;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/issue/Issue.jsx"]={name:"Issue",docgenInfo:Issue_Issue.__docgenInfo,path:"src/components/issue/Issue.jsx"});__webpack_exports__.default={title:"Issue"};var Issue_stories_defaultView=function defaultView(){return react_default.a.createElement(issue_Issue,null)};Issue_stories_defaultView.__docgenInfo={description:"",methods:[],displayName:"defaultView"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/issue/Issue.stories.js"]={name:"defaultView",docgenInfo:Issue_stories_defaultView.__docgenInfo,path:"src/components/issue/Issue.stories.js"})},662:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultView",(function(){return LandingPage_stories_defaultView}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_router_dom=__webpack_require__(58),LandingPage_LandingPage=function LandingPage(){return react_default.a.createElement("div",null,"LandingPage",react_default.a.createElement(react_router_dom.a,{to:"/"},"To dashBoard"))};LandingPage_LandingPage.__docgenInfo={description:"",methods:[],displayName:"LandingPage"};var landingPage_LandingPage=LandingPage_LandingPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/landingPage/LandingPage.jsx"]={name:"LandingPage",docgenInfo:LandingPage_LandingPage.__docgenInfo,path:"src/components/landingPage/LandingPage.jsx"});__webpack_exports__.default={title:"LandingPage"};var LandingPage_stories_defaultView=function defaultView(){return react_default.a.createElement(landingPage_LandingPage,null)};LandingPage_stories_defaultView.__docgenInfo={description:"",methods:[],displayName:"defaultView"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/landingPage/LandingPage.stories.js"]={name:"defaultView",docgenInfo:LandingPage_stories_defaultView.__docgenInfo,path:"src/components/landingPage/LandingPage.stories.js"})},663:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultView",(function(){return MainPage_stories_defaultView}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),MainPage_MainPage=function MainPage(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",null,"MainPage"))};MainPage_MainPage.__docgenInfo={description:"",methods:[],displayName:"MainPage"};var mainPage_MainPage=MainPage_MainPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/mainPage/MainPage.jsx"]={name:"MainPage",docgenInfo:MainPage_MainPage.__docgenInfo,path:"src/components/mainPage/MainPage.jsx"});__webpack_exports__.default={title:"MainPage"};var MainPage_stories_defaultView=function defaultView(){return react_default.a.createElement(mainPage_MainPage,null)};MainPage_stories_defaultView.__docgenInfo={description:"",methods:[],displayName:"defaultView"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/mainPage/MainPage.stories.js"]={name:"defaultView",docgenInfo:MainPage_stories_defaultView.__docgenInfo,path:"src/components/mainPage/MainPage.stories.js"})},664:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultView",(function(){return NavBar_stories_defaultView}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_auth0_spa=__webpack_require__(120),react_router_dom=__webpack_require__(58),Navbar_Navbar=function Navbar(){var _useAuth=Object(react_auth0_spa.a)(),isAuthenticated=_useAuth.isAuthenticated,loginWithRedirect=_useAuth.loginWithRedirect,logout=_useAuth.logout;return react_default.a.createElement("div",null,!isAuthenticated&&react_default.a.createElement("button",{onClick:function onClick(){return loginWithRedirect({})}},"Log in"),isAuthenticated&&react_default.a.createElement("button",{onClick:function onClick(){return logout()}},"Log out"),isAuthenticated&&react_default.a.createElement("span",null,react_default.a.createElement(react_router_dom.a,{to:"/"},"Home")," ",react_default.a.createElement(react_router_dom.a,{to:"/profile"},"Profile")))};Navbar_Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar"};var navbar_Navbar=Navbar_Navbar;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/navbar/Navbar.jsx"]={name:"Navbar",docgenInfo:Navbar_Navbar.__docgenInfo,path:"src/components/navbar/Navbar.jsx"});__webpack_exports__.default={title:"Navbar"};var NavBar_stories_defaultView=function defaultView(){return react_default.a.createElement(navbar_Navbar,null)};NavBar_stories_defaultView.__docgenInfo={description:"",methods:[],displayName:"defaultView"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/navbar/NavBar.stories.js"]={name:"defaultView",docgenInfo:NavBar_stories_defaultView.__docgenInfo,path:"src/components/navbar/NavBar.stories.js"})}},[[294,1,2]]]);
//# sourceMappingURL=main.b446f8f2207fa71348e9.bundle.js.map