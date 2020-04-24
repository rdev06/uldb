# uldb Database

## An Ultra Lite Database for nodejs

### How to use

**npm i uldb**

Make a file data.json somewhere and fill {} in it (Preformatted text):

- this librarary is too much lite
- hence I had not used any checks or validation to make my code slow
- All inputs are done in string format only
- after creating a **_data.json_** file write **_{}_** inside it so that from begining only a json object will be there
- **_find()_** is used to get all the data
- **_get()_** is used to get data of required key
- **_set()_** is used to insert/update key data but it will not return output
- **_setMany()_** is used to insert/update object data but it will not return output
- **_setGet()_** much similar to **_set()_** but it will return output
- **_setGetAll()_** similar to **_setGet()_** but it will return all data of object
- **_unset()_** is used to delete key from data
- **_unsetGetAll()_** much similar to **_setGetAll_** inspite it is used to delete key from data
- No reason to **_unsetGet()_** because if key from data is deleted then no reason to see it.

```javascript
const uldb = require('uldb')('./data.json');
uldb.set('name', 'roshan', () => console.log('no output')); // did not give output
uldb.setMany({ gender: 'male', country: 'INDIA' }, () =>
  console.log('no output')
); // did not give output
uldb.setGet('gender', 'male', data => console.log(data)); //'male'
uldb.setGetAll('age', 23, data => console.log(data)); //{name:'roshan',gender:'male',age:23}
uldb.find(data => console.log(data)); //{name:'roshan',gender:'male',age:23}
uldb.unset('name', () => console.log('no output')); // did not give output
uldb.unsetGetAll('name', data => console.log(data));
```
