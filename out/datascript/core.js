// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = (function datascript$core$q(var_args){
var args__5538__auto__ = [];
var len__5531__auto___10899 = arguments.length;
var i__5532__auto___10900 = (0);
while(true){
if((i__5532__auto___10900 < len__5531__auto___10899)){
args__5538__auto__.push((arguments[i__5532__auto___10900]));

var G__10901 = (i__5532__auto___10900 + (1));
i__5532__auto___10900 = G__10901;
continue;
} else {
}
break;
}

var argseq__5539__auto__ = ((((1) < args__5538__auto__.length))?(new cljs.core.IndexedSeq(args__5538__auto__.slice((1)),(0))):null);
return datascript.core.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5539__auto__);
});

datascript.core.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
return null;
});

datascript.core.q.cljs$lang$maxFixedArity = (1);

datascript.core.q.cljs$lang$applyTo = (function (seq10897){
var G__10898 = cljs.core.first.call(null,seq10897);
var seq10897__$1 = cljs.core.next.call(null,seq10897);
return datascript.core.q.cljs$core$IFn$_invoke$arity$variadic(G__10898,seq10897__$1);
});
datascript.core.q = datascript.query.q;
datascript.core.entity = (function datascript$core$entity(db,eid){
return null;
});
datascript.core.entity = datascript.impl.entity.entity;
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("de","entity?","de/entity?",555337042,null),new cljs.core.Symbol(null,"entity","entity",1189561251,null))))].join('')));
}

return entity.db;
});
datascript.core.datom = (function datascript$core$datom(var_args){
var args10902 = [];
var len__5531__auto___10905 = arguments.length;
var i__5532__auto___10906 = (0);
while(true){
if((i__5532__auto___10906 < len__5531__auto___10905)){
args10902.push((arguments[i__5532__auto___10906]));

var G__10907 = (i__5532__auto___10906 + (1));
i__5532__auto___10906 = G__10907;
continue;
} else {
}
break;
}

var G__10904 = args10902.length;
switch (G__10904) {
case 3:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10902.length)].join('')));

}
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return null;
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return null;
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return null;
});

datascript.core.datom.cljs$lang$maxFixedArity = 5;
datascript.core.datom = datascript.db.datom;
datascript.core.pull = (function datascript$core$pull(db,selector,eid){
return null;
});
datascript.core.pull = datascript.pull_api.pull;
datascript.core.pull_many = (function datascript$core$pull_many(db,selector,eids){
return null;
});
datascript.core.pull_many = datascript.pull_api.pull_many;
datascript.core.touch = (function datascript$core$touch(e){
return null;
});
datascript.core.touch = datascript.impl.entity.touch;
datascript.core.empty_db = (function datascript$core$empty_db(var_args){
var args10909 = [];
var len__5531__auto___10912 = arguments.length;
var i__5532__auto___10913 = (0);
while(true){
if((i__5532__auto___10913 < len__5531__auto___10912)){
args10909.push((arguments[i__5532__auto___10913]));

var G__10914 = (i__5532__auto___10913 + (1));
i__5532__auto___10913 = G__10914;
continue;
} else {
}
break;
}

var G__10911 = args10909.length;
switch (G__10911) {
case 0:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10909.length)].join('')));

}
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return null;
});

datascript.core.empty_db.cljs$lang$maxFixedArity = 1;
datascript.core.empty_db = datascript.db.empty_db;
datascript.core.init_db = (function datascript$core$init_db(var_args){
var args10916 = [];
var len__5531__auto___10919 = arguments.length;
var i__5532__auto___10920 = (0);
while(true){
if((i__5532__auto___10920 < len__5531__auto___10919)){
args10916.push((arguments[i__5532__auto___10920]));

var G__10921 = (i__5532__auto___10920 + (1));
i__5532__auto___10920 = G__10921;
continue;
} else {
}
break;
}

var G__10918 = args10916.length;
switch (G__10918) {
case 1:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10916.length)].join('')));

}
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return null;
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return null;
});

