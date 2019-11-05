node-red-contrib-swagger-petstore
=====================

Node-RED node for swagger-petstore

This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.

Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install node-red-contrib-swagger-petstore

Usage
-----

### Methods

- addPet

    Add a new pet to the store

- updatePet

    Update an existing pet

- findPetsByStatus

    Multiple status values can be provided with comma separated strings

- findPetsByTags

    Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.

- getPetById

    Returns a single pet

- updatePetWithForm

    Updates a pet in the store with form data

- deletePet

    Deletes a pet

- uploadFile

    uploads an image

- getInventory

    Returns a map of status codes to quantities

- placeOrder

    Place an order for a pet

- getOrderById

    For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions

- deleteOrder

    For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors

- createUser

    This can only be done by the logged in user.

- createUsersWithArrayInput

    Creates list of users with given input array

- createUsersWithListInput

    Creates list of users with given input array

- loginUser

    Logs user into the system

- logoutUser

    Logs out current logged in user session

- getUserByName

    Get user by user name

- updateUser

    This can only be done by the logged in user.

- deleteUser

    This can only be done by the logged in user.


