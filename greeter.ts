class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};
var greeter = new Greeter("Welcome Kunal!");
var str = greeter.greet();
document.body.innerHTML = str;