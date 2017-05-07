goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12488__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12489__i = 0, G__12489__a = new Array(arguments.length -  0);
while (G__12489__i < G__12489__a.length) {G__12489__a[G__12489__i] = arguments[G__12489__i + 0]; ++G__12489__i;}
  args = new cljs.core.IndexedSeq(G__12489__a,0);
} 
return G__12488__delegate.call(this,args);};
G__12488.cljs$lang$maxFixedArity = 0;
G__12488.cljs$lang$applyTo = (function (arglist__12490){
var args = cljs.core.seq(arglist__12490);
return G__12488__delegate(args);
});
G__12488.cljs$core$IFn$_invoke$arity$variadic = G__12488__delegate;
return G__12488;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12491__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12492__i = 0, G__12492__a = new Array(arguments.length -  0);
while (G__12492__i < G__12492__a.length) {G__12492__a[G__12492__i] = arguments[G__12492__i + 0]; ++G__12492__i;}
  args = new cljs.core.IndexedSeq(G__12492__a,0);
} 
return G__12491__delegate.call(this,args);};
G__12491.cljs$lang$maxFixedArity = 0;
G__12491.cljs$lang$applyTo = (function (arglist__12493){
var args = cljs.core.seq(arglist__12493);
return G__12491__delegate(args);
});
G__12491.cljs$core$IFn$_invoke$arity$variadic = G__12491__delegate;
return G__12491;
})()
;

return null;
});
