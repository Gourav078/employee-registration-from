const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])
export const getDesignationCollection = ()=>([
    { id: '1', title: 'Sde 1' },
    { id: '2', title: 'Senior Manager' },
    { id: '3', title: 'Junior Manager' },
    { id: '4', title: 'Staff' },
])

export const getStatus = ()=>([
    {id: '1', title: 'Yes'},
    {id: '2', title: 'No'},
])

export const getCountryName = ()=>([
    {id: '1', title: 'Afghanistan'},
    {id: '2', title: 'Aland Islands'},
    {id: '3', title: 'Albania'},
    {id: '4', title: 'India'},
])

export const getStateName = ()=>([
    {id: '1', title: 'Andhra Pradesh'},
    {id: '2', title: 'Andaman and Nicobar Islands'},
    {id: '3', title: 'Assam'},
    {id: '4', title: 'Bihar'},
    {id: '5', title: 'Chandigarh'},
    {id: '6', title: 'West Bengal'},
])

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}