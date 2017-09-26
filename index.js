class Test {
}
Test.prototype.toString = function(){
  return "Hello"
}

t = new Test()
console.log(t.toString())

function Foo() 
{
}

// toString override added to prototype of Foo class
Foo.prototype.toString = function()
{
    return "[object Foo]";
}

var f = new Foo();
console.log(f.toString());
