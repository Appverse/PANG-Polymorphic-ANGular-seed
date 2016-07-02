# Server API

### common steps
```sh
tns install
npm run typings (installs typings)
```
### Nativescript start
```sh
npm install -g nativescript (run only once)
tns emulate ios
tns emulate android
```
### Webapp start
```sh
npm start
```
open (http://localhost:9000/)

### Server start
```sh
npm run server
```

### API ( http://localhost:3000/api )

[../products](http://localhost:3000/api/products)
- __GET__: Retrieve list of products (json-generator formatted)

[../cart](http://localhost:3000/api/cart)
- __GET__: Retrieve cart
- __DELETE__: Delete complete cart

[../cart/item/:id](http://localhost:3000/api/cart/item/:id)
- __GET__: Get selected product info
- __PUT__: Add selected product to cart
- __DELETE__: Delete selected product to cart

[../cart/item/:id/all](http://localhost:3000/api/cart/item/:id/all)
- __DELETE__: Deleltes all selected products from cart

[../checkout](http://localhost:3000/api/checkout)
- __POST__: Sends product list to store
    - _form-data format_
        ```json
        {
            name: string,
            email: string,
            card: string
        }
        ```
