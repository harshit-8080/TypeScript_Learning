// Avoiding `any` at Any Time Possible

// because it can hold any value and therefore doesn’t enforce any protections.


let x1 : any = "string";

x1 = true;
x1 = { title: "Object with a string member" };
x1 = [1, 2, 3];
x1 = 1;


// 1.   The danger is that the function may not be available.
// 2.   A piece of code that uses any is harder to maintain because it is harder to understand.


// 3.   any tells you less than what is required
function configure_(object: any, option: any) {
    // ...
}

interface Server {
    ipv4: string;
    ipv6: string;
    port: number;
    https: boolean;
}
interface ServerOptions {
    maxUser: number;
    maxConcurrentRequests: number;
}

function configure(object: Server, option: ServerOptions): Server {
    //...
    return object;
}

// While both pieces of code in execution will perform in the same way, 
// the second one is clearer about what inputs are needed and what the output will be.