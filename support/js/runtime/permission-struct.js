// This is automatically generated by bootstrap-js-compiler.ss
// Please don't hand-edit this file.
(function(_that) {var _SHARED = {};
var permission_colon_location = function () { plt.types.Struct.call(this, "make-permission:location", []); };
permission_colon_location.prototype = new plt.types.Struct();

var make_dash_permission_colon_location = function () { return new permission_colon_location(); };


var permission_colon_location_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_location; };

var permission_colon_send_dash_sms = function () { plt.types.Struct.call(this, "make-permission:send-sms", []); };
permission_colon_send_dash_sms.prototype = new plt.types.Struct();

var make_dash_permission_colon_send_dash_sms = function () { return new permission_colon_send_dash_sms(); };


var permission_colon_send_dash_sms_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_send_dash_sms; };

var permission_colon_receive_dash_sms = function () { plt.types.Struct.call(this, "make-permission:receive-sms", []); };
permission_colon_receive_dash_sms.prototype = new plt.types.Struct();

var make_dash_permission_colon_receive_dash_sms = function () { return new permission_colon_receive_dash_sms(); };


var permission_colon_receive_dash_sms_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_receive_dash_sms; };

var permission_colon_tilt = function () { plt.types.Struct.call(this, "make-permission:tilt", []); };
permission_colon_tilt.prototype = new plt.types.Struct();

var make_dash_permission_colon_tilt = function () { return new permission_colon_tilt(); };


var permission_colon_tilt_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_tilt; };

var permission_colon_shake = function () { plt.types.Struct.call(this, "make-permission:shake", []); };
permission_colon_shake.prototype = new plt.types.Struct();

var make_dash_permission_colon_shake = function () { return new permission_colon_shake(); };


var permission_colon_shake_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_shake; };

var permission_colon_internet = function () { plt.types.Struct.call(this, "make-permission:internet", []); };
permission_colon_internet.prototype = new plt.types.Struct();

var make_dash_permission_colon_internet = function () { return new permission_colon_internet(); };


var permission_colon_internet_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_internet; };

var permission_colon_telephony = function () { plt.types.Struct.call(this, "make-permission:telephony", []); };
permission_colon_telephony.prototype = new plt.types.Struct();

var make_dash_permission_colon_telephony = function () { return new permission_colon_telephony(); };


var permission_colon_telephony_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_telephony; };

var permission_colon_wake_dash_lock = function () { plt.types.Struct.call(this, "make-permission:wake-lock", []); };
permission_colon_wake_dash_lock.prototype = new plt.types.Struct();

var make_dash_permission_colon_wake_dash_lock = function () { return new permission_colon_wake_dash_lock(); };


var permission_colon_wake_dash_lock_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_wake_dash_lock; };

var permission_colon_open_dash_image_dash_url = function (url) { plt.types.Struct.call(this, "make-permission:open-image-url", [url]);this.url = url; };
permission_colon_open_dash_image_dash_url.prototype = new plt.types.Struct();

var make_dash_permission_colon_open_dash_image_dash_url = function (id0) { return new permission_colon_open_dash_image_dash_url(id0); };
var permission_colon_open_dash_image_dash_url_dash_url = function(obj) {
     if (permission_colon_open_dash_image_dash_url_question_ (obj)) {
        return obj.url;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('permission:open-image-url-url: not a permission:open-image-url: ~s', [obj]));
     }
};

var set_dash_permission_colon_open_dash_image_dash_url_dash_url_bang_ = function(obj,newVal) {
	 if (permission_colon_open_dash_image_dash_url_question_ (obj)) {
		obj.url = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_permission_colon_open_dash_image_dash_url_dash_url_bang_: not a permission:open-image-url: ~s', [obj]));
     }
};

var permission_colon_open_dash_image_dash_url_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_open_dash_image_dash_url; };

var permission_colon_universe = function (url) { plt.types.Struct.call(this, "make-permission:universe", [url]);this.url = url; };
permission_colon_universe.prototype = new plt.types.Struct();

var make_dash_permission_colon_universe = function (id0) { return new permission_colon_universe(id0); };
var permission_colon_universe_dash_url = function(obj) {
     if (permission_colon_universe_question_ (obj)) {
        return obj.url;
     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('permission:universe-url: not a permission:universe: ~s', [obj]));
     }
};

var set_dash_permission_colon_universe_dash_url_bang_ = function(obj,newVal) {
	 if (permission_colon_universe_question_ (obj)) {
		obj.url = newVal;
           obj._fields[0] = newVal;     } else {
        throw new plt.Kernel.MobyRuntimeError(            plt.Kernel.format('set_dash_permission_colon_universe_dash_url_bang_: not a permission:universe: ~s', [obj]));
     }
};

