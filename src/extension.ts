// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "apigator" is now active!');

	let disposable = vscode.commands.registerCommand('apigator.generateTest', () => {
		generateTest();
	});

	disposable = vscode.commands.registerCommand('apigator.generateConsoleApplication', () => {
		generateConsoleApplication();
	});

	disposable = vscode.commands.registerCommand('apigator.generateAtCommandHandler', () => {
		generateAtCommandHandler();
	});

	disposable = vscode.commands.registerCommand('apigator.generateStandardApi', () => {
		generateStandardApi();
	});

	disposable = vscode.commands.registerCommand('apigator.generateRestApi', () => {
		generateRestApi();
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

async function generateConsoleApplication() {
	const result = await vscode.window.showQuickPick(["ESP IDF Console",
	                                                  "NuttX Console",
													  "Zephyr Console",
													  "Arduino Console"]);

	vscode.window.showInformationMessage('Selected ' + result);

	let text = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.document.getText() : "NO YAML FILE";
	vscode.window.showInformationMessage('Hello World from apigator!' + text);

}

async function generateStandardApi() {
	const result = await vscode.window.showQuickPick(["ESP IDF API",
	                                                  "NuttX API",
													  "Zephyr API",
													  "Arduino API"]);

	vscode.window.showInformationMessage('Selected ' + result);
}

async function generateRestApi() {
	const result = await vscode.window.showQuickPick(["REST API for ESP IDF HTTP/HTTPS",
	                                                  "NuttX REST API",
													  "Zephyr REST API",
													  "Arduino REST API"]);

	vscode.window.showInformationMessage('Selected ' + result);
}

async function generateAtCommandHandler() {
	const result = await vscode.window.showQuickPick(["ESP IDF AT Command Handler",
	                                                  "NuttX AT Command Handler",
													  "Zephyr AT Command Handler",
													  "Arduino AT Command Handler"]);

	vscode.window.showInformationMessage('Selected ' + result);
}

async function generateTest() {
	const result = await vscode.window.showQuickPick(["PyTest - ",
	                                                  "NuttX AT Command Handler",
													  "Zephyr AT Command Handler",
													  "Arduino AT Command Handler"]);

	vscode.window.showInformationMessage('Selected ' + result);
}
