// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('datascript.btset');
goog.require('cljs.core');
goog.require('datascript.arrays');
datascript.btset.min_len = (16);
datascript.btset.max_len = (32);
datascript.btset.avg_len = ((datascript.btset.max_len + datascript.btset.min_len) >>> (1));
datascript.btset.level_shift = (cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7550_SHARP_){
return ((datascript.btset.max_len & (1 << p1__7550_SHARP_)) != 0);
}),cljs.core.range.call(null,(31),(-1),(-1)))) + (1));
datascript.btset.path_mask = (((1) << datascript.btset.level_shift) - (1));
datascript.btset.empty_path = (0);
datascript.btset.path_get = (function datascript$btset$path_get(path,level){
return (datascript.btset.path_mask & (path >>> level));
});
datascript.btset.path_set = (function datascript$btset$path_set(path,level,idx){
return (path | (idx << level));
});
datascript.btset.binary_search_l = (function datascript$btset$binary_search_l(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) < (0))){
var G__7551 = (m + (1));
var G__7552 = r__$1;
l = G__7551;
r__$1 = G__7552;
continue;
} else {
var G__7553 = l;
var G__7554 = (m - (1));
l = G__7553;
r__$1 = G__7554;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.binary_search_r = (function datascript$btset$binary_search_r(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) > (0))){
var G__7555 = l;
var G__7556 = (m - (1));
l = G__7555;
r__$1 = G__7556;
continue;
} else {
var G__7557 = (m + (1));
var G__7558 = r__$1;
l = G__7557;
r__$1 = G__7558;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.lookup_exact = (function datascript$btset$lookup_exact(cmp,arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if(((idx < arr_l)) && (((0) === cmp.call(null,(arr[idx]),key)))){
return idx;
} else {
return (-1);
}
});
datascript.btset.lookup_range = (function datascript$btset$lookup_range(cmp,arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
datascript.btset.alast = (function datascript$btset$alast(arr){
return (arr[(arr.length - (1))]);
});
datascript.btset.cut_n_splice = (function datascript$btset$cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = datascript.arrays.make_array.call(null,((l1 + xs_l) + l2));
var l__7204__auto___7559 = (splice_from - cut_from);
var n__5376__auto___7560 = l__7204__auto___7559;
var i__7205__auto___7561 = (0);
while(true){
if((i__7205__auto___7561 < n__5376__auto___7560)){
(new_arr[(i__7205__auto___7561 + (0))] = (arr[(i__7205__auto___7561 + cut_from)]));

var G__7562 = (i__7205__auto___7561 + (1));
i__7205__auto___7561 = G__7562;
continue;
} else {
}
break;
}

var l__7204__auto___7563 = (xs_l - (0));
var n__5376__auto___7564 = l__7204__auto___7563;
var i__7205__auto___7565 = (0);
while(true){
if((i__7205__auto___7565 < n__5376__auto___7564)){
(new_arr[(i__7205__auto___7565 + l1)] = (xs[(i__7205__auto___7565 + (0))]));

var G__7566 = (i__7205__auto___7565 + (1));
i__7205__auto___7565 = G__7566;
continue;
} else {
}
break;
}

var l__7204__auto___7567 = (cut_to - splice_to);
var n__5376__auto___7568 = l__7204__auto___7567;
var i__7205__auto___7569 = (0);
while(true){
if((i__7205__auto___7569 < n__5376__auto___7568)){
(new_arr[(i__7205__auto___7569 + l1xs)] = (arr[(i__7205__auto___7569 + splice_to)]));

var G__7570 = (i__7205__auto___7569 + (1));
i__7205__auto___7569 = G__7570;
continue;
} else {
}
break;
}

return new_arr;
});
datascript.btset.cut = (function datascript$btset$cut(var_args){
var args7571 = [];
var len__5531__auto___7574 = arguments.length;
var i__5532__auto___7575 = (0);
while(true){
if((i__5532__auto___7575 < len__5531__auto___7574)){
args7571.push((arguments[i__5532__auto___7575]));

var G__7576 = (i__5532__auto___7575 + (1));
i__5532__auto___7575 = G__7576;
continue;
} else {
}
break;
}

var G__7573 = args7571.length;
switch (G__7573) {
case 2:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7571.length)].join('')));

}
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$2 = (function (arr,cut_from){
return arr.slice(cut_from);
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$3 = (function (arr,cut_from,cut_to){
return arr.slice(cut_from,cut_to);
});

datascript.btset.cut.cljs$lang$maxFixedArity = 3;
datascript.btset.splice = (function datascript$btset$splice(arr,splice_from,splice_to,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,splice_from,splice_to,xs);
});
datascript.btset.insert = (function datascript$btset$insert(arr,idx,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,idx,idx,xs);
});
datascript.btset.merge_n_split = (function datascript$btset$merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = (total_l >>> (1));
var r2_l = (total_l - r1_l);
var r1 = datascript.arrays.make_array.call(null,r1_l);
var r2 = datascript.arrays.make_array.call(null,r2_l);
if((a1_l <= r1_l)){
var l__7204__auto___7578 = (a1_l - (0));
var n__5376__auto___7579 = l__7204__auto___7578;
var i__7205__auto___7580 = (0);
while(true){
if((i__7205__auto___7580 < n__5376__auto___7579)){
(r1[(i__7205__auto___7580 + (0))] = (a1[(i__7205__auto___7580 + (0))]));

var G__7581 = (i__7205__auto___7580 + (1));
i__7205__auto___7580 = G__7581;
continue;
} else {
}
break;
}

var l__7204__auto___7582 = ((r1_l - a1_l) - (0));
var n__5376__auto___7583 = l__7204__auto___7582;
var i__7205__auto___7584 = (0);
while(true){
if((i__7205__auto___7584 < n__5376__auto___7583)){
(r1[(i__7205__auto___7584 + a1_l)] = (a2[(i__7205__auto___7584 + (0))]));

var G__7585 = (i__7205__auto___7584 + (1));
i__7205__auto___7584 = G__7585;
continue;
} else {
}
break;
}

var l__7204__auto___7586 = (a2_l - (r1_l - a1_l));
var n__5376__auto___7587 = l__7204__auto___7586;
var i__7205__auto___7588 = (0);
while(true){
if((i__7205__auto___7588 < n__5376__auto___7587)){
(r2[(i__7205__auto___7588 + (0))] = (a2[(i__7205__auto___7588 + (r1_l - a1_l))]));

var G__7589 = (i__7205__auto___7588 + (1));
i__7205__auto___7588 = G__7589;
continue;
} else {
}
break;
}
} else {
var l__7204__auto___7590 = (r1_l - (0));
var n__5376__auto___7591 = l__7204__auto___7590;
var i__7205__auto___7592 = (0);
while(true){
if((i__7205__auto___7592 < n__5376__auto___7591)){
(r1[(i__7205__auto___7592 + (0))] = (a1[(i__7205__auto___7592 + (0))]));

var G__7593 = (i__7205__auto___7592 + (1));
i__7205__auto___7592 = G__7593;
continue;
} else {
}
break;
}

var l__7204__auto___7594 = (a1_l - r1_l);
var n__5376__auto___7595 = l__7204__auto___7594;
var i__7205__auto___7596 = (0);
while(true){
if((i__7205__auto___7596 < n__5376__auto___7595)){
(r2[(i__7205__auto___7596 + (0))] = (a1[(i__7205__auto___7596 + r1_l)]));

var G__7597 = (i__7205__auto___7596 + (1));
i__7205__auto___7596 = G__7597;
continue;
} else {
}
break;
}

var l__7204__auto___7598 = (a2_l - (0));
var n__5376__auto___7599 = l__7204__auto___7598;
var i__7205__auto___7600 = (0);
while(true){
if((i__7205__auto___7600 < n__5376__auto___7599)){
(r2[(i__7205__auto___7600 + (a1_l - r1_l))] = (a2[(i__7205__auto___7600 + (0))]));

var G__7601 = (i__7205__auto___7600 + (1));
i__7205__auto___7600 = G__7601;
continue;
} else {
}
break;
}
}

return [r1,r2];
});
datascript.btset.eq_arr = (function datascript$btset$eq_arr(cmp,a1,a1_from,a1_to,a2,a2_from,a2_to){
var len = (a1_to - a1_from);
var and__4461__auto__ = (len === (a2_to - a2_from));
if(and__4461__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if(!(((0) === cmp.call(null,(a1[(i + a1_from)]),(a2[(i + a2_from)]))))){
return false;
} else {
var G__7602 = (i + (1));
i = G__7602;
continue;

}
}
break;
}
} else {
return and__4461__auto__;
}
});
datascript.btset.check_n_splice = (function datascript$btset$check_n_splice(cmp,arr,from,to,new_arr){
if(datascript.btset.eq_arr.call(null,cmp,arr,from,to,new_arr,(0),new_arr.length)){
return arr;
} else {
return datascript.btset.splice.call(null,arr,from,to,new_arr);
}
});
datascript.btset.arr_map_inplace = (function datascript$btset$arr_map_inplace(f,arr){
var len = arr.length;
var i_7603 = (0);
while(true){
if((i_7603 < len)){
(arr[i_7603] = f.call(null,(arr[i_7603])));

var G__7604 = (i_7603 + (1));
i_7603 = G__7604;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Splits `arr` into arrays of size between min-len and max-len,
 * trying to stick to (min+max)/2
 */
datascript.btset.arr_partition_approx = (function datascript$btset$arr_partition_approx(min_len,max_len,arr){
var chunk_len = datascript.btset.avg_len;
var len = arr.length;
var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
if((len > (0))){
var pos_7605 = (0);
while(true){
var rest_7606 = (len - pos_7605);
if((rest_7606 <= max_len)){
cljs.core.conj_BANG_.call(null,acc,datascript.btset.cut.call(null,arr,pos_7605));
} else {
if((rest_7606 >= (chunk_len + min_len))){
cljs.core.conj_BANG_.call(null,acc,datascript.btset.cut.call(null,arr,pos_7605,(pos_7605 + chunk_len)));

var G__7607 = (pos_7605 + chunk_len);
pos_7605 = G__7607;
continue;
} else {
var piece_len_7608 = (rest_7606 >>> (1));
cljs.core.conj_BANG_.call(null,acc,datascript.btset.cut.call(null,arr,pos_7605,(pos_7605 + piece_len_7608)));

var G__7609 = (pos_7605 + piece_len_7608);
pos_7605 = G__7609;
continue;

}
}
break;
}
} else {
}

return cljs.core.to_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
});
datascript.btset.sorted_arr_distinct_QMARK_ = (function datascript$btset$sorted_arr_distinct_QMARK_(arr,cmp){
var al = arr.length;
if((al <= (1))){
return true;
} else {
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return true;
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
return false;
} else {
var G__7610 = (i + (1));
var G__7611 = e;
i = G__7610;
p = G__7611;
continue;
}
}
break;
}
}
});
/**
 * Filter out repetitive values in a sorted array.
 * Optimized for no-duplicates case
 */
datascript.btset.sorted_arr_distinct = (function datascript$btset$sorted_arr_distinct(arr,cmp){
if(cljs.core.truth_(datascript.btset.sorted_arr_distinct_QMARK_.call(null,arr,cmp))){
return arr;
} else {
var al = arr.length;
var acc = cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(arr[(0)])], null));
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return cljs.core.into_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
var G__7612 = acc;
var G__7613 = (i + (1));
var G__7614 = e;
acc = G__7612;
i = G__7613;
p = G__7614;
continue;
} else {
var G__7615 = cljs.core.conj_BANG_.call(null,acc,e);
var G__7616 = (i + (1));
var G__7617 = e;
acc = G__7615;
i = G__7616;
p = G__7617;
continue;
}
}
break;
}
}
});
/**
 * Drop non-nil references and return array of arguments
 */