datascript.core.init_db.cljs$lang$maxFixedArity = 2;
datascript.core.init_db = datascript.db.init_db;
datascript.core.datom_QMARK_ = (function datascript$core$datom_QMARK_(x){
return null;
});
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
datascript.core.db_QMARK_ = (function datascript$core$db_QMARK_(x){
return null;
});
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
datascript.core.tx0 = datascript.db.tx0;
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__10923_SHARP_){
var and__4461__auto__ = orig_pred.call(null,p1__10923_SHARP_);
if(cljs.core.truth_(and__4461__auto__)){
return pred.call(null,orig_db,p1__10923_SHARP_);
} else {
return and__4461__auto__;
}
});})(fdb,orig_pred,orig_db))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__10924_SHARP_){
return pred.call(null,db,p1__10924_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
datascript.core.with$ = (function datascript$core$with(var_args){
var args10925 = [];
var len__5531__auto___10928 = arguments.length;
var i__5532__auto___10929 = (0);
while(true){
if((i__5532__auto___10929 < len__5531__auto___10928)){
args10925.push((arguments[i__5532__auto___10929]));

var G__10930 = (i__5532__auto___10929 + (1));
i__5532__auto___10929 = G__10930;
continue;
} else {
}
break;
}

var G__10927 = args10925.length;
switch (G__10927) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10925.length)].join('')));

}
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;
datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args10932 = [];
var len__5531__auto___10935 = arguments.length;
var i__5532__auto___10936 = (0);
while(true){
if((i__5532__auto___10936 < len__5531__auto___10935)){
args10932.push((arguments[i__5532__auto___10936]));

var G__10937 = (i__5532__auto___10936 + (1));
i__5532__auto___10936 = G__10937;
continue;
} else {
}
break;
}

var G__10934 = args10932.length;
switch (G__10934) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10932.length)].join('')));

}
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;
datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args10939 = [];
var len__5531__auto___10942 = arguments.length;
var i__5532__auto___10943 = (0);
while(true){
if((i__5532__auto___10943 < len__5531__auto___10942)){
args10939.push((arguments[i__5532__auto___10943]));

var G__10944 = (i__5532__auto___10943 + (1));
i__5532__auto___10943 = G__10944;
continue;
} else {
}
break;
}

var G__10941 = args10939.length;
switch (G__10941) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10939.length)].join('')));

}
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;
datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
datascript.core.entid = (function datascript$core$entid(db,eid){
return null;
});
datascript.core.entid = datascript.db.entid;
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__4461__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__4461__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__4461__auto__;
}
});
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args10950 = [];
var len__5531__auto___10953 = arguments.length;
var i__5532__auto___10954 = (0);
while(true){
if((i__5532__auto___10954 < len__5531__auto___10953)){
args10950.push((arguments[i__5532__auto___10954]));

var G__10955 = (i__5532__auto___10954 + (1));
i__5532__auto___10954 = G__10955;
continue;
} else {
}
break;
}

var G__10952 = args10950.length;
switch (G__10952) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10950.length)].join('')));

}
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;
datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args10957 = [];
var len__5531__auto___10960 = arguments.length;
var i__5532__auto___10961 = (0);
while(true){
if((i__5532__auto___10961 < len__5531__auto___10960)){
args10957.push((arguments[i__5532__auto___10961]));

var G__10962 = (i__5532__auto___10961 + (1));
i__5532__auto___10961 = G__10962;
continue;
} else {
}
break;
}

var G__10959 = args10957.length;
switch (G__10959) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10957.length)].join('')));

}
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;
datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args10964 = [];
var len__5531__auto___10973 = arguments.length;
var i__5532__auto___10974 = (0);
while(true){
if((i__5532__auto___10974 < len__5531__auto___10973)){
args10964.push((arguments[i__5532__auto___10974]));

var G__10975 = (i__5532__auto___10974 + (1));
i__5532__auto___10974 = G__10975;
continue;
} else {
}
break;
}

