const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('Usuario ya existe',() => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user); 
    expect(userController.findByIdretId(1234)).toBe(1234);
  })
  
  test('No se encientra e-mail',() => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user); 
    expect(userController.findByEmail("santiago@generation.org")).toBe("santiago@generation.org");
  })
  test('No se encientra e-mail',() => {
    let user = new User(12345,"John", "ejemplo@generation.org");
    userController.add(user); 
    expect(userController.findByEmail("ejemplo@generation.org")).toBe("ejemplo@generation.org");
  })
  test('No se encuentra Id',() => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user); 
    expect(userController.findById(1234)).toBe(1234);
  })
  test('No se encuentra Id',() => {
    let user = new User(12345,"Santiago", "santiago@generation.org");
    userController.add(user); 
    expect(userController.findById(12345)).toBe(12345);
  })
