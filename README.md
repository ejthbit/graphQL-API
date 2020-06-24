# graphQL-API

### Author: Filip Kotek <ejthbit@gmail.com>

### Build using:
* Express - Web framework
* Apollo-server- For running GraphQL server
* GraphQL - Query Language
* Mongoose - connect mongoDB models to mongoDB
* Nodemon - hotreloading
* Babel - ES7
* Yarn - package manager

### Available queries
* Employees
#### Example query to get all Employees
`query {
  Employees {
    id
    name
    position
  }
}
`
### Available mutations
* createPerson
* deletePerson
#### Example mutation to create new Employee
`mutation {
  createPerson(name: "Employee name", position: "Employee position") {
    id
    name
    position
  }
}
`
#### Example mutation to delete existing Employee
`mutation {
  deletePerson(id: "EmployeeID") {
    id
  }
}
`