datascript.btset.return_array = (function datascript$btset$return_array(var_args){
var args7618 = [];
var len__5531__auto___7621 = arguments.length;
var i__5532__auto___7622 = (0);
while(true){
if((i__5532__auto___7622 < len__5531__auto___7621)){
args7618.push((arguments[i__5532__auto___7622]));

var G__7623 = (i__5532__auto___7622 + (1));
i__5532__auto___7622 = G__7623;
continue;
} else {
}
break;
}

var G__7620 = args7618.length;
switch (G__7620) {
case 1:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7618.length)].join('')));

}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1 = (function (a1){
return [a1];
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
});

datascript.btset.return_array.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
datascript.btset.INode = function(){};

datascript.btset.node_lim_key = (function datascript$btset$node_lim_key(_){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_lim_key$arity$1 == null)))){
return _.datascript$btset$INode$node_lim_key$arity$1(_);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.btset.node_lim_key[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_);
} else {
var m__5129__auto____$1 = (datascript.btset.node_lim_key["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lim-key",_);
}
}
}
});

datascript.btset.node_len = (function datascript$btset$node_len(_){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_len$arity$1 == null)))){
return _.datascript$btset$INode$node_len$arity$1(_);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.btset.node_len[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_);
} else {
var m__5129__auto____$1 = (datascript.btset.node_len["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-len",_);
}
}
}
});

