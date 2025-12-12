export function ChangeTheme(styles, className, theme) {
    return [styles[className], styles[theme]].join(' ');
}

export function FormatDate(day, month) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return `${day} ${months[month]}`;
}