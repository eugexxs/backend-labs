const currentDate = new Date();
global.date = currentDate;
global.name = "Yevhen";
module.exports.getMessage = () => {
    return `З поверненням, ${global.name}. Поточний час і дата: ${global.date}`;
}