datascript.btset.node_merge = (function datascript$btset$node_merge(_,next){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_merge$arity$2 == null)))){
return _.datascript$btset$INode$node_merge$arity$2(_,next);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.btset.node_merge[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_,next);
} else {
var m__5129__auto____$1 = (datascript.btset.node_merge["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge",_);
}
}
}
});

datascript.btset.node_merge_n_split = (function datascript$btset$node_merge_n_split(_,next){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_merge_n_split$arity$2 == null)))){
return _.datascript$btset$INode$node_merge_n_split$arity$2(_,next);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.btset.node_merge_n_split[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_,next);
} else {
var m__5129__auto____$1 = (datascript.btset.node_merge_n_split["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge-n-split",_);
}
}
}
});

datascript.btset.node_lookup = (function datascript$btset$node_lookup(_,cmp,key){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_lookup$arity$3 == null)))){
return _.datascript$btset$INode$node_lookup$arity$3(_,cmp,key);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.btset.node_lookup[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_,cmp,key);
} else {
var m__5129__auto____$1 = (datascript.btset.node_lookup["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lookup",_);
}
}
}
});

datascript.btset.node_conj = (function datascript$btset$node_conj(_,cmp,key){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_conj$arity$3 == null)))){
return _.datascript$btset$INode$node_conj$arity$3(_,cmp,key);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.btset.node_conj[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_,cmp,key);
} else {
var m__5129__auto____$1 = (datascript.btset.node_conj["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-conj",_);
}
}
}
});

datascript.btset.node_disj = (function datascript$btset$node_disj(_,cmp,key,root_QMARK_,left,right){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_disj$arity$6 == null)))){
return _.datascript$btset$INode$node_disj$arity$6(_,cmp,key,root_QMARK_,left,right);
} else {
var x__5128__auto__ = (((_ == null))?null:_);
var m__5129__auto__ = (datascript.btset.node_disj[goog.typeOf(x__5128__auto__)]);
if(!((m__5129__auto__ == null))){
return m__5129__auto__.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
var m__5129__auto____$1 = (datascript.btset.node_disj["_"]);
if(!((m__5129__auto____$1 == null))){
return m__5129__auto____$1.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-disj",_);
}
}
}
});

datascript.btset.rotate = (function datascript$btset$rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return datascript.btset.return_array.call(null,node);
} else {
if((datascript.btset.node_len.call(null,node) > datascript.btset.min_len)){
return datascript.btset.return_array.call(null,left,node,right);
} else {
if(cljs.core.truth_((function (){var and__4461__auto__ = left;
if(cljs.core.truth_(and__4461__auto__)){
return (datascript.btset.node_len.call(null,left) <= datascript.btset.min_len);
} else {
return and__4461__auto__;
}
})())){
return datascript.btset.return_array.call(null,datascript.btset.node_merge.call(null,left,node),right);
} else {
if(cljs.core.truth_((function (){var and__4461__auto__ = right;
if(cljs.core.truth_(and__4461__auto__)){
return (datascript.btset.node_len.call(null,right) <= datascript.btset.min_len);
} else {
return and__4461__auto__;
}
})())){
return datascript.btset.return_array.call(null,left,datascript.btset.node_merge.call(null,node,right));
} else {
if(cljs.core.truth_((function (){var and__4461__auto__ = left;
if(cljs.core.truth_(and__4461__auto__)){
return ((right == null)) || ((datascript.btset.node_len.call(null,left) < datascript.btset.node_len.call(null,right)));
} else {
return and__4461__auto__;
}
})())){
var nodes = datascript.btset.node_merge_n_split.call(null,left,node);
return datascript.btset.return_array.call(null,(nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = datascript.btset.node_merge_n_split.call(null,node,right);
return datascript.btset.return_array.call(null,left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
 * @implements {datascript.btset.INode}
*/
datascript.btset.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
})
datascript.btset.Node.prototype.datascript$btset$INode$ = true;

datascript.btset.Node.prototype.datascript$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.btset.alast.call(null,self__.keys);
});

datascript.btset.Node.prototype.datascript$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datascript.btset.Node.prototype.datascript$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.Node(datascript.arrays.aconcat.call(null,self__.keys,next.keys),datascript.arrays.aconcat.call(null,self__.pointers,next.pointers)));
});

datascript.btset.Node.prototype.datascript$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
var ps = datascript.btset.merge_n_split.call(null,self__.pointers,next.pointers);
return datascript.btset.return_array.call(null,(new datascript.btset.Node((ks[(0)]),(ps[(0)]))),(new datascript.btset.Node((ks[(1)]),(ps[(1)]))));
});

