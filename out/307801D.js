goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11035__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11036__i = 0, G__11036__a = new Array(arguments.length -  0);
while (G__11036__i < G__11036__a.length) {G__11036__a[G__11036__i] = arguments[G__11036__i + 0]; ++G__11036__i;}
  args = new cljs.core.IndexedSeq(G__11036__a,0);
} 
return G__11035__delegate.call(this,args);};
G__11035.cljs$lang$maxFixedArity = 0;
G__11035.cljs$lang$applyTo = (function (arglist__11037){
var args = cljs.core.seq(arglist__11037);
return G__11035__delegate(args);
});
G__11035.cljs$core$IFn$_invoke$arity$variadic = G__11035__delegate;
return G__11035;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11038__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11039__i = 0, G__11039__a = new Array(arguments.length -  0);
while (G__11039__i < G__11039__a.length) {G__11039__a[G__11039__i] = arguments[G__11039__i + 0]; ++G__11039__i;}
  args = new cljs.core.IndexedSeq(G__11039__a,0);
} 
return G__11038__delegate.call(this,args);};
G__11038.cljs$lang$maxFixedArity = 0;
G__11038.cljs$lang$applyTo = (function (arglist__11040){
var args = cljs.core.seq(arglist__11040);
return G__11038__delegate(args);
});
G__11038.cljs$core$IFn$_invoke$arity$variadic = G__11038__delegate;
return G__11038;
})()
;

return null;
});