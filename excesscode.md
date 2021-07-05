//some notes - vscode memento, uri, globalstate, vscode quickpick menu

---

//export class LocalStorageService {
// constructor(private storage: Memento) {}

// public getValue<T>(key: string): T {
// return this.storage.get<T>(key, null as any);
// }

// public setValue<T>(key: string, value: T) {
// this.storage.update(key, value);
// }
//}

---

// create a new status bar item that we can now manage
myStatusBarItem = vscode.window.createStatusBarItem(
vscode.StatusBarAlignment.Right,
100
);
myStatusBarItem.command = myCommandId;
subscriptions.push(myStatusBarItem);

// register some listener that make sure the status bar
// item always up-to-date
subscriptions.push(
vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem)
);
subscriptions.push(
vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem)
);

// update status bar item once at start
updateStatusBarItem();
}

function updateStatusBarItem(): void {
const n = getNumberOfSelectedLines(vscode.window.activeTextEditor);
if (n > 0) {
myStatusBarItem.text = `$(megaphone) ${n} line(s) selected`;
myStatusBarItem.show();
} else {
myStatusBarItem.hide();
}
}

function getNumberOfSelectedLines(
editor: vscode.TextEditor | undefined
): number {
let lines = 0;
if (editor) {
lines = editor.selections.reduce(
(prev, curr) => prev + (curr.end.line - curr.start.line),
0
);
}
return lines;

---

// click to bring up ctrl shift p search box
//input box to save youtube link to shortcut menu
//saved to some type of local storage?
//dialog box with 3 predefined options (AKA links to youtube videos)
// on option selection, change primary title (in status bar)
// load live youtube audio from windows player??

---

{ label: "coffee shop radio // 24/7 lofi hip-hop beats" },
{ label: "inner city [lofi / jazzhop / chill beats]" },