var G__10966 = args10964.length;
switch (G__10966) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10964.length)].join('')));

}
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__10967_10977 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__10968_10978 = null;
var count__10969_10979 = (0);
var i__10970_10980 = (0);
while(true){
if((i__10970_10980 < count__10969_10979)){
var vec__10971_10981 = cljs.core._nth.call(null,chunk__10968_10978,i__10970_10980);
var __10982 = cljs.core.nth.call(null,vec__10971_10981,(0),null);
var callback_10983 = cljs.core.nth.call(null,vec__10971_10981,(1),null);
callback_10983.call(null,report);

var G__10984 = seq__10967_10977;
var G__10985 = chunk__10968_10978;
var G__10986 = count__10969_10979;
var G__10987 = (i__10970_10980 + (1));
seq__10967_10977 = G__10984;
chunk__10968_10978 = G__10985;
count__10969_10979 = G__10986;
i__10970_10980 = G__10987;
continue;
} else {
var temp__4425__auto___10988 = cljs.core.seq.call(null,seq__10967_10977);
if(temp__4425__auto___10988){
var seq__10967_10989__$1 = temp__4425__auto___10988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10967_10989__$1)){
var c__5276__auto___10990 = cljs.core.chunk_first.call(null,seq__10967_10989__$1);
var G__10991 = cljs.core.chunk_rest.call(null,seq__10967_10989__$1);
var G__10992 = c__5276__auto___10990;
var G__10993 = cljs.core.count.call(null,c__5276__auto___10990);
var G__10994 = (0);
seq__10967_10977 = G__10991;
chunk__10968_10978 = G__10992;
count__10969_10979 = G__10993;
i__10970_10980 = G__10994;
continue;
} else {
var vec__10972_10995 = cljs.core.first.call(null,seq__10967_10989__$1);
var __10996 = cljs.core.nth.call(null,vec__10972_10995,(0),null);
var callback_10997 = cljs.core.nth.call(null,vec__10972_10995,(1),null);
callback_10997.call(null,report);

var G__10998 = cljs.core.next.call(null,seq__10967_10989__$1);
var G__10999 = null;
var G__11000 = (0);
var G__11001 = (0);
seq__10967_10977 = G__10998;
chunk__10968_10978 = G__10999;
count__10969_10979 = G__11000;
i__10970_10980 = G__11001;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args11003 = [];
var len__5531__auto___11012 = arguments.length;
var i__5532__auto___11013 = (0);
while(true){
if((i__5532__auto___11013 < len__5531__auto___11012)){
args11003.push((arguments[i__5532__auto___11013]));

var G__11014 = (i__5532__auto___11013 + (1));
i__5532__auto___11013 = G__11014;
continue;
} else {
}
break;
}

var G__11005 = args11003.length;
switch (G__11005) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11003.length)].join('')));

}
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__11002_SHARP_){
return cljs.core.assoc.call(null,p1__11002_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__11006_11016 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__11007_11017 = null;
var count__11008_11018 = (0);
var i__11009_11019 = (0);
while(true){
if((i__11009_11019 < count__11008_11018)){
var vec__11010_11020 = cljs.core._nth.call(null,chunk__11007_11017,i__11009_11019);
var __11021 = cljs.core.nth.call(null,vec__11010_11020,(0),null);
var callback_11022 = cljs.core.nth.call(null,vec__11010_11020,(1),null);
callback_11022.call(null,report);

var G__11023 = seq__11006_11016;
var G__11024 = chunk__11007_11017;
var G__11025 = count__11008_11018;
var G__11026 = (i__11009_11019 + (1));
seq__11006_11016 = G__11023;
chunk__11007_11017 = G__11024;
count__11008_11018 = G__11025;
i__11009_11019 = G__11026;
continue;
} else {
var temp__4425__auto___11027 = cljs.core.seq.call(null,seq__11006_11016);
if(temp__4425__auto___11027){
var seq__11006_11028__$1 = temp__4425__auto___11027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11006_11028__$1)){
var c__5276__auto___11029 = cljs.core.chunk_first.call(null,seq__11006_11028__$1);
var G__11030 = cljs.core.chunk_rest.call(null,seq__11006_11028__$1);
var G__11031 = c__5276__auto___11029;
var G__11032 = cljs.core.count.call(null,c__5276__auto___11029);
var G__11033 = (0);
seq__11006_11016 = G__11030;
chunk__11007_11017 = G__11031;
count__11008_11018 = G__11032;
i__11009_11019 = G__11033;
continue;
} else {
var vec__11011_11034 = cljs.core.first.call(null,seq__11006_11028__$1);
var __11035 = cljs.core.nth.call(null,vec__11011_11034,(0),null);
var callback_11036 = cljs.core.nth.call(null,vec__11011_11034,(1),null);
callback_11036.call(null,report);

var G__11037 = cljs.core.next.call(null,seq__11006_11028__$1);
var G__11038 = null;
var G__11039 = (0);
var G__11040 = (0);
seq__11006_11016 = G__11037;
chunk__11007_11017 = G__11038;
count__11008_11018 = G__11039;
i__11009_11019 = G__11040;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args11041 = [];
var len__5531__auto___11044 = arguments.length;
var i__5532__auto___11045 = (0);
while(true){
if((i__5532__auto___11045 < len__5531__auto___11044)){
args11041.push((arguments[i__5532__auto___11045]));

var G__11046 = (i__5532__auto___11045 + (1));
i__5532__auto___11045 = G__11046;
continue;
} else {
}
break;
}

var G__11043 = args11041.length;
switch (G__11043) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11041.length)].join('')));

}
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__11048_11054 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__11049_11055 = null;
var count__11050_11056 = (0);
var i__11051_11057 = (0);
while(true){
if((i__11051_11057 < count__11050_11056)){
var vec__11052_11058 = cljs.core._nth.call(null,chunk__11049_11055,i__11051_11057);
var tag_11059 = cljs.core.nth.call(null,vec__11052_11058,(0),null);
var cb_11060 = cljs.core.nth.call(null,vec__11052_11058,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_11059,cb_11060);

var G__11061 = seq__11048_11054;
var G__11062 = chunk__11049_11055;
var G__11063 = count__11050_11056;
var G__11064 = (i__11051_11057 + (1));
seq__11048_11054 = G__11061;
chunk__11049_11055 = G__11062;
count__11050_11056 = G__11063;
i__11051_11057 = G__11064;
continue;
} else {
var temp__4425__auto___11065 = cljs.core.seq.call(null,seq__11048_11054);
if(temp__4425__auto___11065){
var seq__11048_11066__$1 = temp__4425__auto___11065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11048_11066__$1)){
var c__5276__auto___11067 = cljs.core.chunk_first.call(null,seq__11048_11066__$1);
var G__11068 = cljs.core.chunk_rest.call(null,seq__11048_11066__$1);
var G__11069 = c__5276__auto___11067;
var G__11070 = cljs.core.count.call(null,c__5276__auto___11067);
var G__11071 = (0);
seq__11048_11054 = G__11068;
chunk__11049_11055 = G__11069;
count__11050_11056 = G__11070;
i__11051_11057 = G__11071;
continue;
} else {
var vec__11053_11072 = cljs.core.first.call(null,seq__11048_11066__$1);
var tag_11073 = cljs.core.nth.call(null,vec__11053_11072,(0),null);
var cb_11074 = cljs.core.nth.call(null,vec__11053_11072,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_11073,cb_11074);

var G__11075 = cljs.core.next.call(null,seq__11048_11066__$1);
var G__11076 = null;
var G__11077 = (0);
var G__11078 = (0);
seq__11048_11054 = G__11075;
chunk__11049_11055 = G__11076;
count__11050_11056 = G__11077;
i__11051_11057 = G__11078;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args11079 = [];
var len__5531__auto___11082 = arguments.length;
var i__5532__auto___11083 = (0);
while(true){
if((i__5532__auto___11083 < len__5531__auto___11082)){
args11079.push((arguments[i__5532__auto___11083]));

var G__11084 = (i__5532__auto___11083 + (1));
i__5532__auto___11083 = G__11084;
continue;
} else {
}
break;
}

var G__11081 = args11079.length;
switch (G__11081) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11079.length)].join('')));

}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;
datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return cljs.core.deref.call(null,conn);
});
datascript.core.transact = (function datascript$core$transact(var_args){
var args11086 = [];
var len__5531__auto___11092 = arguments.length;
var i__5532__auto___11093 = (0);
while(true){
if((i__5532__auto___11093 < len__5531__auto___11092)){
args11086.push((arguments[i__5532__auto___11093]));

var G__11094 = (i__5532__auto___11093 + (1));
i__5532__auto___11093 = G__11094;
continue;
} else {
}
break;
}

var G__11088 = args11086.length;
switch (G__11088) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11086.length)].join('')));

}
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core11089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core11089 = (function (conn,tx_data,tx_meta,res,meta11090){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta11090 = meta11090;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core11089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_11091,meta11090__$1){
var self__ = this;
var _11091__$1 = this;
return (new datascript.core.t_datascript$core11089(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta11090__$1));
});})(res))
;

