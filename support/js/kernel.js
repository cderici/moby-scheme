

// Core classes
// Struct: implemented by all structures
// Equatable: implemented by things that can be compared by equal?



// Fixme: figure out how to do packages properly.
var org = {};
org.plt = {};



//////////////////////////////////////////////////////////////////////
// Kernel
(function() {
    function chainTest(test, first, second, rest) {
	if (! test(first, second))
	    return false;
	if (rest.length == 0)
	    return true;
	if (! test(second, rest[0]))
	    return false;
	for(var i = 0; i < rest.length - 1; i++) {
	    if (! test(rest[i], rest[i+1]))
		return false;
	}
	return true;
    }


    org.plt.Kernel = {
	Struct: function () {
	},
    
	struct_question_: function(thing) {
	    return thing instanceof this.Struct;
	},

	equal_question_ : function(x, y) {
	    if ("isEqual" in x) {
		return x.isEqual(y);
	    } else if ("isEqual" in y) {
		return y.isEqual(x);
	    } else {
		return x == y;
	    }
	},

    
	identity : function (x){
	    return x;
	},


	cons: function(x, y) {
	    return org.plt.types.Cons.makeInstance(x, y);
	},

	empty_question_: function(thing) {
	    return thing.isEmpty();
	},

	first: function(thing) {
	    return thing.first();
	},

	rest: function(thing) {
	    return thing.rest();
	},


	random: function(x) {
	    return org.plt.types.Rational.makeInstance
	    (Math.floor(org.plt.types.NumberTower.toInteger(x) * 
			Math.random()),
	     1);
	},

	sqrt: function(x) {
	    return org.plt.types.NumberTower.sqrt(x);
	},

	_equal_ : function(x, y, args) {
	    // FIXME: check against other args too.
	    return org.plt.types.NumberTower.equal(x, y);
	},

	_equal__tilde_ : function(x, y, delta) {
	    // FIXME: check against other args too.
	    return org.plt.types.NumberTower.approxEqual(x, y, delta);
	},

    
	sub1 : function(x) {
	    return org.plt.types.NumberTower.subtract(x, org.plt.types.Rational.ONE);
	},


	_plus_ : function(args) {
	    var i, sum = org.plt.types.Rational.ZERO;
	    for(i = 0; i < args.length; i++) {
		sum = org.plt.types.NumberTower.add(sum, args[i]);
	    }
	    return sum;
	},

	_dash_ : function(first, args) {
	    if (args.length == 0) {
		return org.plt.types.NumberTower.subtract(
							  org.plt.types.Rational.ZERO, first);
	    }

	    var i, diff = first;
	    for(i = 0; i < args.length; i++) {
		diff = org.plt.types.NumberTower.subtract(
							  diff, args[i]);
	    }
	    return diff;
	},


	_star_ : function(args) {
	    var i, prod = org.plt.types.Rational.ONE;
	    for(i = 0; i < args.length; i++) {
		prod = org.plt.types.NumberTower.multiply(prod, args[i]);
	    }
	    return prod;    
	},


	_slash_ : function(first, args) {
	    var i, div = first;
	    for(i = 0; i < args.length; i++) {
		div = org.plt.types.NumberTower.divide(div, args[i]);
	    }
	    return div;    
	},

	_greaterthan__equal_: function(first, second, rest) {
	    return chainTest(org.plt.types.NumberTower.greaterThanOrEqual,
			     first,
			     second,
			     rest);
	},

	_lessthan_: function(first, second, rest) {
	    return chainTest(org.plt.types.NumberTower.lessThan,
			     first,
			     second,
			     rest);
	}
    };
    })();








//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Types

org.plt.types = {};



// Posns
(function() {
    function posn(x,y) { this.x = x;
			 this.y = y; }
    posn.prototype = new org.plt.Kernel.Struct();
    posn.prototype.isEqual = function(other) {
        if (other instanceof posn) {
            return (((org.plt.Kernel.equal_question_((posn_dash_y(this)),(posn_dash_y(other)))))&&((((org.plt.Kernel.equal_question_((posn_dash_x(this)),(posn_dash_x(other)))))&&(org.plt.types.Logic.TRUE))));
        } else {
            return false;
        }
    } 
    function make_dash_posn(id0,id1) { return new posn(id0,id1); }
    function posn_dash_x(obj) { return obj.x; }
    function posn_dash_y(obj) { return obj.y; }
    function posn_question_(obj) { 
        return obj instanceof posn ; 
    }

    org.plt.Kernel.make_dash_posn = make_dash_posn;
    org.plt.Kernel.posn_question_ = posn_question_;
    org.plt.Kernel.posn_dash_x = posn_dash_x;
    org.plt.Kernel.posn_dash_y = posn_dash_y;
})();


