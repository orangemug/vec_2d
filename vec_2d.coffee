###
# Two dimensional vector class
###
class Vec2D
  constructor: (x, y) ->
    @x or= x ? 0
    @y or= y ? 0


  # Compare
  equal: (v) ->
    (@x == v.x && @y == v.y)

  # Length of a vector
  length: () ->
    Math.sqrt( @x * @x + @y * @y )


  # Squared length of a vector
  lengthSq: () ->
    Math.sqrt( @x * @x + @y * @y )


  # Addition
  add: (v) ->
    new Vec2D( @x + v.x, @y + v.y )


  # Subtract
  minus: (v) ->
  	new Vec2D( @x - v.x, @y - v.y )


  # Multiplication
  # n = number multiplier
  times: (n) ->
  	new Vec2D( @x * n, @y * n )


  # Division
  # n = number to divide by
  divide: (n) ->
	  new Vec2D( @x/n, @y/n )


  # Normal
  norm: () ->
	  l = this.length()
	  new Vec2D( @x/l, @y/l )


  # Overides javascript toString method
  toString: () ->
	  "[#{@x},#{@y}]"


  # Simple copy
  copy: () ->
	  new Vec2D( @x , @y )


  # Round to integer vector
  round: () ->
	  new Vec2D( Math.round(@x) ,Math.round(@y) )


  # Perpendicular to current vector.
  perp: () ->
  	# TODO