datascript.core.t_datascript$core11089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_11091){
var self__ = this;
var _11091__$1 = this;
return self__.meta11090;
});})(res))
;

datascript.core.t_datascript$core11089.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core11089.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core11089.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core11089.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta11090","meta11090",-23321895,null)], null);
});})(res))
;

datascript.core.t_datascript$core11089.cljs$lang$type = true;

datascript.core.t_datascript$core11089.cljs$lang$ctorStr = "datascript.core/t_datascript$core11089";

datascript.core.t_datascript$core11089.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"datascript.core/t_datascript$core11089");
});})(res))
;

datascript.core.__GT_t_datascript$core11089 = ((function (res){
return (function datascript$core$__GT_t_datascript$core11089(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta11090){
return (new datascript.core.t_datascript$core11089(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta11090));
});})(res))
;

}

return (new datascript.core.t_datascript$core11089(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;
datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core11099 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core11099 = (function (future_call,f,res,realized,meta11100){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta11100 = meta11100;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core11099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_11101,meta11100__$1){
var self__ = this;
var _11101__$1 = this;
return (new datascript.core.t_datascript$core11099(self__.future_call,self__.f,self__.res,self__.realized,meta11100__$1));
});})(res,realized))
;

datascript.core.t_datascript$core11099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_11101){
var self__ = this;
var _11101__$1 = this;
return self__.meta11100;
});})(res,realized))
;

