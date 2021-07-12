import { window, commands, ExtensionContext } from "vscode";
import { showQuickPick, showInputBox } from "./basicInput";

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    //this is the commanand to star the project
    commands.registerCommand("samples.quickInput", async () => {
      //these are the 1st set of options to choose from, storing in context, derived as a promise
      const options: {
        [key: string]: (context: ExtensionContext) => Promise<void>;
      } = {
        //imported options from modules in BasicInput
        showQuickPick,
        showInputBox,
      };
      //creating this first set of quickpicks
      const quickPick = window.createQuickPick();
      //mapping through the options above
      quickPick.items = Object.keys(options).map((label) => ({ label }));
      // if and when selected, either execute the options functions above, or catch with error
      quickPick.onDidChangeSelection((selection) => {
        if (selection[0]) {
          options[selection[0].label](context).catch(console.error);
        }
      });
      //if click off menu, dispose of quickpick bar
      quickPick.onDidHide(() => quickPick.dispose());
      //display quickpick
      quickPick.show();
    })
  );
}
