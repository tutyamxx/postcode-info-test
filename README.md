# Postcode Info Test

Simple API Test

# How to run it

1. Fork or Clone this repository
2. Install the required dependencies
3. To access the API `/` home endpoint -> `http://localhost:3000`
4. To access the API `/postcodeinfo/{POSTCODE}` -> `http://localhost:3000/postcodeinfo/{POSTCODE}`

# Problem to solve

1. Please if you can, use `es6` arrow functions.
2. Use `axios` module already pre-installed. Docs here: https://www.npmjs.com/package/axios
3. Build the endpoint located in (`/routes/postcodeinfo.js`) a `JSON` response based upon an inputted postcode (`E1 6AN`), using an API call on `https://api.postcodes.io/postcodes/{POSTCODE}`:
4. Make sure the response is returned in the format below:

```
{
    "status": "status code as integer"
    "result": {
        "postcode": "queried postcode",
        "longitude" "longitude as float",
        "latitude": "latitude as float",
        "admin_county", "",
        "parliamentary_constituency": "",
        "region": ""
    }
}
```
Bonus Points:

- Write some unit tests for the endpoint above using `Mocha` (already set up, see `tests` directory). You can take some info from `test/api_test.js` for the home `/` endpoint test already written.
- Make sure it's a `JSON` object
- Run the tests and make sure they are working

TIPS:

- Try to write a somewhat more complex tests for the `postcodeinfo/{POSTCODE}` endpoint. (Expect JSON, test the object and object properties to be numbers, string, depending of their value?)