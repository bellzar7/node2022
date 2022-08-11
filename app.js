const module1 = require('./module1');

require('./files')

const user = module1.createUser('Nate', 21);
user.sayHello()