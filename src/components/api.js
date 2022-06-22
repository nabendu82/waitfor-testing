export const getUser = async name => name.toUpperCase();

export const getCar = async car => car[0].toUpperCase().concat(car.slice(1))

export const getUserWithCar = async name => {
    const user = await getUser(name);
    const car = await(user === 'NABENDU' ? getCar('nexon') : getCar('hyundai'));
    return `${user} drives a ${car}`;
}