datascript.btset.Node.prototype.datascript$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return datascript.btset.node_lookup.call(null,(self__.pointers[idx]),cmp,key);
}
});

datascript.btset.Node.prototype.datascript$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (2)),key);
var nodes = datascript.btset.node_conj.call(null,(self__.pointers[idx]),cmp,key);
if(cljs.core.truth_(nodes)){
var new_keys = datascript.btset.check_n_splice.call(null,cmp,self__.keys,idx,(idx + (1)),datascript.arrays.amap.call(null,datascript.btset.node_lim_key,nodes));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= datascript.btset.max_len)){
return [(new datascript.btset.Node(new_keys,new_pointers))];
} else {
var middle = (new_pointers.length >>> (1));
return [(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,(0),middle),datascript.btset.cut.call(null,new_pointers,(0),middle))),(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,middle),datascript.btset.cut.call(null,new_pointers,middle)))];
}
} else {
return null;
}
});

datascript.btset.Node.prototype.datascript$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = datascript.btset.node_disj.call(null,child,cmp,key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = datascript.btset.check_n_splice.call(null,cmp,self__.keys,left_idx,right_idx,datascript.arrays.amap.call(null,datascript.btset.node_lim_key,disjned));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,left_idx,right_idx,disjned);
return datascript.btset.rotate.call(null,(new datascript.btset.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
});

datascript.btset.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"pointers","pointers",-1669058356,null)], null);
});

datascript.btset.Node.cljs$lang$type = true;

datascript.btset.Node.cljs$lang$ctorStr = "datascript.btset/Node";

datascript.btset.Node.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"datascript.btset/Node");
});

datascript.btset.__GT_Node = (function datascript$btset$__GT_Node(keys,pointers){
return (new datascript.btset.Node(keys,pointers));
});


/**
* @constructor
 * @implements {datascript.btset.INode}
*/
datascript.btset.Leaf = (function (keys){
this.keys = keys;
})
datascript.btset.Leaf.prototype.datascript$btset$INode$ = true;

datascript.btset.Leaf.prototype.datascript$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.btset.alast.call(null,self__.keys);
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.Leaf(datascript.arrays.aconcat.call(null,self__.keys,next.keys)));
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
return datascript.btset.return_array.call(null,(new datascript.btset.Leaf((ks[(0)]))),(new datascript.btset.Leaf((ks[(1)]))));
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if(((idx < keys_l)) && (((0) === cmp.call(null,key,(self__.keys[idx]))))){
return null;
} else {
if((keys_l === datascript.btset.max_len)){
var middle = ((keys_l + (1)) >>> (1));
if((idx > middle)){
return [(new datascript.btset.Leaf(datascript.btset.cut.call(null,self__.keys,(0),middle))),(new datascript.btset.Leaf(datascript.btset.cut_n_splice.call(null,self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new datascript.btset.Leaf(datascript.btset.cut_n_splice.call(null,self__.keys,(0),middle,idx,idx,[key]))),(new datascript.btset.Leaf(datascript.btset.cut.call(null,self__.keys,middle,keys_l)))];
}
} else {
return [(new datascript.btset.Leaf(datascript.btset.splice.call(null,self__.keys,idx,idx,[key])))];

}
}
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = datascript.btset.splice.call(null,self__.keys,idx,(idx + (1)),[]);
return datascript.btset.rotate.call(null,(new datascript.btset.Leaf(new_keys)),root_QMARK_,left,right);
}
});

datascript.btset.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null);
});

datascript.btset.Leaf.cljs$lang$type = true;

datascript.btset.Leaf.cljs$lang$ctorStr = "datascript.btset/Leaf";

datascript.btset.Leaf.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"datascript.btset/Leaf");
});

datascript.btset.__GT_Leaf = (function datascript$btset$__GT_Leaf(keys){
return (new datascript.btset.Leaf(keys));
});

datascript.btset.btset_conj = (function datascript$btset$btset_conj(set,key,cmp){
return null;
});
datascript.btset.btset_disj = (function datascript$btset$btset_disj(set,key,cmp){
return null;
});
datascript.btset.btset_iter = (function datascript$btset$btset_iter(set){
return null;
});
datascript.btset.uninitialized_hash = null;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {datascript.btset.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
datascript.btset.BTSet = (function (root,shift,cnt,comparator,meta,__hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2297303311;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.btset.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return datascript.btset.node_lookup.call(null,self__.root,self__.comparator,k);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var or__4473__auto__ = datascript.btset.node_lookup.call(null,self__.root,self__.comparator,k);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return not_found;
}
});

datascript.btset.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

datascript.btset.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

datascript.btset.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.rseq.call(null,datascript.btset.btset_iter.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4908__auto__ = self__.__hash;
if(!((h__4908__auto__ == null))){
return h__4908__auto__;
} else {
var h__4908__auto____$1 = cljs.core.hash_unordered_coll.call(null,this$__$1);
self__.__hash = h__4908__auto____$1;

return h__4908__auto____$1;
}
});

