process.stdout.write('\033c');

if (process.argv[2] === '--help') {
	console.log("2B2T Backdoor");
	console.log("==========================");
	process.exit(1);
}

console.log("Ratting Hausemaster...");
console.log("Once initialized, 2B2T Exploiter will begin to exploit 2B2T ports.");
console.log("This process may take a while on the first run.");
setTimeout(crack, 4500);

// Logs to console in green text
function log(msg) {
	console.log('\x1b[32m%s\x1b[0m', msg);
}

numPorts = 0;
function findPorts() {
	setTimeout(function () {
		log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

		numPorts++;
		if (numPorts < Math.floor(Math.random() * 150 + 1)) {
			findPorts();
		} else {
			console.log("Found Exploit in port 666!");

			console.log("Injecting payload...");
			console.log("Please wait while we perform the injection...");
			setTimeout(injectPayload, 3000);
		}
	}, 500);
}

function injectPayload() {
	setTimeout(function () {
		log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

		injectPayload();
	}, 500);
}

function crack() {
	console.log("Attempting to find vulnerable ports, please wait...");
	findPorts();
}