var permission_colon_universe_question_ = function(obj) { 
              return obj != null && obj != undefined && obj instanceof permission_colon_universe; };

var permission_question_ = function(datum) { return (permission_colon_location_question_(datum)||permission_colon_send_dash_sms_question_(datum)||permission_colon_receive_dash_sms_question_(datum)||permission_colon_tilt_question_(datum)||permission_colon_shake_question_(datum)||permission_colon_internet_question_(datum)||permission_colon_telephony_question_(datum)||permission_colon_wake_dash_lock_question_(datum)||permission_colon_open_dash_image_dash_url_question_(datum)||permission_colon_universe_question_(datum)); };
var PERMISSION_colon_LOCATION; 
var PERMISSION_colon_SEND_dash_SMS; 
var PERMISSION_colon_RECEIVE_dash_SMS; 
var PERMISSION_colon_TILT; 
var PERMISSION_colon_SHAKE; 
var PERMISSION_colon_INTERNET; 
var PERMISSION_colon_TELEPHONY; 
var PERMISSION_colon_WAKE_dash_LOCK; 
var permission_dash__greaterthan_string = function(a_dash_permission) { return (permission_colon_location_question_(a_dash_permission) ?
 _SHARED[11] :
 (permission_colon_send_dash_sms_question_(a_dash_permission) ?
 _SHARED[12] :
 (permission_colon_receive_dash_sms_question_(a_dash_permission) ?
 _SHARED[13] :
 (permission_colon_tilt_question_(a_dash_permission) ?
 _SHARED[14] :
 (permission_colon_shake_question_(a_dash_permission) ?
 _SHARED[15] :
 (permission_colon_internet_question_(a_dash_permission) ?
 _SHARED[16] :
 (permission_colon_telephony_question_(a_dash_permission) ?
 _SHARED[17] :
 (permission_colon_wake_dash_lock_question_(a_dash_permission) ?
 _SHARED[18] :
 (permission_colon_open_dash_image_dash_url_question_(a_dash_permission) ?
 plt.Kernel.format(_SHARED[19], [permission_colon_open_dash_image_dash_url_dash_url(a_dash_permission)]) :
 (permission_colon_universe_question_(a_dash_permission) ?
 plt.Kernel.format(_SHARED[20], [permission_colon_universe_dash_url(a_dash_permission)]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[21]))))))))))); };
var string_dash__greaterthan_permission = function(a_dash_ref) { return ((function() { 

var is_dash_permission_slash_1_question_ = function(permission_dash_name, a_dash_ref) { return (plt.Kernel._greaterthan_(plt.Kernel.string_dash_length(a_dash_ref),plt.Kernel.string_dash_length(permission_dash_name), [])&&plt.Kernel.string_equal__question_(plt.Kernel.substring(a_dash_ref,_SHARED[23],plt.Kernel.string_dash_length(permission_dash_name)),permission_dash_name, [])); };
var construct_dash_permission_slash_1 = function(permission_dash_name, a_dash_ref, make_dash_permission_colon__star_) { return plt.Kernel.apply(make_dash_permission_colon__star_,                     plt.Kernel.list([plt.Kernel.substring(a_dash_ref,plt.Kernel.add1(plt.Kernel.string_dash_length(permission_dash_name)),plt.Kernel.string_dash_length(a_dash_ref))]),                    []); };
(function (toplevel_dash_expression_dash_show22) { 

 })(plt.Kernel.identity)
return (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[11], []) ?
 PERMISSION_colon_LOCATION :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[12], []) ?
 PERMISSION_colon_SEND_dash_SMS :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[13], []) ?
 PERMISSION_colon_RECEIVE_dash_SMS :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[14], []) ?
 PERMISSION_colon_TILT :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[15], []) ?
 PERMISSION_colon_SHAKE :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[16], []) ?
 PERMISSION_colon_INTERNET :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[17], []) ?
 PERMISSION_colon_TELEPHONY :
 (plt.Kernel.string_equal__question_(a_dash_ref,_SHARED[18], []) ?
 PERMISSION_colon_WAKE_dash_LOCK :
 (is_dash_permission_slash_1_question_(_SHARED[24],a_dash_ref) ?
 construct_dash_permission_slash_1(_SHARED[24],a_dash_ref,(plt.types.liftToplevelToFunctionValue(make_dash_permission_colon_open_dash_image_dash_url,(plt.types.String.makeInstance("make-permission:open-image-url")),1,(plt.types.Rational.makeInstance(1, 1))))) :
 (is_dash_permission_slash_1_question_(_SHARED[25],a_dash_ref) ?
 construct_dash_permission_slash_1(_SHARED[25],a_dash_ref,(plt.types.liftToplevelToFunctionValue(make_dash_permission_colon_universe,(plt.types.String.makeInstance("make-permission:universe")),1,(plt.types.Rational.makeInstance(1, 1))))) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[26])))))))))));
              })()); };
