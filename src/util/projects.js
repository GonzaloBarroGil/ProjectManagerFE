export const getPersonName = (people, id) => {
    const person = people.find(person => person.id === id);
    return person?.name;
};

export const projectIsNotValid = ({
    name, data: {startDate, dueDate, assignee
}}) => !name || !startDate || !dueDate || !assignee;
