const vscode = require('vscode');

function activate(context) {
    const projectUrl = 'https://phpshift.com/?vscode';
    const docsUrl = 'https://docs.phpshift.com/?vscode';

    vscode.window.showInformationMessage(
        `Check PHPShift's website for the installation guide: ${projectUrl}`,
        'Open Website',
        'Open Documentation'
    ).then(selection => {
        if (selection === 'Open Website') {
            vscode.env.openExternal(vscode.Uri.parse(projectUrl));
        } else if (selection === 'Open Documentation') {
            vscode.env.openExternal(vscode.Uri.parse(docsUrl));
        }
    });

    let openWebsite = vscode.commands.registerCommand('phpshift.openWebsite', () => {
        vscode.env.openExternal(vscode.Uri.parse(projectUrl));
    });

    let openDocs = vscode.commands.registerCommand('phpshift.openDocs', () => {
        vscode.env.openExternal(vscode.Uri.parse(docsUrl));
    });

    context.subscriptions.push(openWebsite, openDocs);
}

function deactivate() {}

module.exports = { activate, deactivate };
