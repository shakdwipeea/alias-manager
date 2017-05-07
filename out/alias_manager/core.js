// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('alias_manager.core');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('cljs.nodejs');
goog.require('datascript.transit');
goog.require('alias_manager.shell');
alias_manager.core.fs = cljs.nodejs.require.call(null,"fs");
alias_manager.core.data_file = "/home/akash/workspace/alias-manager/a.data";
alias_manager.core.write_file = (function alias_manager$core$write_file(content){
return alias_manager.core.fs.writeFileSync(alias_manager.core.data_file,content);
});
alias_manager.core.read_file = (function alias_manager$core$read_file(){
return alias_manager.core.fs.readFileSync(alias_manager.core.data_file,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8"], null)));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
alias_manager.core.schema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("alias","name","alias/name",1616766585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("alias","value","alias/value",415961017),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","type","db/type",1174271242),new cljs.core.Keyword("db.type","string","db.type/string",1432572808)], null)], null);
if(typeof alias_manager.core.conn !== 'undefined'){
} else {
alias_manager.core.conn = datascript.core.create_conn.call(null,alias_manager.core.schema);
}
alias_manager.core.get_alias = (function alias_manager$core$get_alias(name){
return new cljs.core.Keyword("alias","value","alias/value",415961017).cljs$core$IFn$_invoke$arity$1(datascript.core.entity.call(null,cljs.core.deref.call(null,alias_manager.core.conn),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("alias","name","alias/name",1616766585),name], null)));
});
alias_manager.core.new_alias = (function alias_manager$core$new_alias(name,command){
var temp__4423__auto__ = alias_manager.core.get_alias.call(null,name);
if(cljs.core.truth_(temp__4423__auto__)){
var value = temp__4423__auto__;
return cljs.core.println.call(null,"Key already exists");
} else {
return datascript.core.transact_BANG_.call(null,alias_manager.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("alias","name","alias/name",1616766585),name,new cljs.core.Keyword("alias","value","alias/value",415961017),command], null)], null));
}
});
alias_manager.core.app = (function alias_manager$core$app(opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__4461__auto__ = cljs.core._EQ_.call(null,opt1,"-n");
if(and__4461__auto__){
var and__4461__auto____$1 = opt2;
if(cljs.core.truth_(and__4461__auto____$1)){
return opt3;
} else {
return and__4461__auto____$1;
}
} else {
return and__4461__auto__;
}
})())){
return alias_manager.core.new_alias.call(null,opt2,opt3);
} else {
if(cljs.core._EQ_.call(null,opt1,"-c")){
return cljs.core.reset_BANG_.call(null,alias_manager.core.conn,datascript.core.empty_db.call(null,alias_manager.core.schema));
} else {
var G__13477 = opt1;
var G__13477__$1 = (((G__13477 == null))?null:alias_manager.core.get_alias.call(null,G__13477));
var G__13477__$2 = (((G__13477__$1 == null))?null:alias_manager.shell.exec.call(null,G__13477__$1));
return G__13477__$2;

}
}
});
alias_manager.core.get_db = (function alias_manager$core$get_db(){
try{return datascript.transit.read_transit_str.call(null,alias_manager.core.read_file.call(null));
}catch (e13479){if((e13479 instanceof Object)){
var e = e13479;
return null;
} else {
throw e13479;

}
}});
alias_manager.core._main = (function alias_manager$core$_main(opt1,opt2,opt3){
var temp__4423__auto___13480 = alias_manager.core.get_db.call(null);
if(cljs.core.truth_(temp__4423__auto___13480)){
var db_13481 = temp__4423__auto___13480;
cljs.core.reset_BANG_.call(null,alias_manager.core.conn,db_13481);
} else {
}

alias_manager.core.app.call(null,opt1,opt2,opt3);

return alias_manager.core.write_file.call(null,datascript.transit.write_transit_str.call(null,datascript.core.db.call(null,alias_manager.core.conn)));
});
cljs.core._STAR_main_cli_fn_STAR_ = alias_manager.core._main;

//# sourceMappingURL=core.js.map