datascript.core.t_datascript$core11099.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core11099.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core11099.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core11099.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta11100","meta11100",782212582,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core11099.cljs$lang$type = true;

datascript.core.t_datascript$core11099.cljs$lang$ctorStr = "datascript.core/t_datascript$core11099";

datascript.core.t_datascript$core11099.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__5071__auto__,writer__5072__auto__,opt__5073__auto__){
return cljs.core._write.call(null,writer__5072__auto__,"datascript.core/t_datascript$core11099");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core11099 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core11099(future_call__$1,f__$1,res__$1,realized__$1,meta11100){
return (new datascript.core.t_datascript$core11099(future_call__$1,f__$1,res__$1,realized__$1,meta11100));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core11099(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args11102 = [];
var len__5531__auto___11105 = arguments.length;
var i__5532__auto___11106 = (0);
while(true){
if((i__5532__auto___11106 < len__5531__auto___11105)){
args11102.push((arguments[i__5532__auto___11106]));

var G__11107 = (i__5532__auto___11106 + (1));
i__5532__auto___11106 = G__11107;
continue;
} else {
}
break;
}

var G__11104 = args11102.length;
switch (G__11104) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11102.length)].join('')));

}
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;
datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args11109 = [];
var len__5531__auto___11112 = arguments.length;
var i__5532__auto___11113 = (0);
while(true){
if((i__5532__auto___11113 < len__5531__auto___11112)){
args11109.push((arguments[i__5532__auto___11113]));

var G__11114 = (i__5532__auto___11113 + (1));
i__5532__auto___11113 = G__11114;
continue;
} else {
}
break;
}

var G__11111 = args11109.length;
switch (G__11111) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11109.length)].join('')));

}
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;
datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str(uuid)].join(''),(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=core.js.map