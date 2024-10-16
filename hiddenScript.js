// hiddenScript.js
function getFlag() {
    const base64Strings = [
        "U29tZV9yYW5kb21fZW5jb2RlZA==",
        "R29vZCB0byBtZSBuZXcgc3RyaW5n==",
        "QW56ZW5DVEZ7aGFyZF90b19maW5kX20zX2FmdGVyX3Bhc3N3b3JkfQ==",
        "U29ycnksIEkgY2FtZSBmcm9tIGEgc3RhcnQgdG9wIQ==",
        "RXh0cmFjdGlvbnNfdG8gbWVldF9tZWRpYQ=="
    ];
    const shuffledStrings = base64Strings.sort(() => Math.random() - 0.5);
    return atob(shuffledStrings[4]);
}