org.plt.types.Logic = {
    TRUE : true,
    FALSE : false
};




(function() {
    function gcd(a, b) {
	var t;
	while (b != 0) {
	    t = a;
	    a = b;
	    b = t % b;
	}
	return a;
    }


    // Strings
    // For the moment, we just reuse Javascript strings.
    org.plt.types.String = String;
    org.plt.types.String.makeInstance = function(s) {
	return s;
    };


    // Symbols
    org.plt.types.Symbol = function(val) {
	this.val = val;
    }

    // makeInstance: string -> Symbol.
    org.plt.types.Symbol.makeInstance = function(val) {
	return new org.plt.types.Symbol(val);
    };

    org.plt.types.Symbol.prototype.isEqual = function(other) {
	return other instanceof org.plt.types.Symbol &&
	    this.val == other.val;
    };
    
    org.plt.types.Symbol.prototype.toString = function() {
	return this.val;
    };



    org.plt.types.Empty = function() {};
    org.plt.types.Empty.EMPTY = new org.plt.types.Empty();
    org.plt.types.Empty.prototype.first = function() {
	throw new Error("first can't be applied on empty.");
    };
    org.plt.types.Empty.prototype.rest = function() {
	throw new Error("rest can't be applied on empty.");
    };
    org.plt.types.Empty.prototype.isEmpty = function() {
	return true;
    };



    org.plt.types.Cons = function(f, r) {
	this.f = f;
	this.r = r;
    };

    org.plt.types.Cons.makeInstance = function(f, r) {
	return new org.plt.types.Cons(f, r);
    };

    org.plt.types.Cons.prototype.first = function() {
	return this.f;
    };

    org.plt.types.Cons.prototype.rest = function() {
	return this.r;
    };

    org.plt.types.Cons.prototype.isEmpty = function() {
	return false;
    };
    



    // Rationals

    org.plt.types.Rational = function(n, d) {
	var divisor = gcd(Math.abs(n), Math.abs(d));
	this.n = n / divisor;
	this.d = d / divisor;
    };

    org.plt.types.Rational.prototype.toString = function() {
	if (this.d == 1) {
	    return this.n + "";
	} else {
	    return this.n + "/" + this.d;
	}
    };

    org.plt.types.Rational.prototype.isEqual = function(other) {
	return other instanceof org.plt.types.Rational &&
	    this.n == other.n &&
	    this.d == other.d;
    };


    org.plt.types.Rational.prototype.add = function(other) {
	return org.plt.types.Rational.makeInstance(this.n * other.d + this.d * other.n,
						   this.d * other.d);
    };

    org.plt.types.Rational.prototype.subtract = function(other) {
	return org.plt.types.Rational.makeInstance((this.n * other.d) - 
						   (this.d * other.n),
						   (this.d * other.d));
    };

    org.plt.types.Rational.prototype.multiply = function(other) {
	return org.plt.types.Rational.makeInstance(this.n * other.n,
						   this.d * other.d);
    };

    org.plt.types.Rational.prototype.divide = function(other) {
	return org.plt.types.Rational.makeInstance(this.n * other.d,
						   this.d * other.n);
    };


    org.plt.types.Rational.prototype.toInteger = function(other) {
	return Math.floor(this.n / this.d);	
    };

    org.plt.types.Rational.prototype.toFloat = function(other) {
	return this.n / this.d;
    };


    org.plt.types.Rational.prototype.greaterThanOrEqual = function(other) {
	return this.n*other.d >= this.d*other.n;
    };

    org.plt.types.Rational.prototype.lessThan = function(other) {
	return this.n*other.d < this.d*other.n;
    };

    org.plt.types.Rational.prototype.sqrt = function() {
	var result = Math.sqrt(this.n / this.d);
	if (result == Math.floor(result)) {
	    return org.plt.types.Rational.makeInstance(result, 1);
	} else {
	    return org.plt.types.Floating.makeInstance(result);
	}
    };


    org.plt.types.Rational.makeInstance = function(n, d) {
	if (d < 0) {
	    n = -n;
	    d = -d;
	}

	if (d == 1 && 
	    0 <= n && 
	    n < org.plt.types.Rational._cache.length)
	    return org.plt.types.Rational._cache[n];
	else if (n == -1 && d == 1) 
	    return org.plt.types.Rational.NEGATIVE_ONE;
	else
	    return new org.plt.types.Rational(n, d);
    };

    org.plt.types.Rational.NEGATIVE_ONE = new org.plt.types.Rational(-1, 1);

    org.plt.types.Rational._cache = [];
    (function() {
	var i;
	for(i = 0; i < 100; i++)
	    org.plt.types.Rational._cache.push(
		new org.plt.types.Rational(i, 1));
    })();
    
    org.plt.types.Rational.ZERO = org.plt.types.Rational._cache[0];
    org.plt.types.Rational.ONE = org.plt.types.Rational._cache[1];


})();