datascript.btset.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((self__.cnt === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p1__7625_SHARP_){
return cljs.core.contains_QMARK_.call(null,this$__$1,p1__7625_SHARP_);
});})(this$__$1))
,other));
});

datascript.btset.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),self__.comparator,self__.meta,datascript.btset.uninitialized_hash));
});

datascript.btset.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_disj.call(null,this$__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = datascript.btset.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return cljs.core._reduce.call(null,i,f);
} else {
return f.call(null);
}
});

datascript.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = datascript.btset.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return cljs.core._reduce.call(null,i,f,start);
} else {
return start;
}
});

datascript.btset.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_iter.call(null,this$__$1);
});

datascript.btset.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_conj.call(null,this$__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.call = (function() {
var G__7628 = null;
var G__7628__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__7628__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__7628 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__7628__2.call(this,self__,k);
case 3:
return G__7628__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7628.cljs$core$IFn$_invoke$arity$2 = G__7628__2;
G__7628.cljs$core$IFn$_invoke$arity$3 = G__7628__3;
return G__7628;
})()
;

datascript.btset.BTSet.prototype.apply = (function (self__,args7627){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7627)));
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

datascript.btset.BTSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"comparator","comparator",-509539107,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

datascript.btset.BTSet.cljs$lang$type = true;

datascript.btset.BTSet.cljs$lang$ctorStr = "datascript.btset/BTSet";

datascript.btset.BTSet.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"datascript.btset/BTSet");
});

datascript.btset.__GT_BTSet = (function datascript$btset$__GT_BTSet(root,shift,cnt,comparator,meta,__hash){
return (new datascript.btset.BTSet(root,shift,cnt,comparator,meta,__hash));
});

datascript.btset.alter_btset = (function datascript$btset$alter_btset(set,root,shift,cnt){
return (new datascript.btset.BTSet(root,shift,cnt,set.comparator,set.meta,datascript.btset.uninitialized_hash));
});
datascript.btset.keys_for = (function datascript$btset$keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__7629 = (level - datascript.btset.level_shift);
var G__7630 = (node.pointers[datascript.btset.path_get.call(null,path,level)]);
level = G__7629;
node = G__7630;
continue;
} else {
return node.keys;
}
break;
}
});
datascript.btset.btset_conj = (function datascript$btset$btset_conj(set,key,cmp){
var roots = datascript.btset.node_conj.call(null,set.root,cmp,key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return datascript.btset.alter_btset.call(null,set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return datascript.btset.alter_btset.call(null,set,(new datascript.btset.Node(datascript.arrays.amap.call(null,datascript.btset.node_lim_key,roots),roots)),(set.shift + datascript.btset.level_shift),(set.cnt + (1)));

}
}
});
datascript.btset.btset_disj = (function datascript$btset$btset_disj(set,key,cmp){
var new_roots = datascript.btset.node_disj.call(null,set.root,cmp,key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if(((new_root instanceof datascript.btset.Node)) && (((1) === new_root.pointers.length))){
return datascript.btset.alter_btset.call(null,set,(new_root.pointers[(0)]),(set.shift - datascript.btset.level_shift),(set.cnt - (1)));
} else {
return datascript.btset.alter_btset.call(null,set,new_root,set.shift,(set.cnt - (1)));
}
}
});
datascript.btset._next_path = (function datascript$btset$_next_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_path = datascript$btset$_next_path.call(null,(node.pointers[idx]),path,(level - datascript.btset.level_shift));
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,level,(idx + (1)));
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing next item after `path` in natural traversal order,
 * or -1 if end of tree has been reached
 */
datascript.btset.next_path = (function datascript$btset$next_path(set,path){
return datascript.btset._next_path.call(null,set.root,path,set.shift);
});
/**
 * Returns rightmost path possible starting from node and going deeper
 */
