const vscode = require('vscode');

function activate(context) {
    const projectUrl = 'https://phpshift.com/?vscode';

    vscode.window.showInformationMessage(
        `Check PHPShift's website for the installation guide: ${projectUrl}`,
        'Open Website'
    ).then(selection => {
        if (selection === 'Open Website') {
            vscode.env.openExternal(vscode.Uri.parse(projectUrl));
        }
    });

    let disposable = vscode.commands.registerCommand('phpshift.openWebsite', () => {
        vscode.env.openExternal(vscode.Uri.parse(projectUrl));
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
