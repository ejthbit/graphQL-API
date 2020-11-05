import Person from '../models/Person'

export const resolvers = {
    Query: {
        Employees: () => Person.find(),
    },
    Mutation: {
        createPerson: async (_, {name, position}) => {
            const Employee = new Person({name, position})
            await Employee.save()
            return Employee
        },
        deletePerson: async (_, {id}) => {
            const removedPerson = await Person.findByIdAndDelete(id)
            if (!removedPerson) {
                throw new Error('error')
            }
            return removedPerson
        },
    },
}