var permission_dash__greaterthan_android_dash_permissions = function(a_dash_permission) { return (permission_colon_location_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[27],_SHARED[28]]) :
 (permission_colon_send_dash_sms_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[29]]) :
 (permission_colon_receive_dash_sms_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[30]]) :
 (permission_colon_tilt_question_(a_dash_permission) ?
 plt.Kernel.list([]) :
 (permission_colon_shake_question_(a_dash_permission) ?
 plt.Kernel.list([]) :
 (permission_colon_internet_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[31]]) :
 (permission_colon_telephony_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[32]]) :
 (permission_colon_wake_dash_lock_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[33]]) :
 (permission_colon_open_dash_image_dash_url_question_(a_dash_permission) ?
 plt.Kernel.list([]) :
 (permission_colon_universe_question_(a_dash_permission) ?
 plt.Kernel.list([_SHARED[31]]) :
 plt.Kernel.error((plt.types.Symbol.makeInstance("cond")),_SHARED[34]))))))))))); };_SHARED[15] = (plt.types.String.makeInstance("PERMISSION:SHAKE"));
_SHARED[27] = (plt.types.String.makeInstance("android.permission.ACCESS_COARSE_LOCATION"));
_SHARED[21] = (plt.types.String.makeInstance("cond: fell out of cond around \"offset=1583 line=44 span=812 id=\\\"compiler/permission.ss\\\"\""));
_SHARED[26] = (plt.types.String.makeInstance("cond: fell out of cond around \"offset=3448 line=86 span=897 id=\\\"compiler/permission.ss\\\"\""));
_SHARED[34] = (plt.types.String.makeInstance("cond: fell out of cond around \"offset=4573 line=114 span=844 id=\\\"compiler/permission.ss\\\"\""));
_SHARED[30] = (plt.types.String.makeInstance("android.permission.RECEIVE_SMS"));
_SHARED[29] = (plt.types.String.makeInstance("android.permission.SEND_SMS"));
_SHARED[33] = (plt.types.String.makeInstance("android.permission.WAKE_LOCK"));
_SHARED[28] = (plt.types.String.makeInstance("android.permission.ACCESS_FINE_LOCATION"));
_SHARED[31] = (plt.types.String.makeInstance("android.permission.INTERNET"));
_SHARED[32] = (plt.types.String.makeInstance("android.permission.ACCESS_COARSE_UPDATES"));
_SHARED[20] = (plt.types.String.makeInstance("PERMISSION:UNIVERSE ~a"));
_SHARED[18] = (plt.types.String.makeInstance("PERMISSION:WAKE-LOCK"));
_SHARED[14] = (plt.types.String.makeInstance("PERMISSION:TILT"));
_SHARED[25] = (plt.types.String.makeInstance("PERMISSION:UNIVERSE"));
_SHARED[17] = (plt.types.String.makeInstance("PERMISSION:TELEPHONY"));
_SHARED[24] = (plt.types.String.makeInstance("PERMISSION:OPEN-IMAGE-URL"));
_SHARED[13] = (plt.types.String.makeInstance("PERMISSION:RECEIVE-SMS"));
_SHARED[12] = (plt.types.String.makeInstance("PERMISSION:SEND-SMS"));
_SHARED[19] = (plt.types.String.makeInstance("PERMISSION:OPEN-IMAGE-URL ~a"));
_SHARED[16] = (plt.types.String.makeInstance("PERMISSION:INTERNET"));
_SHARED[11] = (plt.types.String.makeInstance("PERMISSION:LOCATION"));
_SHARED[23] = (plt.types.Rational.makeInstance(0, 1));

