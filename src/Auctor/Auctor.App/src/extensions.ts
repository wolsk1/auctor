export { }
if (!String.prototype.hasOwnProperty('capitalize')) {
    String.prototype.capitalize = function (): string {
        return (!!this) ? this.charAt(0).toUpperCase() + this.substr(1).toLowerCase() : '';
    }
}
