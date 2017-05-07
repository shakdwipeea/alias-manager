goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12072__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12073__i = 0, G__12073__a = new Array(arguments.length -  0);
while (G__12073__i < G__12073__a.length) {G__12073__a[G__12073__i] = arguments[G__12073__i + 0]; ++G__12073__i;}
  args = new cljs.core.IndexedSeq(G__12073__a,0);
} 
return G__12072__delegate.call(this,args);};
G__12072.cljs$lang$maxFixedArity = 0;
G__12072.cljs$lang$applyTo = (function (arglist__12074){
var args = cljs.core.seq(arglist__12074);
return G__12072__delegate(args);
});
G__12072.cljs$core$IFn$_invoke$arity$variadic = G__12072__delegate;
return G__12072;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12075__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12076__i = 0, G__12076__a = new Array(arguments.length -  0);
while (G__12076__i < G__12076__a.length) {G__12076__a[G__12076__i] = arguments[G__12076__i + 0]; ++G__12076__i;}
  args = new cljs.core.IndexedSeq(G__12076__a,0);
} 
return G__12075__delegate.call(this,args);};
G__12075.cljs$lang$maxFixedArity = 0;
G__12075.cljs$lang$applyTo = (function (arglist__12077){
var args = cljs.core.seq(arglist__12077);
return G__12075__delegate(args);
});
G__12075.cljs$core$IFn$_invoke$arity$variadic = G__12075__delegate;
return G__12075;
})()
;

return null;
});