(function() { 
  ((function (toplevel_dash_expression_dash_show0) { 











PERMISSION_colon_LOCATION = make_dash_permission_colon_location();
PERMISSION_colon_SEND_dash_SMS = make_dash_permission_colon_send_dash_sms();
PERMISSION_colon_RECEIVE_dash_SMS = make_dash_permission_colon_send_dash_sms();
PERMISSION_colon_TILT = make_dash_permission_colon_tilt();
PERMISSION_colon_SHAKE = make_dash_permission_colon_shake();
PERMISSION_colon_INTERNET = make_dash_permission_colon_internet();
PERMISSION_colon_TELEPHONY = make_dash_permission_colon_telephony();
PERMISSION_colon_WAKE_dash_LOCK = make_dash_permission_colon_wake_dash_lock();


 })  )(arguments[0] || plt.Kernel.identity);
_that["permission_colon_internet_question_"] = permission_colon_internet_question_;
_that["permission_colon_shake_question_"] = permission_colon_shake_question_;
_that["permission_colon_tilt_question_"] = permission_colon_tilt_question_;
_that["permission_colon_wake_dash_lock_question_"] = permission_colon_wake_dash_lock_question_;
_that["set_dash_permission_colon_universe_dash_url_bang_"] = set_dash_permission_colon_universe_dash_url_bang_;
_that["string_dash__greaterthan_permission"] = string_dash__greaterthan_permission;
_that["set_dash_permission_colon_open_dash_image_dash_url_dash_url_bang_"] = set_dash_permission_colon_open_dash_image_dash_url_dash_url_bang_;
_that["permission_question_"] = permission_question_;
_that["permission_colon_universe_question_"] = permission_colon_universe_question_;
_that["permission_colon_wake_dash_lock"] = permission_colon_wake_dash_lock;
_that["permission_colon_universe"] = permission_colon_universe;
_that["permission_colon_universe_dash_url"] = permission_colon_universe_dash_url;
_that["permission_colon_telephony_question_"] = permission_colon_telephony_question_;
_that["permission_colon_tilt"] = permission_colon_tilt;
_that["permission_colon_telephony"] = permission_colon_telephony;
_that["permission_colon_receive_dash_sms_question_"] = permission_colon_receive_dash_sms_question_;
_that["permission_colon_send_dash_sms_question_"] = permission_colon_send_dash_sms_question_;
_that["permission_colon_shake"] = permission_colon_shake;
_that["permission_colon_send_dash_sms"] = permission_colon_send_dash_sms;
_that["permission_colon_location_question_"] = permission_colon_location_question_;
_that["permission_colon_open_dash_image_dash_url_question_"] = permission_colon_open_dash_image_dash_url_question_;
_that["permission_colon_receive_dash_sms"] = permission_colon_receive_dash_sms;
_that["permission_colon_open_dash_image_dash_url"] = permission_colon_open_dash_image_dash_url;
_that["permission_colon_open_dash_image_dash_url_dash_url"] = permission_colon_open_dash_image_dash_url_dash_url;
_that["permission_colon_location"] = permission_colon_location;
_that["make_dash_permission_colon_open_dash_image_dash_url"] = make_dash_permission_colon_open_dash_image_dash_url;
_that["make_dash_permission_colon_tilt"] = make_dash_permission_colon_tilt;
_that["make_dash_permission_colon_wake_dash_lock"] = make_dash_permission_colon_wake_dash_lock;
_that["permission_dash__greaterthan_string"] = permission_dash__greaterthan_string;
_that["permission_colon_internet"] = permission_colon_internet;
_that["permission_dash__greaterthan_android_dash_permissions"] = permission_dash__greaterthan_android_dash_permissions;
_that["make_dash_permission_colon_universe"] = make_dash_permission_colon_universe;
_that["make_dash_permission_colon_send_dash_sms"] = make_dash_permission_colon_send_dash_sms;
_that["make_dash_permission_colon_shake"] = make_dash_permission_colon_shake;
_that["make_dash_permission_colon_telephony"] = make_dash_permission_colon_telephony;
_that["make_dash_permission_colon_receive_dash_sms"] = make_dash_permission_colon_receive_dash_sms;
_that["PERMISSION_colon_SHAKE"] = PERMISSION_colon_SHAKE;
_that["make_dash_permission_colon_internet"] = make_dash_permission_colon_internet;
_that["make_dash_permission_colon_location"] = make_dash_permission_colon_location;
_that["PERMISSION_colon_TILT"] = PERMISSION_colon_TILT;
_that["PERMISSION_colon_WAKE_dash_LOCK"] = PERMISSION_colon_WAKE_dash_LOCK;
_that["PERMISSION_colon_TELEPHONY"] = PERMISSION_colon_TELEPHONY;
_that["PERMISSION_colon_RECEIVE_dash_SMS"] = PERMISSION_colon_RECEIVE_dash_SMS;
_that["PERMISSION_colon_SEND_dash_SMS"] = PERMISSION_colon_SEND_dash_SMS;
_that["PERMISSION_colon_LOCATION"] = PERMISSION_colon_LOCATION;
_that["PERMISSION_colon_INTERNET"] = PERMISSION_colon_INTERNET;
})();})(this);
