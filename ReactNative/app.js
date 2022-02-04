import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('n1J09Sm46bMfbFLgKCOK1qkfDq1DoIkvPjwY3hud', 'zazI7A5Ug07VdaU5tXfnEJAwJVwhGs5TRrNIVZas');
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com/'

//this is a sample function I edited from the Back4App tutorial
async function saveNewUser() {
  //Create your Parse Object
  const newUser = new Parse.Object('newUser');
  //Define its attributes
  newUser.set('userName', 'A. Wed');
  newUser.set('yearOfBirth', 1997);
  newUser.set('emailContact', 'a.wed@email.io');
  //newUser.set('attributes', ['fast', 'good conditioning']);
  try {
    //Save the Object
    const result = await newUser.save();
    alert('New object created with objectId: ' + result.id);
  } catch (error) {
    alert('Failed to create new object: ' + error.message);
  }
}
