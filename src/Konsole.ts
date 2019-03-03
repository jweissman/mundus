export class Konsole {
    public static log(...msgs: any[]) {
        // tslint:disable-next-line:no-console
        console.debug(
            "[MUNDUS]",
            ...msgs,
        );
    }
}
