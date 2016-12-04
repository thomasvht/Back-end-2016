// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/ms/ms.d.ts
declare module 'ms' {

    /**
    * Short/Long format for `value`.
    *
    * @param {Number} value
    * @param {{long: boolean}} options
    * @return {String}
    */
    function ms(value: number, options?: { long: boolean }): string;

    /**
    * Parse the given `value` and return milliseconds.
    *
    * @param {String} value
    * @return {Number}
    */
    function ms(value: string): number;

    export = ms;
}