datascript.btset._rpath = (function datascript$btset$_rpath(node,level){
var node__$1 = node;
var path = datascript.btset.empty_path;
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__7631 = datascript.btset.alast.call(null,node__$1.pointers);
var G__7632 = datascript.btset.path_set.call(null,path,level__$1,(node__$1.pointers.length - (1)));
var G__7633 = (level__$1 - datascript.btset.level_shift);
node__$1 = G__7631;
path = G__7632;
level__$1 = G__7633;
continue;
} else {
return datascript.btset.path_set.call(null,path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
datascript.btset._prev_path = (function datascript$btset$_prev_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_level = (level - datascript.btset.level_shift);
var sub_path = datascript$btset$_prev_path.call(null,(node.pointers[idx]),path,sub_level);
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = datascript.btset._rpath.call(null,(node.pointers[idx__$1]),sub_level);
return datascript.btset.path_set.call(null,sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing previous item before `path` in natural traversal order,
 * or -1 if `path` was already beginning of a tree
 */
datascript.btset.prev_path = (function datascript$btset$prev_path(set,path){
return datascript.btset._prev_path.call(null,set.root,path,set.shift);
});
datascript.btset.iter = (function datascript$btset$iter(set,left,right){
return null;
});
datascript.btset.iter_first = (function datascript$btset$iter_first(iter){
return null;
});
datascript.btset.iter_next = (function datascript$btset$iter_next(iter){
return null;
});
datascript.btset.iter_chunk = (function datascript$btset$iter_chunk(iter){
return null;
});
datascript.btset.iter_chunked_next = (function datascript$btset$iter_chunked_next(iter){
return null;
});
datascript.btset.iter_rseq = (function datascript$btset$iter_rseq(iter){
return null;
});
datascript.btset.iter_reduce = (function datascript$btset$iter_reduce(var_args){
var args7634 = [];
var len__5531__auto___7637 = arguments.length;
var i__5532__auto___7638 = (0);
while(true){
if((i__5532__auto___7638 < len__5531__auto___7637)){
args7634.push((arguments[i__5532__auto___7638]));

var G__7639 = (i__5532__auto___7638 + (1));
i__5532__auto___7638 = G__7639;
continue;
} else {
}
break;
}

var G__7636 = args7634.length;
switch (G__7636) {
case 2:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7634.length)].join('')));

}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2 = (function (iter,f){
return null;
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3 = (function (iter,f,start){
return null;
});

datascript.btset.iter_reduce.cljs$lang$maxFixedArity = 3;
datascript.btset.riter = (function datascript$btset$riter(set,left,right){
return null;
});
datascript.btset.riter_first = (function datascript$btset$riter_first(riter){
return null;
});
datascript.btset.riter_next = (function datascript$btset$riter_next(ri){
return null;
});
datascript.btset.riter_rseq = (function datascript$btset$riter_rseq(riter){
return null;
});
/**
 * Iterator that represents whole set
 */
datascript.btset.btset_iter = (function datascript$btset$btset_iter(set){
if((datascript.btset.node_len.call(null,set.root) > (0))){
var left = datascript.btset.empty_path;
var right = (datascript.btset._rpath.call(null,set.root,set.shift) + (1));
return datascript.btset.iter.call(null,set,left,right);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.IReduce}
*/
datascript.btset.Iter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 143130816;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
datascript.btset.Iter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.Iter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_first.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__4473__auto__ = datascript.btset.iter_next.call(null,this$__$1);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.Iter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_next.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_chunk.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__4473__auto__ = cljs.core._chunked_next.call(null,this$__$1);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.Iter.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_chunked_next.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_reduce.call(null,this$__$1,f);
});

datascript.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_reduce.call(null,this$__$1,f,start);
});

datascript.btset.Iter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_rseq.call(null,this$__$1);
});

datascript.btset.Iter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

datascript.btset.Iter.cljs$lang$type = true;

datascript.btset.Iter.cljs$lang$ctorStr = "datascript.btset/Iter";

datascript.btset.Iter.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"datascript.btset/Iter");
});

datascript.btset.__GT_Iter = (function datascript$btset$__GT_Iter(set,left,right,keys,idx){
return (new datascript.btset.Iter(set,left,right,keys,idx));
});

datascript.btset.iter = (function datascript$btset$iter(set,left,right){
return (new datascript.btset.Iter(set,left,right,datascript.btset.keys_for.call(null,set,left),datascript.btset.path_get.call(null,left,(0))));
});
datascript.btset.iter_first = (function datascript$btset$iter_first(iter){
if(cljs.core.truth_(iter.keys)){
return (iter.keys[iter.idx]);
} else {
return null;
}
});
datascript.btset.iter_next = (function datascript$btset$iter_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
if(cljs.core.truth_(keys)){
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
return (new datascript.btset.Iter(set,(left + (1)),right,keys,(idx + (1))));
} else {
return null;
}
} else {
var left__$1 = datascript.btset.next_path.call(null,set,left);
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < right))){
return datascript.btset.iter.call(null,set,left__$1,right);
} else {
return null;
}
}
} else {
return null;
}
});
datascript.btset.iter_chunk = (function datascript$btset$iter_chunk(iter){
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var end_idx = ((cljs.core._EQ_.call(null,(left | datascript.btset.path_mask),(right | datascript.btset.path_mask)))?(right & datascript.btset.path_mask):keys.length);
return cljs.core.array_chunk.call(null,keys,idx,end_idx);
});
datascript.btset.iter_chunked_next = (function datascript$btset$iter_chunked_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var left__$1 = datascript.btset.next_path.call(null,set,(left + ((keys.length - idx) - (1))));
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < right))){
return datascript.btset.iter.call(null,set,left__$1,right);
} else {
return null;
}
});
datascript.btset.iter_rseq = (function datascript$btset$iter_rseq(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
if(cljs.core.truth_(iter.keys)){
return datascript.btset.riter.call(null,set,datascript.btset.prev_path.call(null,set,left),datascript.btset.prev_path.call(null,set,right));
} else {
return null;
}
});
datascript.btset.iter_reduce = (function datascript$btset$iter_reduce(var_args){
var args7641 = [];
var len__5531__auto___7644 = arguments.length;
var i__5532__auto___7645 = (0);
while(true){
if((i__5532__auto___7645 < len__5531__auto___7644)){
args7641.push((arguments[i__5532__auto___7645]));

var G__7646 = (i__5532__auto___7645 + (1));
i__5532__auto___7645 = G__7646;
continue;
} else {
}
break;
}

var G__7643 = args7641.length;
switch (G__7643) {
case 2:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7641.length)].join('')));

}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2 = (function (iter,f){
if((iter.keys == null)){
return f.call(null);
} else {
var first = datascript.btset.iter_first.call(null,iter);
var temp__4423__auto__ = datascript.btset.iter_next.call(null,iter);
if(cljs.core.truth_(temp__4423__auto__)){
var next = temp__4423__auto__;
return datascript.btset.iter_reduce.call(null,next,f,first);
} else {
return first;
}
}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3 = (function (iter,f,start){
var set = iter.set;
var right = iter.right;
var left = iter.left;
var keys = iter.keys;
var idx = iter.idx;
var acc = start;
while(true){
if((keys == null)){
return acc;
} else {
var new_acc = f.call(null,acc,(keys[idx]));
if(cljs.core.reduced_QMARK_.call(null,new_acc)){
return cljs.core.deref.call(null,new_acc);
} else {
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
var G__7648 = (left + (1));
var G__7649 = keys;
var G__7650 = (idx + (1));
var G__7651 = new_acc;
left = G__7648;
keys = G__7649;
idx = G__7650;
acc = G__7651;
continue;
} else {
return new_acc;
}
} else {
var new_left = datascript.btset.next_path.call(null,set,left);
if((!(((-1) === new_left))) && ((new_left < right))){
var G__7652 = new_left;
var G__7653 = datascript.btset.keys_for.call(null,set,new_left);
var G__7654 = datascript.btset.path_get.call(null,new_left,(0));
var G__7655 = new_acc;
left = G__7652;
keys = G__7653;
idx = G__7654;
acc = G__7655;
continue;
} else {
return new_acc;
}

}
}
}
break;
}
});

