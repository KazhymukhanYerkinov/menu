export const required = value => {
    if (value) return undefined;
    return 'Поле, обязательное для заполнения';
}
export const requiredPhone = value => {
    if (value && !/^[0-9\b]+$/.test(value)) {
        return 'Пожалуйста, введите только номер телефона';
    }
    else if (value.length < 10) {
        return 'Минимальная длина 10';
    }
    return undefined;
}