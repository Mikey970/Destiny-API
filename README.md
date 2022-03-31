# Destiny-API Summary
This is a simple API that contains a database of Destiny 2 gear and information on them. It has full CRUD functionality to Read, Write, Update, Delete different items in the database.

## Functionality and Routes
Using '/Destiny' with a get request will return all the items in the database. 
Using '/Destiny/:id' with a get request will return the weapon that matches the id that was entered.
Using '/Destiny' with a POST request will allow you to send JSON into the database and create your own gear.
Using '/Destiny/:id' with a PUT request and id will allow you to update the JSON with any parameters of your choosing. 


