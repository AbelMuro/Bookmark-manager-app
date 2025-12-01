export function ChangeTheme(styles, className, theme) {
    return [styles[className], styles[theme]].join(' ');
}