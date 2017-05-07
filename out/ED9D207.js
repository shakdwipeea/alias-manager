goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12779__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12780__i = 0, G__12780__a = new Array(arguments.length -  0);
while (G__12780__i < G__12780__a.length) {G__12780__a[G__12780__i] = arguments[G__12780__i + 0]; ++G__12780__i;}
  args = new cljs.core.IndexedSeq(G__12780__a,0);
} 
return G__12779__delegate.call(this,args);};
G__12779.cljs$lang$maxFixedArity = 0;
G__12779.cljs$lang$applyTo = (function (arglist__12781){
var args = cljs.core.seq(arglist__12781);
return G__12779__delegate(args);
});
G__12779.cljs$core$IFn$_invoke$arity$variadic = G__12779__delegate;
return G__12779;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12782__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12783__i = 0, G__12783__a = new Array(arguments.length -  0);
while (G__12783__i < G__12783__a.length) {G__12783__a[G__12783__i] = arguments[G__12783__i + 0]; ++G__12783__i;}
  args = new cljs.core.IndexedSeq(G__12783__a,0);
} 
return G__12782__delegate.call(this,args);};
G__12782.cljs$lang$maxFixedArity = 0;
G__12782.cljs$lang$applyTo = (function (arglist__12784){
var args = cljs.core.seq(arglist__12784);
return G__12782__delegate(args);
});
G__12782.cljs$core$IFn$_invoke$arity$variadic = G__12782__delegate;
return G__12782;
})()
;

return null;
});
