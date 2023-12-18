// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "apigator" is now active!');

	let disposable = vscode.commands.registerCommand('apigator.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from apigator!');
	});

	disposable = vscode.commands.registerCommand('apigator.generateTest', () => {
		vscode.window.showInformationMessage('Generate Test!');
	});

	disposable = vscode.commands.registerCommand('apigator.generateConsoleApplication', () => {
		vscode.window.showInformationMessage('Generate Console Application!');
	});

	disposable = vscode.commands.registerCommand('apigator.generateAtCommandHandler', () => {
		vscode.window.showInformationMessage('Generate AT Command Handler!');
	});

	disposable = vscode.commands.registerCommand('apigator.generateStandardApi', () => {
		vscode.window.showInformationMessage('Generate Standard API!');
	});

	disposable = vscode.commands.registerCommand('apigator.generateRestApi', () => {
		vscode.window.showInformationMessage('Generate REST API!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