//////////////////////////////////////////////////////////////////////

(function() {
    org.plt.types.Floating = function(n) {
	this.n = n;
    };

    org.plt.types.Floating.prototype.toString = function() {
	return this.n.toString();
    };

    org.plt.types.Floating.prototype.isEqual = function(other) {
	return other instanceof org.plt.types.Floating &&
	this.n == other.n;
    };

    org.plt.types.Floating.prototype.add = function(other) {
	return org.plt.types.Floating.makeInstance(this.n + other.n);
    };

    org.plt.types.Floating.prototype.subtract = function(other) {
	return org.plt.types.Floating.makeInstance(this.n - other.n);
    };

    org.plt.types.Floating.prototype.multiply = function(other) {
	return org.plt.types.Floating.makeInstance(this.n * other.n);
    };

    org.plt.types.Floating.prototype.divide = function(other) {
	return org.plt.types.Floating.makeInstance(this.n / other.n);
    };


    org.plt.types.Floating.prototype.toInteger = function(other) {
	return Math.floor(this.n);	
    };

    org.plt.types.Floating.prototype.toFloat = function(other) {
	return this.n;
    };

    org.plt.types.Floating.prototype.greaterThanOrEqual = function(other) {
	return this.n >= other.n;
    };

    org.plt.types.Floating.prototype.lessThan = function(other) {
	return this.n < other.n;
    };


    org.plt.types.Floating.prototype.sqrt = function() {
	return org.plt.types.Floating.makeInstance(Math.sqrt(this.n));
    };


    org.plt.types.Floating.makeInstance = function(n) {
	return new org.plt.types.Floating(n);
    };

})();    


//////////////////////////////////////////////////////////////////////
// NumberTower.
// 
// FIXME: hardcoded to handle rationals only.
// We must do the numeric tower.
org.plt.types.NumberTower = {};
org.plt.types.NumberTower.add = function(x, y) {
    return x.add(y);
};

org.plt.types.NumberTower.subtract = function(x, y) {
    return x.subtract(y);
};

org.plt.types.NumberTower.multiply = function(x, y) {
    return x.multiply(y);
};

org.plt.types.NumberTower.divide = function(x, y) {
    return x.divide(y);
};

org.plt.types.NumberTower.equal = function(x, y) {
    return x.isEqual(y);
};

org.plt.types.NumberTower.approxEqual = function(x, y, delta) {
    // fixme: use delta
    return x.isEqual(y);
};


org.plt.types.NumberTower.toInteger = function(num) {
    return num.toInteger();
}

org.plt.types.NumberTower.toFloat = function(num) {
    return num.toFloat();
}


org.plt.types.NumberTower.greaterThanOrEqual = function(x, y) {
    return x.toFloat() >= y.toFloat();
};

org.plt.types.NumberTower.lessThan = function(x, y) {
    return x.toFloat() < y.toFloat();
};


org.plt.types.NumberTower.sqrt = function(x) {
    return x.sqrt();
};


//////////////////////////////////////////////////////////////////////

// World 




//////////////////////////////////////////////////////////////////////
// Platform-specific stuff.
org.plt.platform = {};

(function() {
    
})();
org.plt.platform.getInstance = function() {
    return JavascriptPlatform;
};

var JavascriptPlatform = {};

JavascriptPlatform.getLocationService = function() {
    return JavascriptLocationService;
};

JavascriptPlatform.getTiltService = function() {
    return JavascriptTiltService;
};

var JavascriptLocationService = { 
    startService : function() {
	// fill me in.
    },
    shutdownService : function() {
	// fill me in.
    },

    addLocationListener : function(listener) {
	// fill me in.

    }
};

var JavascriptTiltService = { 
    startService : function() {
	// fill me in.
    },
    shutdownService : function() {
	// fill me in.
    },

    addOrientationChangeListener : function(listener) {
	// fill me in.

    },
    addAccelerationChangeListener : function(listener) {
	// fill me in.
    }
};


