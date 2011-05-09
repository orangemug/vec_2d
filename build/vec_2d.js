(function() {
  /*
  # Two dimensional vector class
  */  var Vec2D;
  Vec2D = (function() {
    function Vec2D(x, y) {
      this.x || (this.x = x != null ? x : 0);
      this.y || (this.y = y != null ? y : 0);
    }
    Vec2D.prototype.equal = function(v) {
      return this.x === v.x && this.y === v.y;
    };
    Vec2D.prototype.length = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vec2D.prototype.lengthSq = function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vec2D.prototype.add = function(v) {
      return new Vec2D(this.x + v.x, this.y + v.y);
    };
    Vec2D.prototype.minus = function(v) {
      return new Vec2D(this.x - v.x, this.y - v.y);
    };
    Vec2D.prototype.times = function(n) {
      return new Vec2D(this.x * n, this.y * n);
    };
    Vec2D.prototype.divide = function(n) {
      return new Vec2D(this.x / n, this.y / n);
    };
    Vec2D.prototype.norm = function() {
      var l;
      l = this.length();
      return new Vec2D(this.x / l, this.y / l);
    };
    Vec2D.prototype.toString = function() {
      return "[" + this.x + "," + this.y + "]";
    };
    Vec2D.prototype.copy = function() {
      return new Vec2D(this.x, this.y);
    };
    Vec2D.prototype.round = function() {
      return new Vec2D(Math.round(this.x), Math.round(this.y));
    };
    Vec2D.prototype.perp = function() {};
    return Vec2D;
  })();
}).call(this);