datascript.btset.iter_reduce.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
*/
datascript.btset.ReverseIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.btset.ReverseIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.ReverseIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.riter_first.call(null,this$__$1);
});

datascript.btset.ReverseIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__4473__auto__ = datascript.btset.riter_next.call(null,this$__$1);
if(cljs.core.truth_(or__4473__auto__)){
return or__4473__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.ReverseIter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.riter_next.call(null,this$__$1);
});

datascript.btset.ReverseIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.riter_rseq.call(null,this$__$1);
});

datascript.btset.ReverseIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

datascript.btset.ReverseIter.cljs$lang$type = true;

datascript.btset.ReverseIter.cljs$lang$ctorStr = "datascript.btset/ReverseIter";

datascript.btset.ReverseIter.cljs$lang$ctorPrWriter = (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"datascript.btset/ReverseIter");
});

datascript.btset.__GT_ReverseIter = (function datascript$btset$__GT_ReverseIter(set,left,right,keys,idx){
return (new datascript.btset.ReverseIter(set,left,right,keys,idx));
});

datascript.btset.riter = (function datascript$btset$riter(set,left,right){
return (new datascript.btset.ReverseIter(set,left,right,datascript.btset.keys_for.call(null,set,right),datascript.btset.path_get.call(null,right,(0))));
});
datascript.btset.riter_first = (function datascript$btset$riter_first(riter){
if(cljs.core.truth_(riter.keys)){
return (riter.keys[riter.idx]);
} else {
return null;
}
});
datascript.btset.riter_next = (function datascript$btset$riter_next(ri){
var set = ri.set;
var left = ri.left;
var right = ri.right;
var keys = ri.keys;
var idx = ri.idx;
if(cljs.core.truth_(keys)){
if(((idx - (1)) >= (0))){
if(((right - (1)) > left)){
return (new datascript.btset.ReverseIter(set,left,(right - (1)),keys,(idx - (1))));
} else {
return null;
}
} else {
var right__$1 = datascript.btset.prev_path.call(null,set,right);
if((cljs.core.not_EQ_.call(null,(-1),right__$1)) && ((right__$1 > left))){
return datascript.btset.riter.call(null,set,left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
});
datascript.btset.riter_rseq = (function datascript$btset$riter_rseq(riter){
var set = riter.set;
var left = riter.left;
var right = riter.right;
if(cljs.core.truth_(cljs.core.keys)){
var new_left = (((left === (-1)))?(0):datascript.btset.next_path.call(null,set,left));
var new_right = datascript.btset.next_path.call(null,set,right);
var new_right__$1 = (((new_right === (-1)))?(right + (1)):new_right);
return datascript.btset.iter.call(null,set,new_left,new_right__$1);
} else {
return null;
}
});
datascript.btset._distance = (function datascript$btset$_distance(node,left,right,level){
var idx_l = datascript.btset.path_get.call(null,left,level);
var idx_r = datascript.btset.path_get.call(null,right,level);
if((level > (0))){
if((idx_l === idx_r)){
return datascript$btset$_distance.call(null,(node.pointers[idx_l]),left,right,(level - datascript.btset.level_shift));
} else {
var level__$1 = level;
var res = (idx_r - idx_l);
while(true){
if(((0) === level__$1)){
return res;
} else {
var G__7656 = (level__$1 - datascript.btset.level_shift);
var G__7657 = (res * datascript.btset.avg_len);
level__$1 = G__7656;
res = G__7657;
continue;
}
break;
}
}
} else {
return (idx_r - idx_l);
}
});
datascript.btset.distance = (function datascript$btset$distance(set,path_l,path_r){
if((path_l === path_r)){
return (0);
} else {
if(((path_l + (1)) === path_r)){
return (1);
} else {
if((datascript.btset.next_path.call(null,set,path_l) === path_r)){
return (1);
} else {
return datascript.btset._distance.call(null,set.root,path_l,path_r,set.shift);

}
}
}
});
datascript.btset.est_count = (function datascript$btset$est_count(iter){
return datascript.btset.distance.call(null,iter.set,iter.left,iter.right);
});
/**
 * Returns path to first element >= key,
 * or -1 if all elements in a set < key
 */
datascript.btset._seek = (function datascript$btset$_seek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys_l = datascript.btset.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = datascript.btset.binary_search_l.call(null,set.comparator,keys,(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return datascript.btset.path_set.call(null,path,(0),idx);
}
} else {
var keys = node.keys;
var idx = datascript.btset.binary_search_l.call(null,set.comparator,keys,(keys_l - (2)),key);
var G__7658 = (node.pointers[idx]);
var G__7659 = datascript.btset.path_set.call(null,path,level,idx);
var G__7660 = (level - datascript.btset.level_shift);
node = G__7658;
path = G__7659;
level = G__7660;
continue;
}
break;
}
});
/**
 * Returns path to the first element that is > key.
 * If all elements in a set are <= key, returns `(-rpath set) + 1`.
 * It’s a virtual path that is bigger than any path in a tree
 */
datascript.btset._rseek = (function datascript$btset$_rseek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys_l = datascript.btset.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = datascript.btset.binary_search_r.call(null,set.comparator,keys,(keys_l - (1)),key);
return datascript.btset.path_set.call(null,path,(0),idx);
} else {
var keys = node.keys;
var idx = datascript.btset.binary_search_r.call(null,set.comparator,keys,(keys_l - (2)),key);
var G__7661 = (node.pointers[idx]);
var G__7662 = datascript.btset.path_set.call(null,path,level,idx);
var G__7663 = (level - datascript.btset.level_shift);
node = G__7661;
path = G__7662;
level = G__7663;
continue;
}
break;
}
});
datascript.btset._slice = (function datascript$btset$_slice(set,key_from,key_to){
var path = datascript.btset._seek.call(null,set,key_from);
if((path < (0))){
return null;
} else {
var till_path = datascript.btset._rseek.call(null,set,key_to);
if((till_path > path)){
return (new datascript.btset.Iter(set,path,till_path,datascript.btset.keys_for.call(null,set,path),datascript.btset.path_get.call(null,path,(0))));
} else {
return null;
}
}
});
/**
 * When called with single key, returns iterator over set that contains all elements equal to the key.
 * When called with two keys (range), returns iterator for all X where key-from <= X <= key-to
 */
datascript.btset.slice = (function datascript$btset$slice(var_args){
var args7664 = [];
var len__5531__auto___7667 = arguments.length;
var i__5532__auto___7668 = (0);
while(true){
if((i__5532__auto___7668 < len__5531__auto___7667)){
args7664.push((arguments[i__5532__auto___7668]));

var G__7669 = (i__5532__auto___7668 + (1));
i__5532__auto___7668 = G__7669;
continue;
} else {
}
break;
}

var G__7666 = args7664.length;
switch (G__7666) {
case 2:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7664.length)].join('')));

}
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$2 = (function (set,key){
return datascript.btset.slice.call(null,set,key,key);
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
return datascript.btset._slice.call(null,set,key_from,key_to);
});

datascript.btset.slice.cljs$lang$maxFixedArity = 3;
datascript.btset._btset_from_sorted_arr = (function datascript$btset$_btset_from_sorted_arr(arr,cmp){
var leafs = datascript.btset.arr_map_inplace.call(null,(function (p1__7671_SHARP_){
return (new datascript.btset.Leaf(p1__7671_SHARP_));
}),datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,arr));
var current_level = leafs;
var shift = (0);
while(true){
var G__7674 = cljs.core.count.call(null,current_level);
switch (G__7674) {
case (0):
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),cmp,null,datascript.btset.uninitialized_hash));

break;
case (1):
return (new datascript.btset.BTSet(cljs.core.first.call(null,current_level),shift,arr.length,cmp,null,datascript.btset.uninitialized_hash));

break;
default:
var G__7676 = datascript.btset.arr_map_inplace.call(null,((function (current_level,shift,G__7674,leafs){
return (function (p1__7672_SHARP_){
return (new datascript.btset.Node(datascript.arrays.amap.call(null,datascript.btset.node_lim_key,p1__7672_SHARP_),p1__7672_SHARP_));
});})(current_level,shift,G__7674,leafs))
,datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,current_level));
var G__7677 = (shift + datascript.btset.level_shift);
current_level = G__7676;
shift = G__7677;
continue;

}
break;
}
});
datascript.btset._btset_from_seq = (function datascript$btset$_btset_from_seq(seq,cmp){
var arr = datascript.btset.sorted_arr_distinct.call(null,datascript.arrays.asort.call(null,cljs.core.into_array.call(null,seq),cmp),cmp);
return datascript.btset._btset_from_sorted_arr.call(null,arr,cmp);
});
datascript.btset.btset_by = (function datascript$btset$btset_by(var_args){
var args7678 = [];
var len__5531__auto___7683 = arguments.length;
var i__5532__auto___7684 = (0);
while(true){
if((i__5532__auto___7684 < len__5531__auto___7683)){
args7678.push((arguments[i__5532__auto___7684]));

var G__7685 = (i__5532__auto___7684 + (1));
i__5532__auto___7684 = G__7685;
continue;
} else {
}
break;
}

var G__7682 = args7678.length;
switch (G__7682) {
case 1:
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__5550__auto__ = (new cljs.core.IndexedSeq(args7678.slice((1)),(0)));
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5550__auto__);

}
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),cmp,null,datascript.btset.uninitialized_hash));
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic = (function (cmp,keys){
return datascript.btset._btset_from_seq.call(null,keys,cmp);
});

datascript.btset.btset_by.cljs$lang$applyTo = (function (seq7679){
var G__7680 = cljs.core.first.call(null,seq7679);
var seq7679__$1 = cljs.core.next.call(null,seq7679);
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic(G__7680,seq7679__$1);
});

datascript.btset.btset_by.cljs$lang$maxFixedArity = (1);
datascript.btset.btset = (function datascript$btset$btset(var_args){
var args7687 = [];
var len__5531__auto___7691 = arguments.length;
var i__5532__auto___7692 = (0);
while(true){
if((i__5532__auto___7692 < len__5531__auto___7691)){
args7687.push((arguments[i__5532__auto___7692]));

var G__7693 = (i__5532__auto___7692 + (1));
i__5532__auto___7692 = G__7693;
continue;
} else {
}
break;
}

var G__7690 = args7687.length;
switch (G__7690) {
case 0:
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5550__auto__ = (new cljs.core.IndexedSeq(args7687.slice((0)),(0)));
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(argseq__5550__auto__);

}
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.btset.btset_by.call(null,cljs.core.compare);
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return datascript.btset._btset_from_seq.call(null,keys,cljs.core.compare);
});

datascript.btset.btset.cljs$lang$applyTo = (function (seq7688){
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7688));
});

datascript.btset.btset.cljs$lang$maxFixedArity = (0);

//# sourceMappingURL=btset.js.map